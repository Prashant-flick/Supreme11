import client from '@repo/db/client'
import axios from 'axios';
import dotenv from 'dotenv';
import { Page } from "puppeteer";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

dotenv.config();
puppeteer.use(StealthPlugin());

const baseUrl = process.env.BASE_URL || "https://www.espncricinfo.com";
const backendUrl = process.env.BACKEND_URL;
const email = process.env.EMAIL;
const password = process.env.PASSWORD;
let accessToken = "";
const balls: { [over: string]: { ballRun: string, overNo: string, overBallNo: string, whatHappend: string, whatHappendWicket: string, send: boolean, inningId: string, otherInningId: string } } = {};

async function getAccessToken() {
  const tokenRes = await axios.post(`${backendUrl}/signin`, {
    email,
    password
  })

  accessToken = tokenRes.data.accessToken
}

async function autoScroll(page: Page) {
  await page.evaluate(async () => {
    await new Promise<void>((resolve) => {
      let totalHeight = 0;
      const distance = 300;
      let lastScrollTop = -1;
      let idleCounter = 0;

      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        totalHeight += distance;

        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        // If scrollTop doesn't change for 5 intervals, stop
        if (scrollTop === lastScrollTop) {
          idleCounter++;
        } else {
          idleCounter = 0;
          lastScrollTop = scrollTop;
        }

        if (idleCounter > 5) {
          clearInterval(timer);
          resolve();
        }
      }, 300);
    });
  });
}

function nameMatches(shortName: string, fullName: string): boolean {
  if (fullName.toLowerCase().includes(shortName.toLowerCase())) return true;
  if (!shortName) return false;

  let [shortFirstInitial, ...shortLastParts] = shortName.split(' ');
  shortFirstInitial = shortFirstInitial.toLowerCase();
  const shortLast = shortLastParts.join(' ').toLowerCase();

  let [fullFirst, ...fullLastParts] = fullName.split(' ');
  fullFirst = fullFirst.toLowerCase();
  const fullLast = fullLastParts.join(' ').toLowerCase();

  console.log(shortFirstInitial, fullFirst, shortLast, fullLast);
  if (!shortLast) {
    return (fullLast.includes(shortFirstInitial) || fullFirst.includes(shortFirstInitial))
  }

  return (
    fullFirst[0].toLowerCase() === shortFirstInitial[0].toLowerCase() &&
    fullLast.includes(shortLast)
  );
}

async function findPlayerIdWithName(name: string, squadId: string) {
  const allPlayers = await client.players.findMany({
    where: {
      squadId
    }
  });

  // console.log(allPlayers);


  const playerRes = allPlayers.find(player => nameMatches(name, player.name));
  console.log(playerRes);
}

// findPlayerIdWithName('de kock', 'cm9rqntuf00bsl7iogjv0rfb5');

async function test() {
  await getAccessToken();
  if (!accessToken) {
    console.error('access Token Required');
    return;
  }

  const res = await axios.get(`${backendUrl}/matches/league/IPL`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })

  console.log(res.data);
}

