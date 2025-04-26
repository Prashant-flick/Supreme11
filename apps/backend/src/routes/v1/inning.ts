import { Router } from "express";
import { inningUpdateSchema } from "../../types";
import client from '@repo/db/client'
import { adminMiddleware } from "../../middleware/admin";
import { userMiddleware } from "../../middleware/user";

export const inningRouter = Router();

inningRouter.patch('/', adminMiddleware, async (req, res) => {
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

inningRouter.get('/:inningId', userMiddleware, async (req, res) => {
  const inningId = req.params.inningId;
  if (!inningId) {
    res.status(400)
      .json({
        message: "inningId is required"
      })
    return;
  }

  try {
    const inningRes = await client.inning.findFirst({
      where: {
        id: inningId
      }
    })

    res.status(200)
      .json({
        message: "fetching inning success",
        inningRes
      })
  } catch (error) {
    res.status(400)
      .json({
        message: "fetching inning failed"
      })
  }
})