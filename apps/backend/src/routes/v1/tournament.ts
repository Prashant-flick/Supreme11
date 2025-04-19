import { Router } from "express";
import { tournamentSchema } from "../../types/index";
import client from "@repo/db/client";
import { userMiddleware } from "../../middleware/user";

export const tournamentRouter = Router();
tournamentRouter.use(userMiddleware);

tournamentRouter.get("/create", async (req: any, res: any) => {
  const parsedData = tournamentSchema.safeParse(req.body);
  if (!parsedData.success) {
    return res.status(400).json({ message: "validation failed" });
  }

  const { maxLimit, entryFee } = parsedData.data;
  try {
    const tournamentResponse = await client.tournament.create({
      data: {
        maxLimit,
        entryFee,
        ownerId: req.userId!,
        teamsJoined: 1,
        status: "notStarted",
      },
    });
    res.status(200).json({
      tournamentResponse,
      message: "tournament created successfully",
    });
  } catch (err) {
    res.status(400).json({ message: "error creating tournament", err: err });
  }
});
