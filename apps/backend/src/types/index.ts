import z from "zod";
import { WhatHappend } from "../../../../packages/db/src/generated/prisma";

export type expiresInType = `${number}${"M" | "Y" | "D"}`;

export const signupSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z.string().min(8),
  role: z.enum(["user", "admin"]),
});

export const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const publicKeySchema = z.object({
  publicKey: z.string(),
});

export const squadSchema = z.object({
  name: z.string(),
  logo: z.string(),
  captain: z.string(),
  viceCaptain: z.string(),
});

export const playerSchema = z.object({
  name: z.string(),
  role: z.enum(["batsman", "bowler", "wk", "ar"]),
  dexture: z.enum(["right", "left"]),
  squadId: z.string(),
  countryStatus: z.enum(["indian", "foreign"]),
});

export const playerUpdateSchema = z.object({
  playingStatus: z.enum(["playing", "notPlaying", "substitute"]),
  playerId: z.string(),
});

export const playerScoreUpdateSchema = z.object({
  playingStatus: z.enum(["playing", "notPlaying", "substitute"]),
  fantasyPoints: z.number(),
  run: z.number(),
  sixes: z.number(),
  fours: z.number(),
  others: z.number(),
  runConceded: z.number(),
  wickets: z.number(),
  ballsBowled: z.number(),
  catches: z.number(),
  runout: z.number(),
  dotBall: z.number(),
  matchId: z.string(),
  playerId: z.string(),
});

export const matchesSchema = z.object({
  team1Id: z.string(),
  team2Id: z.string(),
  venue: z.string(),
  date: z.date(),
  winner: z.enum(["team1", "team2", "tobeDeclared"]),
  toss: z.enum(["team1", "team2", "tobeDeclared"]),
  elected: z.enum(["bat", "ball", "tobeDeclared"]),
  status: z.enum(["upcoming", "started", "ended"]),
});

export const inningUpdateSchema = z.object({
  WhichInning: z.enum(["first", "second"]),
  score: z.number(),
  wickets: z.number(),
  extras: z.number(),
  bastman1: z.string(),
  batsman2: z.string(),
  bowler: z.string(),
  matchId: z.string(),
});

export const ballSchema = z.object({
  ballNo: z.number(),
  WhatHappend: z.enum([
    "wd",
    "six",
    "four",
    "dot",
    "runout",
    "catch",
    "bowled",
    "lbw",
    "nb",
    "fh",
    "zero",
    "one",
    "two",
    "three",
  ]),
  bowler: z.string(),
  batsman: z.string(),
  runout: z.string().optional(),
  catch: z.string().optional(),
  inningId: z.string(),
});

export const tournamentSchema = z.object({
  maxLimit: z.number(),
  entryFee: z.number(),
});
export const joinTournamentSchema = z.object({
  teamId: z.string(),
  tournamentId: z.string(),
});

