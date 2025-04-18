import { Router } from "express";
import { inningUpdateSchema } from "../../types";
import client from '@repo/db/client'

export const inningRouter = Router();

inningRouter.patch('/', async (req, res) => {
  const parsedData = inningUpdateSchema.safeParse(req.body)
  if (!parsedData.success) {
    res.status(400)
      .json({
        message: "validation failed"
      })
    return
  }

  try {
    await client.inning.update({
      where: {
        matchId_whichInning: {
          matchId: parsedData.data.matchId,
          whichInning: parsedData.data.WhichInning
        }
      },
      data: {
        score: parsedData.data.score,
        wickets: parsedData.data.wickets,
        batsman1: parsedData.data.bastman1,
        batsman2: parsedData.data.batsman2,
        bowler: parsedData.data.bowler,
        extras: parsedData.data.extras
      }
    })

    res.status(200)
      .json({
        message: "inning updation success"
      })
  } catch (error) {
    res.status(400)
      .json({
        message: "inning updation failed"
      })
  }
})