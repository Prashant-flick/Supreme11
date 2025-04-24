import client from '@repo/db/client'
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const backendUrl = process.env.BACKEND_URL;
const email = process.env.EMAIL;
const password = process.env.PASSWORD;
let accessToken = "";

async function getAccessToken() {
  const tokenRes = await axios.post(`${backendUrl}/signin`, {
    email,
    password
  })

  accessToken = tokenRes.data.accessToken
}

function nameMatches(shortName: string, fullName: string): boolean {
  if (fullName.toLowerCase().includes(shortName.toLowerCase())) return true;
  if (!shortName) return false;

  let [shortFirstInitial, ...shortLastParts] = shortName.split(' ');
  shortFirstInitial = shortFirstInitial.toLowerCase();
  const shortLast = shortLastParts.join(' ').toLowerCase();

  let [fullFirst, ...fullLastParts] = fullName.split(' ');
  fullFirst = fullFirst.toLowerCase();
  const fullLast = fullLastParts.join(' ').toLowerCase();

  console.log(shortFirstInitial, fullFirst, shortLast, fullLast);
  if (!shortLast) {
    return (fullLast.includes(shortFirstInitial) || fullFirst.includes(shortFirstInitial))
  }

  return (
    fullFirst[0].toLowerCase() === shortFirstInitial[0].toLowerCase() &&
    fullLast.includes(shortLast)
  );
}

async function findPlayerIdWithName(name: string, squadId: string) {
  const allPlayers = await client.players.findMany({
    where: {
      squadId
    }
  });

  // console.log(allPlayers);


  const playerRes = allPlayers.find(player => nameMatches(name, player.name));
  console.log(playerRes);
}

// findPlayerIdWithName('de kock', 'cm9rqntuf00bsl7iogjv0rfb5');

async function test() {
  await getAccessToken();
  if (!accessToken) {
    console.error('access Token Required');
    return;
  }

  const res = await axios.get(`${backendUrl}/matches/league/IPL`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })

  console.log(res.data);
}

test();