async function deleteMatches() {
  await getAccessToken();
  if (!accessToken) {
    console.log('access Token required');
    return;
  }

  try {
    const matchesRes = await axios.get(`${backendUrl}/matches/all`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    const matches = matchesRes.data.matchesRes;
    console.log('total matches--> ', matches.length);

    let i = 0;
    for (const match of matches) {
      if (match.id === 'cm9uo0e8j0000l79o79q97283') {
        continue;
      }
      await axios.delete(`${backendUrl}/matches/${match.id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      i++;
    }

    console.log('matches deleted--> ', i);

  } catch (error) {
    console.log('failed deleting matches', error);
  }
}

const getCompletedMatches = async (matchId: string, matchUrl: string) => {
  const startTime = Date.now();
  await getAccessToken();
  if (!accessToken) {
    console.log('accessToke is required');
    return;
  }

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const url = `${baseUrl}${matchUrl}`;

  // go to match fullscore and fetch all the balls
  const scoreBoardUrl = `${baseUrl}${matchUrl.split('/ball-by-ball-commentary')[0]}/full-scorecard`
  await page.goto(
    scoreBoardUrl,
    {
      waitUntil: "domcontentloaded",
      timeout: 100000,
    }
  )

  const rawInningOverData = await page.evaluate(() => {
    const fullScoreCard = document.querySelectorAll('.ds-rounded-lg.ds-mt-2');

    const inningFullOvers: any[] = [];
    fullScoreCard.forEach((card) => {
      const totalOverCards = card.querySelectorAll('td.ds-font-bold.ds-bg-fill-content-alternate.ds-text-tight-m.ds-min-w-max');
      let over = "";
      for (const overCard of totalOverCards) {
        const text = overCard.textContent?.trim().toLowerCase();
        if (text?.includes('ov')) {
          over = text?.split(' ov')[0];
        }
      }
      const findExtrasCards = card.querySelectorAll('tr.ds-text-tight-s');
      let extrastext = "";
      findExtrasCards.forEach((extrasCard) => {
        const text = extrasCard.textContent?.trim().toLowerCase();
        if (text?.includes('extras')) {
          extrastext = text;
        }
      })

      const extras = extrastext?.split('(')[1]?.split(')')[0].toLowerCase();
      let extrasBall = extras?.includes('w') ? Number(extras?.split('w ')[1]?.split(',')[0]) : 0;
      extrasBall += extras?.includes('nb') ? Number(extras?.split('nb ')[1]?.split(',')[0]) : 0;

      inningFullOvers.push({
        over,
        extrasBall
      })
    })
    return inningFullOvers;
  })

  const inningOverData: { over: string, extrasBall: number }[] = rawInningOverData.map((overData) => {
    return {
      over: overData.over,
      extrasBall: overData.extrasBall
    }
  });
  console.log(inningOverData);
  const allOver: { [overNo: string]: { isFetched: boolean } } = {};
  for (let i = 0; i < Number(inningOverData[0].over?.split('.')[0]); i++) {
    for (let j = 1; j <= 6; j++) {
      const over = i.toString() + j.toString() + '1st';
      allOver[over] = {
        isFetched: false
      };
    }
  }
  for (let i = 0; i < Number(inningOverData[1].over?.split('.')[0]); i++) {
    for (let j = 1; j <= 6; j++) {
      const over = i.toString() + j.toString() + '2nd';
      allOver[over] = {
        isFetched: false
      }
    }
  }
  for (let j = 1; j <= Number(inningOverData[1].over?.split('.')[1]); j++) {
    const over = inningOverData[1].over?.split('.')[0] + j.toString() + '2nd';
    allOver[over] = {
      isFetched: false
    }
  }
  // go to match ball-by-ball phase and get all balls data
  await page.goto(
    url,
    {
      waitUntil: "domcontentloaded",
      timeout: 100000,
    }
  );

  try {
    const teamsName: string[] = [];
    const rawTeamNameData = await page.evaluate(() => {
      const teamsNameCard = document.querySelectorAll('.ds-text-tight-l.ds-font-bold.ds-text-typo.hover\\:ds-text-typo-primary.ds-block.ds-truncate');
      const teamsName: any[] = [];
      teamsNameCard.forEach((el) => {
        const name = el.textContent?.trim();
        teamsName.push(name);
      });
      return teamsName;
    })
    rawTeamNameData.map((teamName) => {
      teamsName.push(teamName);
    })

    const matchRes = await axios.get(`${backendUrl}/matches/${matchId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    await autoScroll(page);

    console.log("fetching 2nd inning");

    const rawBallData2ndInning = await page.evaluate(() => {
      const ballCard = document.querySelectorAll(".ds-text-tight-m.ds-font-regular.ds-flex.ds-px-3.ds-py-2.lg\\:ds-px-4.ds-items-start.ds-select-none.lg\\:ds-select-auto");

      const balls: any[] = [];
      ballCard.forEach((ball) => {
        try {
          const ballElem = ball.querySelector(".ds-text-tight-s.ds-font-regular.ds-mb-1.lg\\:ds-mb-0.lg\\:ds-mr-3.ds-block.ds-text-center.ds-text-typo-mid1");
          const whatHappendElem = ball.querySelector(".ds-ml-4.lg\\:ds-ml-3.ds-text-typo-mid1");
          const whatHappendWicketElem = ball.querySelector(".ds-rounded.ds-bg-fill-content-alternate.ds-ml-4.lg\\:ds-ml-3.ds-mt-1.ds-inline-block.ds-p-3");
          const ballRunElem = ball.querySelector(".ds-flex.ds-items-center.ds-justify-center.ds-rounded.ds-overflow-hidden")

          const ballRun = ballRunElem?.textContent?.trim() || "";
          const overNo = ballElem?.textContent?.trim().split('.')[0] || "";
          const overBallNo = ballElem?.textContent?.trim().split('.')[1] || "";
          const whatHappend = whatHappendElem?.textContent?.trim();
          const whatHappendWicket = whatHappendWicketElem?.textContent?.trim() || "";

          balls.push({
            overNo,
            overBallNo,
            ballRun,
            whatHappend,
            whatHappendWicket,
          })
        } catch (error) {
          console.error("Error scraping squad", error)
        }
      })
      return balls;
    })

    console.log("fetching 2nd inning success--> ", rawBallData2ndInning.length);

    rawBallData2ndInning.map((ball, index) => {
      const over = ball.overNo + '.' + ball.overBallNo + ' ' + index + ' 2nd';
      if (!balls[over]) {
        balls[over] = {
          ballRun: ball.ballRun,
          overBallNo: ball.overBallNo,
          overNo: ball.overNo,
          whatHappend: ball.whatHappend,
          whatHappendWicket: ball.whatHappendWicket,
          send: false,
          inningId: matchRes.data.matchRes.innings[1].id,
          otherInningId: matchRes.data.matchRes.innings[0].id
        };
      }
    })

    console.log("parsing 2nd inning success");

    // await page.reload({
    //   waitUntil: 'domcontentloaded'
    // });

    await page.evaluate(() => {
      window.scroll(0, 0);
    });

    await page.waitForSelector('div.ds-flex.ds-items-center.ds-border-ui-stroke.ds-h-6.ds-px-4.ds-border.ds-bg-ui-fill.ds-rounded-full.ds-w-full.ds-min-w-max.ds-cursor-pointer');
    await page.click('div.ds-flex.ds-items-center.ds-border-ui-stroke.ds-h-6.ds-px-4.ds-border.ds-bg-ui-fill.ds-rounded-full.ds-w-full.ds-min-w-max.ds-cursor-pointer');

    await page.waitForSelector(`li.ds-w-full.ds-flex[title="${teamsName[0]} "]`);
    await page.click(`li.ds-w-full.ds-flex[title="${teamsName[0]} "]`);

    await page.waitForFunction(
      (teamName) => {
        const span = [...document.querySelectorAll('span.ds-text-tight-s.ds-font-regular.ds-text-typo')];
        return span.some((el) => el.textContent?.trim() === teamName);
      },
      {},
      teamsName[0]
    );

    await new Promise(resolve => setTimeout(resolve, 5000));
    await autoScroll(page);

    console.log("fetching 1st inning");

    const rawBallData1stInning = await page.evaluate(() => {
      const ballCard = document.querySelectorAll(".ds-text-tight-m.ds-font-regular.ds-flex.ds-px-3.ds-py-2.lg\\:ds-px-4.ds-items-start.ds-select-none.lg\\:ds-select-auto");

      const balls: any[] = [];
      ballCard.forEach((ball) => {
        try {
          const ballElem = ball.querySelector(".ds-text-tight-s.ds-font-regular.ds-mb-1.lg\\:ds-mb-0.lg\\:ds-mr-3.ds-block.ds-text-center.ds-text-typo-mid1");
          const whatHappendElem = ball.querySelector(".ds-ml-4.lg\\:ds-ml-3.ds-text-typo-mid1");
          const whatHappendWicketElem = ball.querySelector(".ds-rounded.ds-bg-fill-content-alternate.ds-ml-4.lg\\:ds-ml-3.ds-mt-1.ds-inline-block.ds-p-3");
          const ballRunElem = ball.querySelector(".ds-flex.ds-items-center.ds-justify-center.ds-rounded.ds-overflow-hidden")

          const ballRun = ballRunElem?.textContent?.trim() || "";
          const overNo = ballElem?.textContent?.trim().split('.')[0] || "";
          const overBallNo = ballElem?.textContent?.trim().split('.')[1] || "";
          const whatHappend = whatHappendElem?.textContent?.trim();
          const whatHappendWicket = whatHappendWicketElem?.textContent?.trim() || "";

          balls.push({
            overNo,
            overBallNo,
            ballRun,
            whatHappend,
            whatHappendWicket,
          })
        } catch (error) {
          console.error("Error scraping squad", error)
        }
      })
      return balls;
    })
    console.log("fetching 1st inning success--> ", rawBallData1stInning.length);
    rawBallData1stInning.map((ball, index) => {
      const over = ball.overNo + '.' + ball.overBallNo + ' ' + index + ' 1st';
      if (!balls[over]) {
        balls[over] = {
          ballRun: ball.ballRun,
          overBallNo: ball.overBallNo,
          overNo: ball.overNo,
          whatHappend: ball.whatHappend,
          whatHappendWicket: ball.whatHappendWicket,
          send: false,
          inningId: matchRes.data.matchRes.innings[0].id,
          otherInningId: matchRes.data.matchRes.innings[1].id
        };
      }
    })

    let cnt = 0;
    for (const ball in balls) {
      cnt++;
    }
    console.log("parsing 1st inning success, total balls--> ", cnt);

    for (const over in balls) {
      const overData = balls[over];
      if (!overData.send) {
        try {
          const overNo = overData.overNo;
          const overBallNo = overData.overBallNo
          const bowler = overData.whatHappend.split(' to ')[0];
          const batsman = overData.whatHappend.split(' to ')[1].split(',')[0];
          const run = overData.ballRun.includes('w') ? overData.ballRun.split('w')[0] || "0" : overData.ballRun.includes('W') ? overData.ballRun.split('W')[0] || "0" : overData.ballRun.includes('nb') ? overData.ballRun.split('nb')[0] || "0" : overData.ballRun.includes('lb') ? overData.ballRun.split('lb')[0] || "0" : overData.ballRun === "•" ? "0" : overData.ballRun;
          const whatHappendText = overData.whatHappend;
          const whatHappendWicketText = overData.whatHappendWicket;
          let catchingPlayer = overData.whatHappendWicket.includes(" c ") ? overData.whatHappendWicket.split(" c ")[1].split(' b ')[0] : "";
          const stumpPlayer = overData.whatHappendWicket.includes(" st ") ? overData.whatHappendWicket.split(" st ")[1].split(' b ')[0] : "";
          const runoutPlayers = overData.whatHappendWicket.includes(" run out ") ? overData.whatHappendWicket.split(" run out ")[1].split(')')[0] : "";
          const wicket = overData.ballRun.includes('W');
          const lbw = overData.whatHappendWicket.includes('lbw');
          const inningId = overData.inningId;
          const otherInningId = overData.otherInningId;
          catchingPlayer = catchingPlayer.includes('†') ? catchingPlayer.split('†')[1] : catchingPlayer;
          const overs = over.split(' ');
          const inning = overs[overs.length - 1];

          console.log(overNo, overBallNo, batsman, bowler, run, catchingPlayer || "nc", stumpPlayer || "ns", runoutPlayers || "nr", lbw)
          const idx = overNo + overBallNo + inning;
          console.log('idx--> ', idx);

          allOver[idx].isFetched = true;
          balls[over].send = true;
        } catch (error) {
          console.error("failed to send overData in database");
        }
      }
    }

    let totalBalls = Number(inningOverData[0].over.split('.')[0]) * 6 + (Number(inningOverData[0].over?.split('.')[1]) || 0) + inningOverData[0].extrasBall;
    totalBalls += Number(inningOverData[1].over.split('.')[0]) * 6 + (Number(inningOverData[1].over?.split('.')[1]) || 0) + inningOverData[1].extrasBall;
    const endTime = Date.now();
    console.log('total Balls--> ', totalBalls, ' total fetched Balls--> ', cnt, ' total Time--> ', (endTime - startTime) / (1000 * 60));
    let isAllBallFetched = true;
    for (const over in allOver) {
      if (!allOver[over].isFetched) {
        isAllBallFetched = false;
        break;
      }
    }
    console.log('is all ball fetched--> ', isAllBallFetched)
  } catch (error) {
    console.error
  } finally {
    browser.close();
  }
}

// getCompletedMatches('cm9vk9uhk00uil7905nw5u281', '/series/ipl-2025-1449924/lucknow-super-giants-vs-punjab-kings-13th-match-1473450/ball-by-ball-commentary')
// deleteMatches();

const clearMatchesPlayerScore = async (matchId: string) => {
  await getAccessToken();
  if (!accessToken) {
    console.log("access TOken required");
    return;
  }

  try {
    await client.$transaction(async (tx) => {
      const matchRes = await tx.matches.findFirst({
        where: {
          id: matchId
        }
      })

      const squad1Res = await tx.squad.findFirst({
        where: {
          id: matchRes?.team1Id
        },
        include: {
          players: true
        }
      })

      const squad2Res = await tx.squad.findFirst({
        where: {
          id: matchRes?.team2Id
        },
        include: {
          players: true
        }
      })

      for (const player of squad1Res?.players!) {
        await tx.playerScore.update({
          where: {
            playerId_matchId: {
              playerId: player.id,
              matchId
            }
          },
          data: {
            fantasyPoints: 0,
            run: 0,
            sixes: 0,
            fours: 0,
            runsConceded: 0,
            runout: 0,
            catches: 0,
            wickets: 0,
            ballsBowled: 0,
            dotBall: 0,
            others: 0,
          }
        })
      }
      for (const player of squad2Res?.players!) {
        await tx.playerScore.update({
          where: {
            playerId_matchId: {
              playerId: player.id,
              matchId
            },
          },
          data: {
            fantasyPoints: 0,
            run: 0,
            sixes: 0,
            fours: 0,
            runsConceded: 0,
            runout: 0,
            catches: 0,
            wickets: 0,
            ballsBowled: 0,
            dotBall: 0,
            others: 0,
          }
        })
      }
    })

    console.log('sucess')
  } catch (error) {
    console.log(error)
  }
}

clearMatchesPlayerScore('cm9xiesat0000l7hk0bb9klzb');
