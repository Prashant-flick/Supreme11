import axios from "axios";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import dotenv from 'dotenv';
import { matchInterface } from "@repo/common/types";

dotenv.config();
puppeteer.use(StealthPlugin());

const BackendUrl: string = process.env.BACKEND_URL || "http://localhost:3000";
const BaseUrl: string = process.env.BASE_URL || "https://www.espncricinfo.com";
let accessToken: string = "";

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

function parseDateTime(dateStr: string, timeStr: string): Date {
  const localTimeMatch = timeStr.match(/(\d{1,2}:\d{2} [ap]m) Local/);
  if (!localTimeMatch) return new Date();
  const localTime = localTimeMatch[1];
  const fullDateStr = dateStr.replace(/'(\d{2})/, "20$1");
  return new Date(`${fullDateStr} ${localTime}`);
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

          });
        } catch (err) {
          console.error("Scraping error", err);
        }
      });

      return raw;
    });

    const matches: matchInterface[] = rawMatches.map((match) => {
      const team1 = convertTeamAbbreviation(match.team1Raw);
      const team2 = convertTeamAbbreviation(match.team2Raw);
      const resultWords = match.matchResult.split(' ');
      const winner = resultWords[1] === 'won'
        ? resultWords[0] === match.team1Raw ? 'team1' : 'team2'
        : 'tobeDeclared';
      const status = match.matchResult === 'Match yet to begin' ? 'upcoming' : 'ended';
      const date = parseDateTime(match.matchDate, match.matchTime);
      const link: string[] = match.matchLink.split('/');
      link.pop();
      const newLink = link.join('/') + '/ball-by-ball-commentary';

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
      };
    });

    console.log(matches);
    return matches;
  } catch (error) {
    console.error("Error scraping cricket scores:", error);
    throw error;
  } finally {
    await browser.close();
  }
}

getMatches().catch(console.error);
