import { matchInterface } from "@repo/common/types";
import axios, { AxiosError } from "axios";
import dotenv from 'dotenv';
import { Browser, Page } from "puppeteer";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

dotenv.config();
puppeteer.use(StealthPlugin());

const backendUrl = process.env.BACKEND_URL || "http://localhost:3000";
const baseUrl = process.env.BASE_URL || "https://www.espncricinfo.com";
const email = process.env.EMAIL || "";
const password = process.env.PASSWORD || "";
let accessToken = "";
let userId = "";
const balls: { [over: string]: { ballRun: string, overNo: string, overBallNo: string, whatHappend: string, whatHappendWicket: string, send: boolean, inningId: string, otherInningId: string } } = {};
const matchInteravl: { [matchId: string]: { isOnGoing: boolean } } = {};

const getAccessToken = async () => {
  if (!email || !password) {
    console.error("email and passowrd required");
    return;
  }

  try {
    const signInRes = await axios.post(`${backendUrl}/signin`, {
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
  await page.evaluate(async () => {
    window.scrollBy(0, 6000);
    await new Promise<void>((resolve) => {
      const distance = 300;
      let idleCounter = 0;
      let lastScrollTop = document.body.scrollHeight;

      const timer = setInterval(() => {
        window.scrollBy(0, distance);

        const scrollTop = document.body.scrollHeight;

        if (scrollTop === lastScrollTop) {
          idleCounter++;
        } else if (scrollTop > lastScrollTop) {
          idleCounter = 0;
          lastScrollTop = scrollTop;
        }
        if (idleCounter >= 10) {
          clearInterval(timer)
          resolve();
        }
      }, 500);
    });
  });
}

const getMatches = async (matchId: string, page: Page) => {
  try {
    const teamsName: { name: string, score: string }[] = [];
    const rawTeamNameData = await page.evaluate(() => {
      const teamsNameCard = document.querySelectorAll('.ds-text-tight-l.ds-font-bold.ds-text-typo.hover\\:ds-text-typo-primary.ds-block.ds-truncate');
      const teamScoreCard = document.querySelectorAll('.ds-text-compact-m.ds-text-typo.ds-text-right.ds-whitespace-nowrap');

      const teamData: any[] = [];
      teamsNameCard.forEach((el) => {
        const name = el.textContent?.trim();
        teamData.push({
          name,
          score: ''
        })
      });
      teamScoreCard.forEach((el, index) => {
        const score = el.textContent?.trim() || '';
        teamData[index].score = score;
      })

      return teamData;
    })
    rawTeamNameData.map((data) => {
      teamsName.push(data);
    })

    const matchRes = await axios.get(`${backendUrl}/matches/${matchId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    const whichInning = teamsName[1].score !== '' ? '2nd' : '1st';
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

    rawBallData2ndInning.map((ball) => {
      const whatHappend = ball.whatHappend.split(',')[0];
      const over = ball.overNo + '.' + ball.overBallNo + ' ' + whatHappend + ' ' + ball.ballRun + ' ' + whichInning;
      const inningIdx = Number(whichInning[0]) - 1;
      const otherInningIdx = inningIdx === 1 ? 0 : 1;
      if (!balls[over]) {
        balls[over] = {
          ballRun: ball.ballRun,
          overBallNo: ball.overBallNo,
          overNo: ball.overNo,
          whatHappend: ball.whatHappend,
          whatHappendWicket: ball.whatHappendWicket,
          send: false,
          inningId: matchRes.data.matchRes.innings[0]?.teamName?.includes(teamsName[inningIdx].name) ? matchRes.data.matchRes.innings[0].id : matchRes.data.matchRes.innings[1].id,
          otherInningId: matchRes.data.matchRes.innings[0]?.teamName?.includes(teamsName[otherInningIdx].name) ? matchRes.data.matchRes.innings[0].id : matchRes.data.matchRes.innings[1].id,
        };
      }
    })

    console.log("parsing inning success");
  } catch (error) {
    console.log(error);
  }
}

async function createBalls(match: matchInterface) {
  console.log('create ball started');
  if (!accessToken || !match.id) {
    console.error("access token required");
    return;
  }

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  try {
    await axios.patch(`${backendUrl}/matches/status`, {
      matchId: match.id,
      status: 'started'
    }, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    const url = `${baseUrl}${match.link}`;

    await page.goto(
      url,
      {
        waitUntil: "domcontentloaded",
        timeout: 100000,
      }
    );

    setInterval(async () => {
      const startTime = Date.now();
      await getMatches(match.id!, page);
      let cnt1 = 0;
      let cnt2 = 0;

      //sorting balls by overNo
      const sortedBalls = Object.entries(balls)
        .sort(([, a], [, b]) => {
          const overA = parseInt(a.overNo, 10);
          const overB = parseInt(b.overNo, 10);

          if (overA !== overB) {
            return overA - overB;
          }

          const ballA = parseInt(a.overBallNo, 10);
          const ballB = parseInt(b.overBallNo, 10);

          return ballA - ballB;
        })
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {} as typeof balls);

      for (const over in sortedBalls) {
        const overData = balls[over];
        if (!overData.send) {
          try {
            const overNo = overData.overNo;
            const overBallNo = overData.overBallNo
            const bowler = overData.whatHappend.split(' to ')[0];
            const batsman = overData.whatHappend.split(' to ')[1].split(',')[0];
            const run = overData.ballRun.includes('w') ? overData.ballRun.split('w')[0] || "0" : overData.ballRun.includes('W') ? overData.ballRun.split('W')[0] || "0" : overData.ballRun.includes('nb') ? overData.ballRun.split('nb')[0] || "0" : overData.ballRun.includes('lb') ? overData.ballRun.split('lb')[0] || "0" : overData.ballRun === "•" ? "0" : overData.ballRun.includes('n-b') ? overData.ballRun.split('n-b')[0] : overData.ballRun.includes('b') ? overData.ballRun.split('b')[0] : overData.ballRun;
            const whatHappendText = overData.whatHappend;
            const whatHappendWicketText = overData.whatHappendWicket;
            let catchingPlayer = overData.whatHappendWicket.includes(" c ") ? overData.whatHappendWicket.split(" c ")[1].split(' b ')[0] : "";
            let stumpPlayer = overData.whatHappendWicket.includes(" st ") ? overData.whatHappendWicket.split(" st ")[1].split(' b ')[0] : "";
            let runoutPlayers = overData.whatHappendWicket.includes(" run out ") ? overData.whatHappendWicket.split(" run out ")[1].split(')')[0] : "";
            const wicket = overData.ballRun.includes('W');
            const lbw = overData.whatHappendWicket.includes('lbw');
            const inningId = overData.inningId;
            const otherInningId = overData.otherInningId;
            catchingPlayer = catchingPlayer.includes('†') ? catchingPlayer.split('†')[1] : catchingPlayer;
            stumpPlayer = stumpPlayer.includes('†') ? stumpPlayer.split('†')[1] : stumpPlayer;
            runoutPlayers = runoutPlayers.includes('(') ? runoutPlayers.split('(')[1] : runoutPlayers;
            runoutPlayers = runoutPlayers.includes('/') ? runoutPlayers.split('/')[0] : runoutPlayers;
            runoutPlayers = runoutPlayers.includes('†') ? runoutPlayers.split('†')[1] : runoutPlayers;

            console.log(overNo, overBallNo, run, batsman, bowler, runoutPlayers || 'rn', stumpPlayer || 'st', catchingPlayer || 'c', lbw, wicket);

            await axios.post(`${backendUrl}/ball`, {
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
            const err = error as { response?: { status: number, data: string } };
            console.error("failed to send overData in database", err.response?.status, err.response?.data);
            cnt2++;
          }
        }
      }

      const endTime = Date.now();
      console.log('total created ball', cnt1);
      console.log('total not created ball', cnt2);
      console.log('total time taken', (endTime - startTime) / (1000 * 60), 'min');
    }, 30 * 1000);
  } catch (error) {
    console.log(error);
    await browser.close();
  }
}

async function searchForUpcomingMatches() {
  await getAccessToken();
  if (!accessToken) {
    console.error('access Token required');
    return;
  }

  try {
    const matchesRes = await axios.get(`${backendUrl}/matches/league/IPL`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    const match: matchInterface = matchesRes.data.matchesRes.find((match: matchInterface) => {
      const matchTime = new Date(match.date).getTime();
      const startedTime = (matchTime - Date.now()) / (1000 * 60);

      if (startedTime < 10 && startedTime > -250) {
        return true;
      }
    })

    console.log(match);

    if (match) {
      if (!matchInteravl[match.id!]) {
        createBalls(match);
        matchInteravl[match.id!] = {
          isOnGoing: true,
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