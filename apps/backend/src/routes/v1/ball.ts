import { Router } from "express";
import client from '@repo/db/client';
import { ballSchema } from "../../types";
import { adminMiddleware } from "../../middleware/admin";

export const ballRouter = Router();
ballRouter.use(adminMiddleware)

ballRouter.post('/', async (req, res) => {
  const parsedData = ballSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.status(400)
      .json({
        message: "validation failed"
      })
    return
  }

  try {
    const ballRes = await client.balls.create({
      data: {
        inningId: parsedData.data.inningId,
        runout: parsedData.data.runout,
        bowler: parsedData.data.bowler,
        batsman: parsedData.data.batsman,
        ballNo: parsedData.data.ballNo,
        catch: parsedData.data.catch,
        whatHappend: parsedData.data.WhatHappend
      }
    })

    res.status(200)
      .json({
        message: "ball creation success",
        ballRes
      })
  } catch (error) {
    res.status(400)
      .json({
        message: "ball creation failed"
      })
  }
})