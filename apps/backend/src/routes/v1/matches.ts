import { Router } from "express";
import { matchesSchema } from "../../types";
import client from "@repo/db/client"
import type { Prisma } from "../../../../../packages/db/src/generated/prisma";
import { adminMiddleware } from "../../middleware/admin";

export const matchesRouter = Router();
matchesRouter.use(adminMiddleware)

matchesRouter.post('/', async (req, res) => {
  const parsedData = matchesSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.status(400)
      .json({
        message: "validation failed"
      })
    return
  }

  try {
    const matchRes = await client.$transaction(async (tx) => {
      const match = await tx.matches.create({
        data: {
          team1Id: parsedData.data.team1Id,
          team2Id: parsedData.data.team2Id,
          venue: parsedData.data.venue,
          date: parsedData.data.date,
          winner: parsedData.data.winner,
          toss: parsedData.data.toss,
          elected: parsedData.data.elected,
          status: parsedData.data.status
        }
      });

      await createInning("first", match.id, tx);
      await createInning("second", match.id, tx);
      await createMatchPlayer(parsedData.data.team1Id, match.id, tx);
      await createMatchPlayer(parsedData.data.team2Id, match.id, tx);

      return match;
    });

    res.status(200)
      .json({
        message: "match creation success"
      })
  } catch (error) {
    res.status(400)
      .json({
        message: "match creation failed"
      })
  }
})

const createInning = async (whichInning: "first" | "second", matchId: string, tx: Prisma.TransactionClient) => {
  await tx.inning.create({
    data: {
      whichInning,
      score: 0,
      wickets: 0,
      extras: 0,
      matchId
    }
  });
}

const createMatchPlayer = async (squadId: string, matchId: string, tx: Prisma.TransactionClient) => {
  const PlayersRes = await tx.players.findMany({
    where: {
      squadId: squadId
    }
  })
  await Promise.all(
    PlayersRes.map(async (player) => {
      await tx.playerScore.create({
        data: {
          fantasyPoints: 0,
          run: 0,
          dotBall: 0,
          fours: 0,
          sixes: 0,
          others: 0,
          ballsBowled: 0,
          wickets: 0,
          runout: 0,
          runsConceded: 0,
          playerId: player.id,
          matchId,
          catches: 0,
          playingStatus: "notPlaying"
        }
      })
    })
  )
}