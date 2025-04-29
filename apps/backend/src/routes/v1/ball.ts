import { Router } from "express";
import client from '@repo/db/client';
import { ballSchema } from "../../types";
import { adminMiddleware } from "../../middleware/admin";

export const ballRouter = Router();
ballRouter.use(adminMiddleware)

function nameMatches(shortName: string, fullName: string): boolean {
  if (!shortName) return false;
  shortName = shortName.toLowerCase();
  fullName = fullName.toLowerCase();
  if (fullName.includes(shortName)) return true;

  let shortNameArr: string[] = shortName.split(' ');
  if (shortNameArr.length === 1) return false;
  if (shortNameArr.length === 2) {
    return fullName.split(' ')[0].includes(shortNameArr[0][0]) && fullName.includes(shortNameArr[1]);
  }
  if (shortNameArr.length === 3) {
    if (fullName.split(' ').length === 3) {
      return (fullName.split(' ')[0].includes(shortNameArr[0][0]) && fullName.split(' ')[1].includes(shortNameArr[1][0]) && fullName.split(' ')[2].includes(shortNameArr[2]));
    } else if (fullName.split(' ').length === 2) {
      return (fullName.split(' ')[0].includes(shortNameArr[1][0]) && fullName.split(' ')[1].includes(shortNameArr[2]));
    } else {
      return false;
    }
  }
  return false;
}

