import { matchInterface } from "@repo/common/types";
import axios from "axios";
import dotenv from 'dotenv';
import { Page } from "puppeteer";
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
      return fullName.split(' ')[0].includes(shortNameArr[0][0]) && fullName.split(' ')[1].includes(shortNameArr[1][0]) && fullName.split(' ')[2].includes(shortNameArr[2]);
    } else {
      return false;
    }
  }
  return false;
}

async function autoScroll(page: Page, options = {
  scrollDistance: 400,        // Distance to scroll each step (px)
  scrollDelay: 500,           // Delay between scroll steps (ms)
  maxIdleCount: 10,           // Number of idle scrolls before stopping
  maxScrolls: 200,            // Safety limit to prevent infinite scrolling
  initialScrollPosition: 0,   // Starting scroll position
  maxScrollTimeout: 60000     // Maximum time to scroll (ms)
}) {
  // Create a timeout promise to limit total scrolling time
  const timeoutPromise = new Promise<void>((resolve) => {
    setTimeout(() => resolve(), options.maxScrollTimeout);
  });

  // Create the scrolling promise
  const scrollingPromise = page.evaluate(async (opts) => {
    return new Promise<string>((resolve) => {
      let totalScrolls = 0;
      let idleCounter = 0;
      let lastScrollHeight = document.body.scrollHeight;
      let initialHeight = document.body.scrollHeight;
      let lastElementCount = document.querySelectorAll('*').length;

      // Initial scroll to trigger any lazy loading
      window.scrollTo(0, opts.initialScrollPosition);

      console.log(`Starting auto-scroll. Initial height: ${initialHeight}px`);

      // If the page is short, no need to scroll
      if (initialHeight <= window.innerHeight) {
        console.log('Page fits in viewport, no scrolling needed');
        return resolve('Page fits in viewport');
      }

      const timer = setInterval(() => {
        // Scroll down by the specified distance
        window.scrollBy(0, opts.scrollDistance);
        totalScrolls++;

        // Get current metrics
        const currentScrollHeight = document.body.scrollHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        const currentElementCount = document.querySelectorAll('*').length;
        const scrolledToBottom = scrollPosition >= currentScrollHeight - 50;

        // Check if content has changed
        const heightChanged = currentScrollHeight > lastScrollHeight;
        const elementsChanged = currentElementCount > lastElementCount;
        const contentChanged = heightChanged || elementsChanged;

        // Log every 10 scrolls for debugging
        if (totalScrolls % 10 === 0) {
          console.log(
            `Scroll progress: ${Math.round((scrollPosition / currentScrollHeight) * 100)}%, ` +
            `Height: ${currentScrollHeight}px, ` +
            `Elements: ${currentElementCount}, ` +
            `Idle: ${idleCounter}`
          );
        }

        // If content changed, reset idle counter
        if (contentChanged) {
          idleCounter = 0;
          lastScrollHeight = currentScrollHeight;
          lastElementCount = currentElementCount;
        } else {
          idleCounter++;
        }

        // Stop conditions
        const reachedMaxScrolls = totalScrolls >= opts.maxScrolls;
        const idleMaxReached = idleCounter >= opts.maxIdleCount;

        if (scrolledToBottom || reachedMaxScrolls || idleMaxReached) {
          clearInterval(timer);

          let reason = 'Unknown';
          if (scrolledToBottom) reason = 'Reached bottom of page';
          else if (reachedMaxScrolls) reason = 'Reached maximum scroll limit';
          else if (idleMaxReached) reason = 'No new content detected';

          console.log(`Auto-scroll complete: ${reason}`);
          console.log(`Final height: ${currentScrollHeight}px (${totalScrolls} scrolls)`);

          resolve(reason);
        }
      }, opts.scrollDelay);
    });
  }, options);

  // Race the scrolling against the timeout
  const result = await Promise.race([scrollingPromise, timeoutPromise]);

  // Optional: Wait a moment for any final content to load
  return result;
}

// async function autoScroll(page: Page) {
//   await page.evaluate(async () => {
//     window.scrollBy(0, 5000);
//     await new Promise<void>((resolve) => {
//       const distance = 300;
//       let idleCounter = 0;
//       let lastScrollTop = document.body.scrollHeight;

//       const timer = setInterval(() => {
//         window.scrollBy(0, distance);

//         const scrollTop = document.body.scrollHeight;

