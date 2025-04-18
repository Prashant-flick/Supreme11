import { Router } from "express";
import client from '@repo/db/client'
import { squadSchema } from "../../types";
import { adminMiddleware } from "../../middleware/admin";

export const squadRouter = Router();
squadRouter.use(adminMiddleware)

squadRouter.get('/:squadName', async (req, res) => {
  const squadName = req.params.squadName;
  if (!squadName) {
    res.status(400)
      .json({
        message: "squadName is required"
      })
    return;
  }

  try {
    const squadRes = await client.squad.findFirst({
      where: {
        name: squadName
      },
      select: {
        id: true,
        name: true,
        logo: true,
        players: true
      }
    })

    res.status(200)
      .json({
        message: "squad fetching success",
        squadRes
      })
  } catch (error) {
    res.status(400)
      .json({
        message: "fetching squad failed"
      })
  }
})

squadRouter.post('/', async (req, res) => {
  const parsedData = squadSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.status(400)
      .json({
        message: "validation failed"
      })
    return
  }

  try {
    const squadRes = await client.squad.create({
      data: {
        name: parsedData.data.name,
        logo: parsedData.data.logo,
        captain: parsedData.data.captain,
        viceCaptain: parsedData.data.viceCaptain,
      }
    })

    res.status(200)
      .json({
        message: "squad creation success",
        squadId: squadRes.id
      })
  } catch (error) {
    res.status(400)
      .json({
        message: "squad creation failed"
      })
  }
})

squadRouter.delete('/:squadId', async (req, res) => {
  const squadId = req.params.squadId;
  if (!squadId) {
    res.status(400)
      .json({
        message: "squadId is required"
      })
    return
  }

  try {
    // Todo delete squad

    res.status(200)
      .json({
        message: "squad deleted successfully"
      })
  } catch (error) {
    res.status(400)
      .json({
        message: "squad deletion failed"
      })
  }
})