ballRouter.post('/', async (req, res) => {
  const parsedData = ballSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.status(400)
      .json({
        message: "validation failed"
      })
    return
  }

  try {
    await client.$transaction(async (tx) => {
      const inningRes = await tx.inning.findFirst({
        where: {
          matchId: parsedData.data.matchId,
          whichInning: parsedData.data.inningNo
        }
      })

      const otherInningRes = await tx.inning.findFirst({
        where: {
          matchId: parsedData.data.matchId,
          whichInning: parsedData.data.inningNo
        }
      })

      const ballRes = await tx.balls.create({
        data: {
          inningId: inningRes?.id!,
          runout: parsedData.data.runout,
          bowler: parsedData.data.bowler,
          batsman: parsedData.data.batsman,
          overNo: Number(parsedData.data.overNo),
          overBallNo: Number(parsedData.data.overBallNo),
          catch: parsedData.data.catch,
          whatHappendtext: parsedData.data.whatHappendText,
          whatHappendWicketText: parsedData.data.whatHappendWicketText,
          lbw: parsedData.data.lbw,
          stump: parsedData.data.stump,
          run: parsedData.data.run
        }
      })

      let wicket: boolean = false;
      if (ballRes.whatHappendWicketText) {
        wicket = true
      }

      const squadRes = await tx.squad.findFirst({
        where: {
          id: parsedData.data.team1Id
        }
      })

      const squad2Res = await tx.squad.findFirst({
        where: {
          id: parsedData.data.team2Id
        }
      })

      let batsman1 = inningRes?.batsman1;
      let batsman2 = inningRes?.batsman2;

      if (!batsman1) {
        batsman1 = ballRes.batsman;
      } else if (!batsman2 && ballRes.batsman !== batsman1) {
        batsman2 = ballRes.batsman
      }

      let wicketBatsman = '';
      if (wicket) {
        if (ballRes.runout) {
          wicketBatsman = ballRes.whatHappendWicketText?.split(' run out ')[0] || '';
        } else if (ballRes.catch) {
          wicketBatsman = ballRes.whatHappendWicketText?.split(' c ')[0] || '';
        } else if (ballRes.lbw) {
          wicketBatsman = ballRes.whatHappendWicketText?.split(' lbw ')[0] || '';
        } else if (ballRes.stump) {
          wicketBatsman = ballRes.whatHappendWicketText?.split(' st ')[0] || '';
        } else {
          wicketBatsman = ballRes.whatHappendWicketText?.split(' b ')[0] || '';
        }
      }

      if (wicketBatsman) {
        if (batsman1 === wicketBatsman) {
          batsman1 = batsman2;
          batsman2 = '';
        } else if (batsman2 === wicketBatsman) {
          batsman2 = '';
        }
      }

      await tx.inning.update({
        where: {
          id: ballRes.inningId
        },
        data: {
          score: {
            increment: Number(ballRes.run)
          },
          wickets: {
            increment: wicket ? 1 : 0
          },
          batsman1,
          batsman2,
          bowler: ballRes.bowler,
          over: (ballRes.overNo + '.' + ballRes.overBallNo) || ''
        }
      })

      const squad1Players = await tx.players.findMany({
        where: {
          squadId: squadRes?.id
        }
      })

      const squad2Players = await tx.players.findMany({
        where: {
          squadId: squad2Res?.id
        }
      })

      const bowlerRes = squad2Players.find(player => nameMatches(ballRes.bowler, player.name));
      const batsmanRes = squad1Players.find(player => nameMatches(ballRes.batsman, player.name));
      const runoutPlayerRes = squad2Players.find(player => nameMatches(ballRes.runout!, player.name));
      const stumpPlayerRes = squad2Players.find(player => nameMatches(ballRes.stump!, player.name));
      const catchPlayerRes = squad2Players.find(player => nameMatches(ballRes.catch!, player.name));

      console.log(ballRes.bowler || 'b', '--> ', bowlerRes?.name || 'b', ' ', ballRes.batsman || 'ba', '--> ', batsmanRes?.name || 'ba', ' ', ballRes.runout || 'rn', '--> ', runoutPlayerRes?.name || 'rn', ' ', ballRes.stump || 'st', '--> ', stumpPlayerRes?.name || 'st', ' ', ballRes.catch || 'c', '--> ', catchPlayerRes?.name || 'c');

      if (!ballRes.runout && wicket) {
        await tx.playerScore.update({
          where: {
            playerId_matchId: {
              playerId: bowlerRes?.id!,
              matchId: inningRes?.matchId!
            }
          },
          data: {
            fantasyPoints: {
              increment: ballRes.lbw ? 34 : 26
            },
            wickets: {
              increment: 1
            },
            runsConceded: {
              increment: Number(ballRes.run)
            },
            ballsBowled: {
              increment: 1
            },
            dotBall: {
              increment: ballRes.run === '0' ? 1 : 0
            }
          }
        })

        if (ballRes.catch) {
          await tx.playerScore.update({
            where: {
              playerId_matchId: {
                matchId: inningRes?.matchId!,
                playerId: catchPlayerRes?.id!
              }
            },
            data: {
              fantasyPoints: {
                increment: 8
              },
              catches: {
                increment: 1
              }
            }
          })
        } else if (ballRes.stump) {
          await tx.playerScore.update({
            where: {
              playerId_matchId: {
                matchId: inningRes?.matchId!,
                playerId: stumpPlayerRes?.id!
              }
            },
            data: {
              fantasyPoints: {
                increment: 12
              },
              runout: {
                increment: 1
              }
            }
          })
        }
      } else if (ballRes.runout) {
        await tx.playerScore.update({
          where: {
            playerId_matchId: {
              matchId: inningRes?.matchId!,
              playerId: runoutPlayerRes?.id!
            }
          },
          data: {
            fantasyPoints: {
              increment: 12
            },
            runout: {
              increment: 1
            }
          }
        })

        await tx.playerScore.update({
          where: {
            playerId_matchId: {
              matchId: inningRes?.matchId!,
              playerId: bowlerRes?.id!
            }
          },
          data: {
            fantasyPoints: {
              increment: ballRes.run === '0' ? 1 : 0
            },
            dotBall: {
              increment: ballRes.run === '0' ? 1 : 0
            },
            ballsBowled: {
              increment: 1
            },
            runsConceded: {
              increment: Number(ballRes.run)
            }
          }
        })

        if (ballRes.run !== '0') {
          await tx.playerScore.update({
            where: {
              playerId_matchId: {
                matchId: inningRes?.matchId!,
                playerId: batsmanRes?.id!
              }
            },
            data: {
              fantasyPoints: {
                increment: Number(ballRes.run) + (ballRes.run === '4' || ballRes.run === '6' ? Number(ballRes.run) : 0)
              },
              run: {
                increment: Number(ballRes.run)
              },
              fours: {
                increment: ballRes.run === '4' ? 1 : 0
              },
              sixes: {
                increment: ballRes.run === '6' ? 1 : 0
              }
            }
          })
        }
      } else {
        await tx.playerScore.update({
          where: {
            playerId_matchId: {
              matchId: inningRes?.matchId!,
              playerId: bowlerRes?.id!
            }
          },
          data: {
            fantasyPoints: {
              increment: ballRes.run === '0' ? 1 : 0
            },
            dotBall: {
              increment: ballRes.run === '0' ? 1 : 0
            },
            ballsBowled: {
              increment: 1
            },
            runsConceded: {
              increment: Number(ballRes.run)
            }
          }
        })

        if (ballRes.run !== '0') {
          await tx.playerScore.update({
            where: {
              playerId_matchId: {
                matchId: inningRes?.matchId!,
                playerId: batsmanRes?.id!
              }
            },
            data: {
              fantasyPoints: {
                increment: Number(ballRes.run) + (ballRes.run === '6' || ballRes.run === '4' ? Number(ballRes.run) : 0)
              },
              run: {
                increment: Number(ballRes.run)
              },
              fours: {
                increment: ballRes.run === '4' ? 1 : 0
              },
              sixes: {
                increment: ballRes.run === '6' ? 1 : 0
              }
            }
          })
        }
      }
    })

    res.status(200)
      .json({
        message: "ball creation success",
      })
  } catch (error) {
    res.status(400)
      .json({
        message: "ball creation failed"
      })
    console.log('ball creation failed');
  }
})