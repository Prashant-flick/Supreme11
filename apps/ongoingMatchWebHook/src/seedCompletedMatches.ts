import axios from "axios";
import dotenv from 'dotenv';
import { Page } from "puppeteer";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

dotenv.config();
puppeteer.use(StealthPlugin());

const BackendUrl = process.env.BACKEND_URL || "http://localhost:3000";
const BaseUrl = process.env.BASE_URL || "https://www.espncricinfo.com";
const email = process.env.EMAIL || "";
const password = process.env.PASSWORD || "";
let accessToken = "";
let userId = "";
const balls: { [over: string]: { ballRun: string, overNo: string, overBallNo: string, whatHappend: string, whatHappendWicket: string, send: boolean, inningId: string, otherInningId: string } } = {};

const getAccessToken = async () => {
  if (!email || !password) {
    console.error("email and passowrd required");
    return;
  }

  try {
    const signInRes = await axios.post(`${BackendUrl}/signin`, {
      email,
      password
    }, {
      withCredentials: true
    })

    accessToken = signInRes.data.accessToken
    userId = signInRes.data.userId
  } catch (error) {
    console.error
  }
}

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
      }, 2000);
    });
  });
}

const getCompletedMatches = async (matchId: string, matchUrl: string) => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const url = `${BaseUrl}${matchUrl}`;

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

    const matchRes = await axios.get(`${BackendUrl}/matches/${matchId}`, {
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

    console.log("fetching 2nd inning success");

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
    console.log("fetching 1st inning success");
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
  } catch (error) {
    console.error
  }
}

async function createBalls() {
  try {
    const startTime = Date.now();
    await getAccessToken();
    if (!accessToken) {
      console.error("access token required");
      return;
    }

    await getCompletedMatches('cm9uo0e8j0000l79o79q97283', '/series/ipl-2025-1449924/kolkata-knight-riders-vs-royal-challengers-bengaluru-1st-match-1473438/ball-by-ball-commentary');

    let cnt1 = 0;
    let cnt2 = 0;
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
          let catchingPlayer = overData.whatHappendWicket.includes(" c ") ? overData.whatHappendWicket.split(" c ")[1].split(' ')[0] : "";
          const stumpPlayer = overData.whatHappendWicket.includes(" st ") ? overData.whatHappendWicket.split(" st ")[1].split(' ')[0] : "";
          const runoutPlayers = overData.whatHappendWicket.includes(" run out ") ? overData.whatHappendWicket.split(" run out ")[1].split(')')[0] : "";
          const wicket = overData.ballRun.includes('W');
          const lbw = overData.whatHappendWicket.includes('lbw');
          const inningId = overData.inningId;
          const otherInningId = overData.otherInningId;
          catchingPlayer = catchingPlayer.includes('†') ? catchingPlayer.split('†')[1] : catchingPlayer;

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
            lbw,
            inningId,
            otherInningId
          }, {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          })
          cnt1++;
          balls[over].send = true;
        } catch (error) {
          console.error("failed to send overData in database");
          cnt2++;
        }
      }
    }

    const endTime = Date.now();
    console.log('total created ball', cnt1);
    console.log('total not created ball', cnt2);
    console.log('total time taken', (endTime - startTime) / (1000 * 60), 'min');

  } catch (error) {
    console.error
  }
}

createBalls();

setInterval(() => {
  getAccessToken();
}, 25 * 60 * 1000);