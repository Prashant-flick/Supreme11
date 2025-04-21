import { matchInterface } from "@repo/common/types";
import axios from "axios";
import dotenv from 'dotenv';
import { Page } from "puppeteer";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

dotenv.config();
puppeteer.use(StealthPlugin());

const accessToken = "";
const BackendUrl = process.env.BACKEND_URL || "http://localhost:3000";
const BaseUrl = process.env.BASE_URL || "https://www.espncricinfo.com";

async function autoScroll(page: Page) {
  await page.evaluate(() => {
    return new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 500;

      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight - window.innerHeight) {
          clearInterval(timer);
          resolve(true);
        }
      }, 1000);
    });
  });
}

const getCompletedMatches = async (page: Page, matchId: string) => {
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
  console.log(teamsName);

  const balls: { [over: string]: { ballRun: string, overNo: string, overBallNo: string, whatHappend: string, whatHappendWicket: string, send: boolean, inning: string } } = {};

  // await autoScroll(page);

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
  rawBallData2ndInning.map((ball) => {
    const over = ball.overNo + '.' + ball.overBallNo + ' 2nd';
    if (!balls[over]) {
      balls[over] = {
        ballRun: ball.ballRun,
        overBallNo: ball.overBallNo,
        overNo: ball.overNo,
        whatHappend: ball.whatHappend,
        whatHappendWicket: ball.whatHappendWicket,
        send: false,
        inning: '2nd'
      };
    }
  })

  await page.reload({
    waitUntil: 'domcontentloaded'
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

  await new Promise(resolve => setTimeout(resolve, 2000));
  // await autoScroll(page);

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
  rawBallData1stInning.map((ball) => {
    const over = ball.overNo + '.' + ball.overBallNo + ' 1st';
    if (!balls[over]) {
      balls[over] = {
        ballRun: ball.ballRun,
        overBallNo: ball.overBallNo,
        overNo: ball.overNo,
        whatHappend: ball.whatHappend,
        whatHappendWicket: ball.whatHappendWicket,
        send: false,
        inning: '1st'
      };
    }
  })

  for (const over in balls) {
    const overData = balls[over];
    if (!overData.send) {
      try {
        const overNo = overData.overNo;
        const overBallNo = overData.overBallNo
        const bowler = overData.whatHappend.split(' to ')[0];
        const batsman = overData.whatHappend.split(' to ')[1].split(',')[0];
        const run = overData.ballRun.includes('w') ? overData.ballRun.split('w')[0] : overData.ballRun.includes('W') ? overData.ballRun.split('W')[0] || "0" : overData.ballRun.includes('nb') ? overData.ballRun.split('nb')[0] : overData.ballRun.includes('lb') ? overData.ballRun.split('lb')[0] : overData.ballRun === "•" ? "0" : overData.ballRun;
        const whatHappendText = overData.whatHappend;
        const whatHappendWicketText = overData.whatHappendWicket;
        const catchingPlayer = overData.whatHappendWicket.includes(" c ") ? overData.whatHappendWicket.split(" c ")[1].split(' ')[0] : "";
        const stumpPlayer = overData.whatHappendWicket.includes(" st ") ? overData.whatHappendWicket.split(" st ")[1].split(' ')[0] : "";
        const runoutPlayers = overData.whatHappendWicket.includes(" run out ") ? overData.whatHappendWicket.split(" run out ")[1].split(')')[0] : "";
        const wicket = overData.ballRun.includes('W');
        const lbw = overData.whatHappendWicket.includes('lbw');
        const inning = overData.inning

        console.log(overNo, overBallNo, bowler, batsman, run, catchingPlayer, stumpPlayer, runoutPlayers, wicket, lbw, inning);
        await axios.post(`${BackendUrl}/ball`, {
          overNo,
          overBallNo,
          bowler,
          batsman,
          runout: runoutPlayers,
          catch: catchingPlayer,
          stump: stumpPlayer,
          whatHappendText,
          whatHappendWicketText,
          run,
          lbw
        }, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        })

        balls[over].send = true;
      } catch (error) {
        console.error("failed to send overData in database", error);
      }
    }
  }
}

const getMatchData = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  try {
    const url = `${BaseUrl}/series/ipl-2025-1449924/mumbai-indians-vs-chennai-super-kings-38th-match-1473475/ball-by-ball-commentary`;

    await page.goto(
      url,
      {
        waitUntil: "domcontentloaded",
        timeout: 100000,
      }
    );

    const rawMatchStatus = await page.evaluate(() => {
      const statusCard = document.querySelector('.ds-text-tight-s.ds-font-medium.ds-truncate.ds-text-typo');
      const text = statusCard?.textContent?.trim();
      return text;
    })
    const matchStatus = ['won', 'lost', 'tied'].some(status => rawMatchStatus?.includes(status));
    console.log(matchStatus);
    if (matchStatus) {
      await getCompletedMatches(page, '');
    }

    // const rawInningData = await page.evaluate(() => {
    //   const teamsNameCard = document.querySelectorAll('.ds-text-compact-m.ds-text-typo.ds-text-right.ds-whitespace-nowrap');
    //   const innings: any[] = [];
    //   teamsNameCard.forEach((el) => {
    //     const inning = el.textContent?.trim();
    //     innings.push(inning);
    //   });
    //   return innings;
    // })
    // const inningNo = rawInningData.length;
    // console.log(inningNo);

    await browser.close();
  } catch (error) {
    console.error("Error scraping cricket scores:", error);
    throw error;
  } finally {
    await browser.close();
  }
}

const matchInterval: { [matchId: string]: { interval: NodeJS.Timeout } } = {};

// const getMatchTime = async () => {
//   try {
//     const matches = await axios.get(`${BackendUrl}/matches/league/ipl2025`, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`
//       }
//     })
//     const isOnGoing: matchInterface[] | [] = matches.data.map((match: matchInterface) => {
//       // if match.time which is in datetime is close to current time by less than equal to 30 min return true
//       const matchTime = new Date(match.date).getTime();
//       const currentTime = new Date().getTime();
//       const diffMin = Math.abs(matchTime - currentTime) / (1000 * 60);
//       if (diffMin <= 30) {
//         return match;
//       }
//     })

//     isOnGoing.forEach((match) => {
//       if (!matchInterval[match.id as string].interval) {
//         const interval = setInterval(() => {
//           getMatchData(match);
//         }, 30 * 1000);
//         matchInterval[match.id as string].interval = interval
//       }
//     })
//   } catch (error) {
//     console.error
//   }
// }

// setInterval(() => {
//   getMatchTime();
// }, 30 * 60 * 1000);

getMatchData();