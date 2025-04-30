import { Router } from "express";
import { matchesSchema } from "../../types";
import client from "@repo/db/client";
import { Prisma } from "../../../../../packages/db/src/generated/prisma/client"
import { adminMiddleware } from "../../middleware/admin";
import { userMiddleware } from "../../middleware/user";

export const matchesRouter = Router();

matchesRouter.post('/', adminMiddleware, async (req, res) => {
  const parsedData = matchesSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.status(400)
      .json({
        message: "validation failed"
      })
    return
  }

  console.log('parsed');

  try {
    const date = new Date(parsedData.data.date);
    console.log(parsedData.data.date, ' created Date--> ', date);

    await client.$transaction(async (tx) => {
      const match = await tx.matches.create({
        data: {
          team1Id: parsedData.data.team1Id,
          team2Id: parsedData.data.team2Id,
          venue: parsedData.data.venue,
          date,
          winner: parsedData.data.winner,
          toss: parsedData.data.toss,
          elected: parsedData.data.elected,
          status: parsedData.data.status,
          league: parsedData.data.league,
          link: parsedData.data.link,
          result: parsedData.data.result
        }
      });

      const squad1Res = await tx.squad.findFirst({
        where: {
          id: parsedData.data.team1Id
        }
      })
      const squad2Res = await tx.squad.findFirst({
        where: {
          id: parsedData.data.team2Id
        }
      })

      await createInning("first", match.id, tx, match.status === 'ended' ? squad1Res?.name : '');
      await createInning("second", match.id, tx, match.status === 'ended' ? squad2Res?.name : '');
      await createMatchPlayer(parsedData.data.team1Id, match.id, tx);
      await createMatchPlayer(parsedData.data.team2Id, match.id, tx);
    });

    res.status(200)
      .json({
        message: "match creation success"
      })
  } catch (error) {
    res.status(400)
      .json({
        message: "match creation failed"
      })
    console.log('match creation failed')
  }
})

matchesRouter.get('/league/:leagueName', userMiddleware, async (req, res) => {
  try {
    const leagueName = req.params.leagueName;
    const matchesRes = await client.matches.findMany({
      where: {
        league: leagueName
      }
    })

    res.status(200)
      .json({
        message: "matches fetching success",
        matchesRes
      })
  } catch (error) {
    res.status(400)
      .json({
        message: "matches feching failed"
      })
  }
})

matchesRouter.get("/all", userMiddleware, async (req, res) => {
  try {
    const matchesRes = await client.matches.findMany({
      include: {
        innings: true
      }
    });

    res.status(200)
      .json({
        message: "fetching all matches success",
        matchesRes
      })
  } catch (error) {
    res.status(400)
      .json({
        message: "fetching all matches failed"
      })
  }
})

matchesRouter.get("/live", userMiddleware, async (req, res) => {
  try {
    const liveMatches = await client.matches.findMany({
      where: {
        status: "started"
      },
      include: {
        innings: true
      }
    })

    res.status(200)
      .json({
        message: "live matches fetching success",
        liveMatches
      })
  } catch (error) {
    res.status(400)
      .json({
        message: "getting live matches failed",
      })
  }
})

matchesRouter.get("/upcoming", userMiddleware, async (req, res) => {
  try {
    const upcomingMatches = await client.matches.findMany({
      where: {
        status: "upcoming"
      },
      include: {
        innings: true
      }
    })

    res.status(200)
      .json({
        message: "upcoming matches fetching success",
        upcomingMatches
      })
  } catch (error) {
    res.status(400)
      .json({
        message: "fetching upcoming matches failed",
      })
  }
})

matchesRouter.get("/completed", userMiddleware, async (req, res) => {
  try {
    const completedMatches = await client.matches.findMany({
      where: {
        status: "ended"
      },
      include: {
        innings: true
      }
    })

    res.status(200)
      .json({
        message: "completed matches fetching success",
        completedMatches
      })
  } catch (error) {
    res.status(400)
      .json({
        message: "fetching completed matches failed",
      })
  }
})

matchesRouter.get('/:matchId', userMiddleware, async (req, res) => {
  const matchId = req.params.matchId;
  if (!matchId) {
    res.status(400)
      .json({
        message: "matchId is required"
      })
    return;
  }

  try {
    const matchRes = await client.matches.findFirst({
      where: {
        id: matchId
      },
      include: {
        innings: {
          select: {
            id: true,
            teamName: true
          }
        }
      }
    })

    res.status(200)
      .json({
        message: "match fetching success",
        matchRes
      })
  } catch (error) {
    res.status(400)
      .json({
        message: "match fetching error"
      })
  }
})

matchesRouter.delete('/:matchId', adminMiddleware, async (req, res) => {
  const matchId = req.params.matchId;
  if (!matchId) {
    res.status(400)
      .json({
        message: "matchId is required"
      })
    return
  }

  try {
    console.log(matchId);
    await client.$transaction(async (tx) => {
      await tx.playerScore.deleteMany({
        where: {
          matchId
        }
      })

      const inningsRes = await tx.inning.findMany({
        where: {
          matchId
        }
      })

      for (const inning of inningsRes) {
        await tx.balls.deleteMany({
          where: {
            inningId: inning.id
          }
        })
        await tx.inning.delete({
          where: {
            id: inning.id
          }
        })
      }

      await tx.inning.deleteMany({
        where: {
          matchId
        }
      })

      await tx.matches.delete({
        where: {
          id: matchId
        }
      })
    })

    console.log('success');


    res.status(200)
      .json({
        message: "successfully deleted match"
      })
  } catch (error) {
    res.status(400)
      .json({
        message: "match deletion failed"
      })
    console.log(error);
  }
})

matchesRouter.patch('/status', adminMiddleware, async (req, res) => {
  const { status, matchId }: { status: 'upcoming' | 'ended' | 'started', matchId: string } = req.body;
  if (!status || !matchId) {
    res.status(400)
      .json({
        message: "status and matchId is required"
      })
    return;
  }

  try {
    const matchRes = await client.matches.update({
      where: {
        id: matchId
      },
      data: {
        status
      }
    })

    res.status(200)
      .json({
        message: "status updation success"
      })
  } catch (error) {
    res.status(400)
      .json({
        message: "updating match status failed"
      })
  }
})

const createInning = async (whichInning: "first" | "second", matchId: string, tx: Prisma.TransactionClient, teamName?: string) => {
  await tx.inning.create({
    data: {
      whichInning,
      score: 0,
      wickets: 0,
      extras: 0,
      matchId,
      teamName
    }
  });
}

const createMatchPlayer = async (squadId: string, matchId: string, tx: Prisma.TransactionClient) => {
  const PlayersRes = await tx.players.findMany({
    where: {
      squadId: squadId
    }
  })
  await Promise.all(
    PlayersRes.map(async (player) => {
      await tx.playerScore.create({
        data: {
          fantasyPoints: 0,
          run: 0,
          dotBall: 0,
          fours: 0,
          sixes: 0,
          others: 0,
          ballsBowled: 0,
          wickets: 0,
          runout: 0,
          runsConceded: 0,
          playerId: player.id,
          matchId,
          catches: 0,
          playingStatus: "notPlaying"
        }
      })
    })
  )
}