//         if (scrollTop === lastScrollTop) {
//           idleCounter++;
//         } else if (scrollTop > lastScrollTop) {
//           idleCounter = 0;
//           lastScrollTop = scrollTop;
//         }
//         if (idleCounter >= 10) {
//           clearInterval(timer)
//           resolve();
//         }
//       }, 500);
//     });
//   });
// }

// async function autoScroll(page: Page) {
//   await page.evaluate(() => {
//     return new Promise((resolve) => {
//       let totalHeight = 0;
//       const distance = 500;

//       const timer = setInterval(() => {
//         const scrollHeight = document.body.scrollHeight;
//         window.scrollBy(0, distance);
//         totalHeight += distance;

//         if (totalHeight >= scrollHeight - window.innerHeight) {
//           clearInterval(timer);
//           resolve(true);
//         }
//       }, 1000);
//     });
//   });
// }


// async function autoScroll2(page: Page) {
//   await page.evaluate(async () => {
//     window.scrollBy(0, 1500);
//     await new Promise<void>((resolve) => {
//       const distance = 300;
//       let idleCounter = 0;
//       let lastScrollTop = document.body.scrollHeight;

//       const timer = setInterval(() => {
//         window.scrollBy(0, distance);

//         const scrollTop = document.body.scrollHeight;

//         if (scrollTop === lastScrollTop) {
//           idleCounter++;
//         } else if (scrollTop > lastScrollTop) {
//           idleCounter = 0;
//           lastScrollTop = scrollTop;
//         }
//         if (idleCounter >= 10) {
//           clearInterval(timer)
//           resolve();
//         }
//       }, 500);
//     });
//   });
// }

