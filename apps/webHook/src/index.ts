import axios, { AxiosInstance } from 'axios';
import { CookieJar } from 'tough-cookie';
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import dotenv from 'dotenv';
import { matchInterface } from "@repo/common/types";

dotenv.config();
puppeteer.use(StealthPlugin());

const cookieJar = new CookieJar();

const axiosInstance: AxiosInstance = axios.create({
  withCredentials: true,
  jar: cookieJar
});

const BackendUrl: string = process.env.BACKEND_URL || "http://localhost:3000";
const BaseUrl: string = process.env.BASE_URL || "https://www.espncricinfo.com";
let accessToken: string = "";
const email = process.env.EMAIL;
const password = process.env.PASSWORD;
let userId: string = "";

const getAccessToken = async () => {
  if (!email || !password) {
    console.error("email and passowrd required");
    return;
  }

  try {
    const signInRes = await axiosInstance.post(`${BackendUrl}/signin`, {
      email,
      password
    }, {
      withCredentials: true
    })

    accessToken = signInRes.data.accessToken
    userId = signInRes.data.userId
  } catch (error) {
    console.log(error)
  }
}

function convertTeamAbbreviation(teamName: string): string {
  switch (teamName.trim().toLowerCase()) {
    case 'chennai super kings': return 'CSK';
    case 'mumbai indians': return 'MI';
    case 'kolkata knight riders': return 'KKR';
    case 'royal challengers bengaluru':
    case 'royal challengers bangalore': return 'RCB';
    case 'sunrisers hyderabad': return 'SRH';
    case 'rajasthan royals': return 'RR';
    case 'delhi capitals': return 'DC';
    case 'punjab kings': return 'PBKS';
    case 'lucknow super giants': return 'LSG';
    case 'gujarat titans': return 'GT';
    default: return teamName;
  }
}

function parseToLocalDateTime(dateStr: string, timeStr?: string): Date {
  let localTime = "7:30 pm";

  if (timeStr) {
    const localTimeMatch = timeStr.match(/(\d{1,2}:\d{2} [ap]m)\s*Local/i);
    console.log(localTimeMatch);
    if (localTimeMatch) {
      localTime = localTimeMatch[1];
    }
  }

  const normalizedDateStr = dateStr.replace(/'(\d{2})/, "20$1");

  const fullStr = `${normalizedDateStr} ${localTime}`;
  const localDate = new Date(fullStr);
  console.log(fullStr);
  console.log(localDate);

  return localDate;
}

async function getMatches() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto(`${BaseUrl}/series/ipl-2025-1449924/match-schedule-fixtures-and-results`, {
      waitUntil: "domcontentloaded",
      timeout: 100000,
    });

    const rawMatches = await page.evaluate(() => {
      const matchCards = document.querySelectorAll('.ds-p-4.hover\\:ds-bg-ui-fill-translucent');
      const raw: any[] = [];

      matchCards.forEach((match) => {
        try {
          const matchDateElement = match.querySelector(".ds-text-compact-xs.ds-font-bold.ds-w-24");
          const matchTeamsScoreElem = match.querySelectorAll(".ci-team-score.ds-flex.ds-justify-between.ds-items-center.ds-text-typo.ds-my-1");
          const matchTeamsNameElem = match.querySelectorAll(".ds-text-tight-m.ds-font-bold.ds-capitalize.ds-truncate");
          const matchResultElem = match.querySelector(".ds-text-tight-s.ds-font-medium.ds-line-clamp-2.ds-text-typo");
          const matchVenueElem = match.querySelector(".ds-text-tight-s.ds-font-regular.ds-truncate.ds-text-typo-mid3");
          const matchTimeElem = match.querySelector(".ds-text-tight-xs");
          const matchLinkElem = match.querySelector('.ds-no-tap-higlight');

          const matchDate = matchDateElement?.textContent?.trim() || "";
          const matchTime = matchTimeElem?.textContent?.trim() || "";
          const matchVenue = matchVenueElem?.textContent?.trim().split('•')[1]?.split(',')[0]?.trim() || "";
          const matchResult = matchResultElem?.textContent?.trim() || "";
          const teamNames: string[] = [];
          matchTeamsNameElem.forEach((team) => {
            teamNames.push(team.textContent?.trim() || "");
          });

          const matchLink = matchLinkElem?.getAttribute("href") || "";

          raw.push({
            team1Raw: teamNames[0],
            team2Raw: teamNames[1],
            matchDate,
            matchTime,
            matchVenue,
            matchResult,
            matchLink,
            league: "IPL"
          });
        } catch (err) {
          console.error("Scraping error", err);
        }
      });

      return raw;
    });

    let cnt = 0;
    let prevDate: string;
    const matches: matchInterface[] = rawMatches.map((match) => {
      const team1 = convertTeamAbbreviation(match.team1Raw);
      const team2 = convertTeamAbbreviation(match.team2Raw);
      const resultWords = match.matchResult.split(' ');
      const winner = resultWords[1] === 'won'
        ? resultWords[0] === match.team1Raw ? 'team1' : 'team2'
        : 'tobeDeclared';
      const status = match.matchResult === 'Match yet to begin' ? 'upcoming' : 'ended';
      let date: Date;

      if (!match.matchDate) {
        date = parseToLocalDateTime(prevDate, match.matchTime)
      } else {
        date = parseToLocalDateTime(match.matchDate, match.matchTime);
        prevDate = match.matchDate;
      }

      const link: string[] = match.matchLink.split('/');
      link.pop();
      const newLink = link.join('/') + '/ball-by-ball-commentary';
      cnt++;

      return {
        team1Name: team1,
        team2Name: team2,
        toss: 'tobeDeclared',
        elected: 'tobeDeclared',
        status,
        winner,
        venue: match.matchVenue,
        link: newLink,
        date,
        league: match.league,
        result: match.matchResult,
      };
    });

    console.log('total matches--> ', cnt);

    return matches;
  } catch (error) {
    console.error("Error scraping cricket scores:", error);
    throw error;
  } finally {
    await browser.close();
  }
}

async function createMatches() {
  await getAccessToken();

  if (!accessToken) {
    console.error("accessToken required");
    return;
  }

  const matches = await getMatches();

  let i = 0;
  let cnt = 0;
  for (const match of matches) {
    if (i <= 0) {
      i++;
      continue;
    }
    try {
      console.log(match);
      const team1Res = await axios.get(`${BackendUrl}/squad/${match.team1Name}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      const team2Res = await axios.get(`${BackendUrl}/squad/${match.team2Name}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      const team1Id = team1Res.data.squadRes.id;
      const team2Id = team2Res.data.squadRes.id;
      console.log(team1Id, team2Id);
      await axios.post(`${BackendUrl}/matches`, {
        team1Id,
        team2Id,
        toss: match.toss,
        elected: match.elected,
        status: match.status,
        league: match.league,
        venue: match.venue,
        link: match.link,
        date: match.date.toISOString(),
        winner: match.winner,
        result: match.result
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })

      console.log('match creation success', i, ' -->', match.team1Name, ' ', match.team2Name);
      i++;
      cnt++;
    } catch (error) {
      console.log(error);
      return;
    }
  }
  console.log('matches created--> ', cnt);

}

createMatches();

setInterval(() => {
  getAccessToken();
}, 25 * 60 * 1000);