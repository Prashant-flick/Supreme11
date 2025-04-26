import { matchInterface } from "@repo/common/types";
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
const matchInteravl: { [matchId: string]: { interval: NodeJS.Timeout } } = {};

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

const getMatches = async (matchId: string, matchUrl: string) => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  try {
    const url = `${BaseUrl}${matchUrl}`;

    await page.goto(
      url,
      {
        waitUntil: "domcontentloaded",
        timeout: 100000,
      }
    );

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

    console.log("fetching inning");

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

    console.log("fetching inning success");

    rawBallData2ndInning.map((ball, index) => {
      const over = ball.overNo + '.' + ball.overBallNo;
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

    console.log("parsing inning success");

    let cnt = 0;
    for (const ball in balls) {
      cnt++;
    }
    console.log("total Balls--> ", cnt);
  } catch (error) {
    console.log(error);
  } finally {
    await browser.close();
  }
}

async function createBalls(match: matchInterface) {
  try {
    console.log('create ball started');

    const startTime = Date.now();
    if (!accessToken || !match.id) {
      console.error("access token required");
      return;
    }

    await getMatches(match.id, match.link);

    let cnt1 = 0;
    let cnt2 = 0;
    for (const over in balls) {
      const overData = balls[over];
      if (!overData.send) {
        console.log(over, overData);
        // try {
        //   const overNo = overData.overNo;
        //   const overBallNo = overData.overBallNo
        //   const bowler = overData.whatHappend.split(' to ')[0];
        //   const batsman = overData.whatHappend.split(' to ')[1].split(',')[0];
        //   const run = overData.ballRun.includes('w') ? overData.ballRun.split('w')[0] || "0" : overData.ballRun.includes('W') ? overData.ballRun.split('W')[0] || "0" : overData.ballRun.includes('nb') ? overData.ballRun.split('nb')[0] || "0" : overData.ballRun.includes('lb') ? overData.ballRun.split('lb')[0] || "0" : overData.ballRun === "•" ? "0" : overData.ballRun;
        //   const whatHappendText = overData.whatHappend;
        //   const whatHappendWicketText = overData.whatHappendWicket;
        //   let catchingPlayer = overData.whatHappendWicket.includes(" c ") ? overData.whatHappendWicket.split(" c ")[1].split(' ')[0] : "";
        //   const stumpPlayer = overData.whatHappendWicket.includes(" st ") ? overData.whatHappendWicket.split(" st ")[1].split(' ')[0] : "";
        //   const runoutPlayers = overData.whatHappendWicket.includes(" run out ") ? overData.whatHappendWicket.split(" run out ")[1].split(')')[0] : "";
        //   const wicket = overData.ballRun.includes('W');
        //   const lbw = overData.whatHappendWicket.includes('lbw');
        //   const inningId = overData.inningId;
        //   const otherInningId = overData.otherInningId;
        //   catchingPlayer = catchingPlayer.includes('†') ? catchingPlayer.split('†')[1] : catchingPlayer;

        //   await axios.post(`${BackendUrl}/ball`, {
        //     overNo,
        //     overBallNo,
        //     bowler,
        //     batsman,
        //     runout: runoutPlayers,
        //     catch: catchingPlayer,
        //     stump: stumpPlayer,
        //     whatHappendText,
        //     whatHappendWicketText,
        //     run,
        //     lbw,
        //     inningId,
        //     otherInningId
        //   }, {
        //     headers: {
        //       Authorization: `Bearer ${accessToken}`
        //     }
        //   })
        //   cnt1++;
        //   balls[over].send = true;
        // } catch (error) {
        //   console.error("failed to send overData in database");
        //   cnt2++;
        // }
        balls[over].send = true;
      }
    }

    const endTime = Date.now();
    console.log('total created ball', cnt1);
    console.log('total not created ball', cnt2);
    console.log('total time taken', (endTime - startTime) / (1000 * 60), 'min');
  } catch (error) {
    console.log(error)
  }
}

async function searchForUpcomingMatches() {
  await getAccessToken();
  if (!accessToken) {
    console.error('access Token required');
    return;
  }

  try {
    const matchesRes = await axios.get(`${BackendUrl}/matches/league/IPL`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    const match: matchInterface = matchesRes.data.matchesRes.find((match: matchInterface) => {
      const matchTime = new Date(match.date).getTime();
      const startedTime = (matchTime - Date.now()) / (1000 * 60);

      if (startedTime < 10 && startedTime > -200) {
        return true;
      }
    })

    if (match) {
      if (!matchInteravl[match.id!]) {
        console.log('interval started');
        createBalls(match)
        let interval = setInterval(() => {
          createBalls(match);
        }, 50 * 1000);
        matchInteravl[match.id!] = {
          interval
        }
      } else {
        console.log('interval exist');
      }
    }
  } catch (error) {
    console.error('matches fetching failed', error);
  }
}

setInterval(() => {
  getAccessToken();
}, 25 * 60 * 1000);

setInterval(() => {
  searchForUpcomingMatches();
}, 30 * 60 * 1000);
searchForUpcomingMatches();