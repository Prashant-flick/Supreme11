import { Router } from "express";
import client from '@repo/db/client'
import { playerSchema, playerUpdateSchema } from "../../types";

export const playerRouter = Router();

playerRouter.get('/:playerId', async (req, res) => {
  const playerId = req.params.playerId;
  if (!playerId) {
    res.status(400)
      .json({
        message: "playedId is required"
      })
    return;
  }

  try {
    const playerRes = await client.players.findFirst({
      where: {
        id: playerId
      }
    })

    res.status(200)
      .json({
        message: "player fetching success",
        playerRes
      })
  } catch (error) {
    res.status(400)
      .json({
        message: "fetching player failed"
      })
  }
})

playerRouter.get('/squadPlayers', async (req, res) => {
  const squadId = (req.query.squadId) as string
  if (!squadId) {
    res.status(400)
      .json({
        message: "squadId is required"
      })
    return
  }

  try {
    const playersRes = await client.players.findMany({
      where: {
        squadId
      }
    })

    res.status(200)
      .json({
        message: "fetching squad players success",
        playersRes
      })
  } catch (error) {
    res.status(400)
      .json({
        message: "fetching squad players failed"
      })
  }
})

playerRouter.post('/', async (req, res) => {
  const parsedData = playerSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.status(400)
      .json({
        message: "validation failed",
      })
    return
  }

  try {
    const playerRes = await client.players.create({
      data: {
        name: parsedData.data?.name,
        dexture: parsedData.data?.dexture,
        squadId: parsedData.data?.squadId,
        playingStatus: parsedData.data.playingStatus,
        countryStatus: parsedData.data.countryStatus,
        role: parsedData.data.role
      }
    })

    res.status(200)
      .json({
        message: "player creation success",
        playerId: playerRes.id
      })
  } catch (error) {
    res.status(400)
      .json({
        message: "player creation failed"
      })
  }
})

playerRouter.delete('/:playerId', async (req, res) => {
  const playerId = req.params.playerId;
  if (!playerId) {
    res.status(400)
      .json({
        message: "playerId is required"
      })
    return
  }

  try {
    // Todo delete palyer

    res.status(200)
      .json({
        message: "player deletion success"
      })
  } catch (error) {
    res.status(400)
      .json({
        message: "player deletion failed"
      })
  }
})

playerRouter.patch('/update', async (req, res) => {
  const parsedData = playerUpdateSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.status(400)
      .json({
        message: "all feilds are required"
      })
    return
  }

  try {
    const playerRes = await client.players.update({
      where: {
        id: parsedData.data.playerId
      },
      data: {
        playingStatus: parsedData.data.playingStatus
      }
    })

    res.status(200)
      .json({
        message: "palyer updation success"
      })
  } catch (error) {
    res.status(400)
      .json({
        message: "player updation failed",
      })
  }
})