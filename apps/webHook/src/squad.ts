import axios from "axios";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import dotenv from 'dotenv';
import { playerInterface, squadInterface } from "@repo/common/types";

dotenv.config();
puppeteer.use(StealthPlugin());

const BackendUrl: string = process.env.BACKEND_URL || "http://localhost:3000";
const BaseUrl: string = process.env.BASE_URL || "https://www.espncricinfo.com";
let accessToken: string = "";

function convertTeamAbbreviation(teamName: string): string {
  switch (teamName.trim().toLowerCase()) {
    case 'chennai super kings':
      return 'CSK';
    case 'mumbai indians':
      return 'MI';
    case 'kolkata knight riders':
      return 'KKR';
    case 'royal challengers bengaluru':
    case 'royal challengers bangalore':
      return 'RCB';
    case 'sunrisers hyderabad':
      return 'SRH';
    case 'rajasthan royals':
      return 'RR';
    case 'delhi capitals':
      return 'DC';
    case 'punjab kings':
      return 'PBKS';
    case 'lucknow super giants':
      return 'LSG';
    case 'gujarat titans':
      return 'GT';
    default:
      return teamName;
  }
}

async function getSquads() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto(
      `${BaseUrl}/series/ipl-2025-1449924/squads`,
      {
        waitUntil: "domcontentloaded",
        timeout: 100000,
      }
    );

    const rawSquads = await page.evaluate(() => {
      const squadCards = document.querySelectorAll('.ds-flex.lg\\:ds-flex-row.sm\\:ds-flex-col.lg\\:ds-items-center.lg\\:ds-justify-between.ds-py-2.ds-px-4.ds-flex-wrap.odd\\:ds-bg-fill-content-alternate');

      const squads: any[] = [];
      squadCards.forEach((squad) => {
        try {
          const squadNameElement = squad.querySelector(".ds-text-comfortable-m.ds-text-typo.ds-underline.ds-decoration-ui-stroke.ds-block");
          const squadLinkElement = squad.querySelector(".ds-inline-flex.ds-items-start.ds-leading-none");
          const squadImgElement = squad.querySelector("img");

          const squadName = squadNameElement?.textContent?.trim() || "";
          const link = squadLinkElement?.getAttribute("href") || "";

          squads.push({
            squadName,
            playerLink: link,
            img: squadImgElement?.src || "",
          })
        } catch (error) {
          console.error("Error scraping squad", error)
        }
      })
      return squads;
    })
    const squads: squadInterface[] = rawSquads.map((squad) => {
      const newSquadName = squad.squadName.split(' Squad')[0];
      const name = convertTeamAbbreviation(newSquadName);

      return {
        squadName: name,
        playerLink: squad.playerLink,
        img: squad.img
      }
    })

    await browser.close();
    // console.log(squads);
    return squads;
  } catch (error) {
    console.error("Error scraping cricket scores:", error);
    throw error;
  } finally {
    await browser.close();
  }
}

async function getPlayers(url: string, squadId: string) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto(`${BaseUrl}/${url}`, {
      waitUntil: "domcontentloaded",
      timeout: 100000,
    })

    const rawPlayers = await page.evaluate(() => {
      try {
        const playerCards = document.querySelectorAll(".ds-border-line.odd\\:ds-border-r.ds-border-b");
        const players: any[] = [];

        playerCards.forEach((card) => {
          const playerNameElement = card.querySelector('.ds-text-compact-s.ds-font-bold.ds-text-typo.ds-underline.ds-decoration-ui-stroke.ds-block.ds-cursor-pointer');
          const playerRoleElement = card.querySelector('.ds-text-tight-s.ds-font-regular.ds-mb-2.ds-mt-1');
          const playerAgeElemenet = card.querySelector('.ds-flex.ds-items-center.ds-space-x-1');
          const playerDextureElem = card.querySelectorAll('.ds-flex.ds-items-start.ds-space-x-1');
          const playerCountryStatusElem = card.querySelector('.icon-airplanemode_active-filled.ds-text-icon');
          const PlayerImgElem = card.querySelector('img');

          const playerName = playerNameElement?.textContent?.trim() || "";
          const playerAge = playerAgeElemenet?.textContent?.trim().split(':')[1] || "";
          const playerRole = playerRoleElement?.textContent?.trim() || "";
          const playerCountryStatus = playerCountryStatusElem ? "foreign" : "indian";
          const playerDexture: ("left" | "right")[] = [];
          playerDextureElem.forEach((dextureElem) => {
            const dexture = dextureElem.textContent?.trim().split(':')[1] || "";
            playerDexture.push((dexture.split(' ')[0]).toLowerCase() as ("left" | "right"));
          })
          const playerImg = PlayerImgElem?.src || "";

          players.push({
            name: playerName,
            age: playerAge,
            battingDexture: playerDexture[0],
            bowlingDexture: playerDexture[1],
            countryStatus: playerCountryStatus,
            role: playerRole.includes("WicketKeeper") ? "wk" : playerRole.includes("Allrounder") ? "ar" : playerRole.includes("Batter") ? "batsman" : "bowler",
            img: playerImg
          })
        })

        return players;
      } catch (error) {
        console.error;
      }
      return [];
    })

    const players: playerInterface[] = rawPlayers?.map((player) => {
      return {
        name: player.name,
        age: player.age,
        battingDexture: player.battingDexture,
        bowlingDexture: player.bowlingDexture,
        img: player.img,
        role: player.role,
        countryStatus: player.countryStatus,
        squadId
      }
    });

    console.log(players);
    return players;
  } catch (error) {
    console.error
  } finally {
    await browser.close();
  }
}

async function createPlayer(player: playerInterface) {
  try {
    await axios.post(`${BackendUrl}/playerj`, player, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
  } catch (error) {
    console.error
  }
}

async function getSquadPlayers() {
  const squads = await getSquads();

  console.log('squad return', squads.length);

  await Promise.all(
    squads.map(async (squad) => {
      const squadRes = await axios.post(`${BackendUrl}/squad`, {
        name: squad.squadName,
        logo: squad.img,
        captain: "tobeDeclared",
        viceCaptain: "tobeDeclared"
      });

      const players = await getPlayers(squad.playerLink, squadRes.data.id);
      if (players) {
        await Promise.all(
          players.map(async (player) => {
            await createPlayer(player);
          })
        );
      }
    })
  );
}

getSquadPlayers().catch(console.error);