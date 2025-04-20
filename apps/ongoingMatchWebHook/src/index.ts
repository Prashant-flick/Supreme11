import { matchInterface } from "@repo/common/types";
import axios from "axios";
import dotenv from 'dotenv';
import puppeteer from "puppeteer";

dotenv.config();

const accessToken = "";
const BackendUrl = process.env.BACKEND_URL || "http://localhost:3000";
const BaseUrl = process.env.BASE_URL || "https://www.espncricinfo.com";

const getMatchData = async (match: matchInterface) => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto(
      `${BaseUrl}/${match.link}`,
      {
        waitUntil: "domcontentloaded",
        timeout: 100000,
      }
    );

    const rawBallData = await page.evaluate(() => {
      const ballCard = document.querySelectorAll('.ds-text-tight-m.ds-font-regular.ds-flex.ds-px-3.ds-py-2.lg:\\ds-px-4.lg\\:ds-py-[10px].ds-items-start.ds-select-none.lg:ds-select-auto');

      const balls: any[] = [];
      ballCard.forEach((ball) => {
        try {
          const ballElem = ball.querySelector(".lg\\:ds-flex.lg:\\ds-items-center.lg\\:ds-px-2");
          const whatHappendElem = ball.querySelector(".xl\\:ds-w-[400px]");

          const ballRun = ballElem?.textContent?.trim().split('.')[1][1] || "";
          const overNo = ballElem?.textContent?.trim().split('.')[0] || "";
          const overBallNo = ballElem?.textContent?.trim().split('.')[1][0] || "";
          const whatHappend = whatHappendElem?.textContent?.trim();

          balls.push({
            overNo,
            overBallNo,
            ballRun,
            whatHappend
          })
        } catch (error) {
          console.error("Error scraping squad", error)
        }
      })
      return balls;
    })
    console.log(rawBallData);

    await browser.close();
  } catch (error) {
    console.error("Error scraping cricket scores:", error);
    throw error;
  } finally {
    await browser.close();
  }
}

const matchInterval: { [matchId: string]: { interval: NodeJS.Timeout } } = {};

const getMatchTime = async () => {
  try {
    const matches = await axios.get(`${BackendUrl}/matches/league/ipl2025`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    const isOnGoing: matchInterface[] | [] = matches.data.map((match: matchInterface) => {
      // if match.time which is in datetime is close to current time by less than equal to 30 min return true
      const matchTime = new Date(match.date).getTime();
      const currentTime = new Date().getTime();
      const diffMin = Math.abs(matchTime - currentTime) / (1000 * 60);
      if (diffMin <= 30) {
        return match;
      }
    })

    isOnGoing.forEach((match) => {
      if (!matchInterval[match.id].interval) {
        const interval = setInterval(() => {
          getMatchData(match);
        }, 60 * 1000);
        matchInterval[match.id].interval = interval
      }
    })
  } catch (error) {
    console.error
  }
}

setInterval(() => {
  getMatchTime();
}, 30 * 60 * 1000);