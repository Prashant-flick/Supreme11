import axios, { AxiosInstance } from 'axios';
import { CookieJar } from 'tough-cookie';
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import dotenv from 'dotenv';
import { playerInterface, squadInterface } from "@repo/common/types";
import { Page } from 'puppeteer'

dotenv.config();
puppeteer.use(StealthPlugin());

const cookieJar = new CookieJar();

const axiosInstance: AxiosInstance = axios.create({
  withCredentials: true,
  jar: cookieJar
});

const BackendUrl: string = process.env.BACKEND_URL || "http://localhost:3000/api/v1";
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

  // if (accessToken) {
  //   try {
  //     const accessTokenRes = await axiosInstance.post(`${BackendUrl}/refresh`, {}, {
  //       withCredentials: true
  //     })

  //     accessToken = accessTokenRes.data.accessToken
  //     userId = accessTokenRes.data.userId
  //   } catch (error) {
  //     console.error;
  //   }
  // } else {
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
    console.error
  }
  // }
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
      }, 1000);
    });
  });
}

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

    await page.evaluate(() => {
      window.scrollBy(0, 600);
    })

    const rawSquads = await page.evaluate(() => {
      const squadCards = document.querySelectorAll('.ds-flex.lg\\:ds-flex-row.sm\\:ds-flex-col.lg\\:ds-items-center.lg\\:ds-justify-between.ds-py-2.ds-px-4.ds-flex-wrap.odd\\:ds-bg-fill-content-alternate');

      const squads: any[] = [];
      squadCards.forEach((squad) => {
        try {
          const squadNameElement = squad.querySelector(".ds-text-comfortable-m.ds-text-typo.ds-underline.ds-decoration-ui-stroke.ds-block");
          const squadLinkElement = squad.querySelector(".ds-inline-flex.ds-items-start.ds-leading-none");
          const squadImgElement = squad.querySelector('img');

          const squadName = squadNameElement?.textContent?.trim() || "";
          const link = squadLinkElement?.getAttribute("href") || "";
          const img = squadImgElement?.getAttribute('src') || "";

          squads.push({
            squadName,
            playerLink: link,
            img
          });
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

    await autoScroll(page);

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
          const playerDexture: ("left" | "right" | "tobeDeclared")[] = [];
          playerDextureElem.forEach((dextureElem) => {
            const dexture = (dextureElem.textContent?.trim().split(':')[1] || "").toLowerCase();
            if (dexture.includes('legbreak') || dexture.includes('right')) {
              playerDexture.push('right');
            } else if (dexture.includes('left')) {
              playerDexture.push('left')
            } else {
              playerDexture.push('tobeDeclared');
            }
          })
          const playerImg = PlayerImgElem?.src || "";

          players.push({
            name: playerName,
            age: playerAge,
            battingDexture: playerDexture[0] || "tobeDeclared",
            bowlingDexture: playerDexture[1] || "tobeDeclared",
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

    return players;
  } catch (error) {
    console.error
  } finally {
    await browser.close();
  }
}

async function createPlayer(player: playerInterface) {
  try {
    const playerRes = await axios.post(`${BackendUrl}/player`, player, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
  } catch (error) {
    console.error
  }
}

async function getSquadPlayers() {
  try {
    await getAccessToken();

    if (!accessToken) {
      console.error("access token required for creating squads and backend call");
      return;
    }
    console.log(accessToken);

    const squads = await getSquads();
    console.log(squads);

    for (const squad of squads) {
      const squadRes = await axios.post(`${BackendUrl}/squad`, {
        name: squad.squadName,
        logo: squad.img,
        captain: "tobeDeclared",
        viceCaptain: "tobeDeclared"
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      const players = await getPlayers(squad.playerLink, squadRes.data.squadId);
      if (players) {
        for (const player of players) {
          // await createPlayer(player);
          console.log(player);

        }
      }
    }
  } catch (error) {
    console.error
  }
}

getSquadPlayers();

setInterval(() => {
  getAccessToken();
}, 25 * 60 * 1000);