const getCompletedMatches = async (matchId: string, matchUrl: string, page: Page) => {
  console.log('get complete matches enter')
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

  await page.goto(
    url,
    {
      waitUntil: "domcontentloaded",
      timeout: 100000,
    }
  );

  try {
    const teamsName: string[] = [];
    console.log('fetching team name')
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
    console.log('fetching teamname done')

    const matchRes = await axios.get(`${backendUrl}/matches/${matchId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    console.log('clicking switch');

    await page.click('.ds-flex.ds-items-center.ds-border-ui-stroke.ds-h-6.ds-px-4.ds-border.ds-bg-ui-fill.ds-rounded-full.ds-w-full.ds-min-w-max.ds-cursor-pointer');

    console.log('clicked switch');

    await new Promise(resolve => setTimeout(resolve, 3000));

    console.log('waiting for team selector');

    await page.waitForSelector(`li.ds-w-full.ds-flex[title="${teamsName[0]} "]`);
    await page.click(`li.ds-w-full.ds-flex[title="${teamsName[0]} "]`);
    console.log('team selector clicked');

    await new Promise(resolve => setTimeout(resolve, 4000));

    console.log('scrolling page 1');
    await autoScroll(page, {
      initialScrollPosition: 1500,
      scrollDistance: 300,
      scrollDelay: 500,
      maxIdleCount: 20,
      maxScrolls: 300,
      maxScrollTimeout: 2 * 60 * 1000
    });

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

    await page.reload({
      waitUntil: "domcontentloaded"
    })

    await page.click('.ds-flex.ds-items-center.ds-border-ui-stroke.ds-h-6.ds-px-4.ds-border.ds-bg-ui-fill.ds-rounded-full.ds-w-full.ds-min-w-max.ds-cursor-pointer');

    console.log('clicked switch 2');

    await new Promise(resolve => setTimeout(resolve, 4000));
    await page.screenshot({ path: 'hehe.png' })

    console.log('waiting for team selector 2');

    await page.waitForSelector(`li.ds-w-full.ds-flex[title="${teamsName[1]} "]`);
    await page.click(`li.ds-w-full.ds-flex[title="${teamsName[1]} "]`);
    console.log('team selector clicked 2');

    await new Promise(resolve => setTimeout(resolve, 4000));

    console.log('scrolling page 2');

    await autoScroll(page, {
      initialScrollPosition: 1500,
      scrollDistance: 300,
      scrollDelay: 500,
      maxIdleCount: 20,
      maxScrolls: 300,
      maxScrollTimeout: 2 * 60 * 1000
    });

    console.log('scrolling page done');

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

    console.log('fetching second inning done');

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

    console.log("parsing both inning success, total balls--> ", rawBallData1stInning.length + rawBallData2ndInning.length);

    for (const over in balls) {
      const overData = balls[over];
      try {
        const overNo = overData.overNo;
        const overBallNo = overData.overBallNo;
        const overs = over.split(' ');
        const inning = overs[overs.length - 1];

        const idx = overNo + overBallNo + inning;
        allOver[idx].isFetched = true;
      } catch (error) {
        console.error("failed to send overData in database");
      }
    }

    let isAllBallFetched = true;
    for (const over in allOver) {
      if (!allOver[over].isFetched) {
        isAllBallFetched = false;
        break;
      }
    }
    console.log('is all ball fetched--> ', isAllBallFetched)
    return isAllBallFetched;
  } catch (error) {
    console.log(error)
    return false;
  }
}

async function createBalls(match: matchInterface) {
  try {
    const startTime = Date.now();
    if (!accessToken || !match) {
      console.error("access token required");
      return;
    }

    const startTime1 = Date.now();
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    console.log('browser created');

    let retries = 0;
    const maxRetries = 5;
    while (retries < maxRetries) {
      let isGetAllBalls = await getCompletedMatches(match.id!, match.link, page);
      if (isGetAllBalls) {
        const endTime = Date.now();
        console.log('total Time--> ', (endTime - startTime1) / (1000 * 60));
        break;
      } else {
        for (const over in balls) {
          delete balls[over]
        }
        retries++;
        console.log('retries--> ', retries)
      }
    }
    await browser.close();

    let cnt1 = 0;
    let cnt2 = 0;
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
          let catchingPlayer = overData.whatHappendWicket.includes(' c & b ') ? overData.whatHappendWicket.split(' c & b ')[1].split(' (')[0] : overData.whatHappendWicket.includes(" c ") ? overData.whatHappendWicket.split(" c ")[1].split(' b ')[0] : "";
          let stumpPlayer = overData.whatHappendWicket.includes(" st ") ? overData.whatHappendWicket.split(" st ")[1].split(' b ')[0] : "";
          let runoutPlayers = overData.whatHappendWicket.includes(" run out ") ? overData.whatHappendWicket.split(" run out ")[1].split(')')[0] : "";
          const wicket = overData.ballRun.includes('W');
          const lbw = overData.whatHappendWicket.includes('lbw');
          const inningId = overData.inningId;
          const otherInningId = overData.otherInningId;
          let checkForCatchingPlayer = catchingPlayer.split(' ');
          if (Number(checkForCatchingPlayer[checkForCatchingPlayer.length - 1])) {
            catchingPlayer = checkForCatchingPlayer[0] + ' ' + (1 !== checkForCatchingPlayer.length - 1 ? checkForCatchingPlayer[1] : '');
          }
          catchingPlayer = catchingPlayer.includes('†') ? catchingPlayer.split('†')[1] : catchingPlayer;
          catchingPlayer = catchingPlayer.includes('sub') ? '' : catchingPlayer;
          stumpPlayer = stumpPlayer.includes('†') ? stumpPlayer.split('†')[1] : stumpPlayer;
          stumpPlayer = stumpPlayer.includes('sub') ? '' : stumpPlayer;
          runoutPlayers = runoutPlayers.includes('sub') ? '' : runoutPlayers;
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
          console.error("failed to send overData in database", error);
          cnt2++;
        }
      }
    }

    const endTime = Date.now();
    console.log('total created ball', cnt1);
    console.log('total not created ball', cnt2);
    console.log('total time taken', (endTime - startTime) / (1000 * 60), 'min');

  } catch (error) {
    console.log('failed to create balls')
  }
}

async function seedAllCompletedMatches() {
  await getAccessToken();
  if (!accessToken) {
    console.log('accessToken Required');
    return
  }

  try {
    const matchesRes = await axios.get(`${backendUrl}/matches/all`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    const matches: matchInterface[] = matchesRes.data.matchesRes.filter((match: matchInterface) => {
      return match.status === 'ended'
    })

    let i = 0;
    for (const match of matches) {
      if (i <= 24) {
        i++;
        continue;
      }
      await createBalls(match);
      Object.keys(balls).forEach(key => {
        delete balls[key];
      });
      i++;
    }
    console.log('total matches--> ', i);
  } catch (error) {
    console.log(error)
  }
}

seedAllCompletedMatches();

setInterval(() => {
  getAccessToken();
}, 25 * 60 * 1000);