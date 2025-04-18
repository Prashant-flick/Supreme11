import { Router } from "express";
import client from '@repo/db/client'
import { playerScoreUpdateSchema } from "../../types";
import { adminMiddleware } from "../../middleware/admin";

export const playerScoreRouter = Router();
playerScoreRouter.use(adminMiddleware)

playerScoreRouter.get('/:playerScoreId', async (req, res) => {
  const playerScoreId = req.params.playerScoreId;
  if (!playerScoreId) {
    res.status(400)
      .json({
        message: "id is required"
      })
    return
  }

  try {
    const playerScoreRes = await client.playerScore.findFirst({
      where: {
        id: playerScoreId
      }
    })

    res.status(200)
      .json({
        message: "player fetching success",
        playerScoreRes
      })
  } catch (error) {
    res.status(400)
      .json({
        message: "player fetching failed"
      })
  }
})

playerScoreRouter.put('/', async (req, res) => {
  const parsedData = playerScoreUpdateSchema.safeParse(req.body)
  if (!parsedData.success) {
    res.status(400)
      .json({
        message: "validation failed"
      })
    return
  }

  try {
    const playerScoreRes = await client.playerScore.update({
      where: {
        playerId_matchId: {
          playerId: parsedData.data.playerId,
          matchId: parsedData.data.matchId
        }
      },
      data: {
        fantasyPoints: parsedData.data.fantasyPoints,
        run: parsedData.data.run,
        dotBall: parsedData.data.dotBall,
        fours: parsedData.data.fours,
        sixes: parsedData.data.sixes,
        others: parsedData.data.others,
        ballsBowled: parsedData.data.ballsBowled,
        wickets: parsedData.data.wickets,
        runout: parsedData.data.runout,
        runsConceded: parsedData.data.runConceded,
        catches: parsedData.data.catches,
        playingStatus: parsedData.data.playingStatus
      }
    })

    res.status(200)
      .json({
        message: "playerScore updation success"
      })
  } catch (error) {
    res.status(400)
      .json({
        message: "playerScore updation failed"
      })
  }
})

playerScoreRouter.get('/matchPlayers', async (req, res) => {
  const matchId = req.query.matchId as string;
  if (!matchId) {
    res.status(400)
      .json({
        message: "matchId is required"
      })
    return
  }

  try {
    const playersScoreRes = await client.matches.findFirst({
      where: {
        id: matchId
      },
      include: {
        playerScore: true
      }
    })

    res.status(200)
      .json({
        message: "fetching matches players success",
        playersScoreRes
      })
  } catch (error) {
    res.status(400)
      .json({
        message: "fetching matches players failed"
      })
  }
})