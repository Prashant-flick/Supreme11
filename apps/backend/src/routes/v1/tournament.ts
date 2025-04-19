import { Router } from "express";
import { tournamentSchema, joinTournamentSchema } from "../../types/index";
import client from "@repo/db/client";
import { userMiddleware } from "../../middleware/user";

export const tournamentRouter = Router();
tournamentRouter.use(userMiddleware);

tournamentRouter.post("/create", async (req: any, res: any) => {
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
        status: "upcoming",
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

tournamentRouter.patch("/join", async (req: any, res: any) => {
  const parsedData = joinTournamentSchema.safeParse(req.body);
  if (!parsedData.success) {
    return res.status(400).json({
      message: "error parsing the data",
    });
  }

  const { teamId, tournamentId } = parsedData.data;
  try {
    const tournamentDetails = await client.tournament.findUnique({
      where: {
        id: tournamentId,
      },
    });
    if (!tournamentDetails) {
      return res.status(404).json({ message: "tournament not found" });
    }
    if (tournamentDetails.teamsJoined >= tournamentDetails.maxLimit) {
      return res.status(409).json({ messaga: "Tournament full" });
    }
    const joinedTournamentResponse = await client.$transaction([
      client.tournamentJoinedTeams.create({
        data: {
          tournamentId: tournamentId,
          userTeamId: teamId,
        },
      }),

      client.tournament.update({
        where: {
          id: tournamentId,
        },
        data: {
          teamsJoined: {
            increment: 1,
          },
        },
      }),
    ]);

    return res.status(200).json({
      joinedTournamentResponse,
      message: "joined tournament successfully",
    });
  } catch (err) {
    return res.status(400).json({ message: "error joining tournament", err });
  }
});

//Light Text | Mist White | #FAF5F4 |
// //Purpose | Color Name | Hex Code | Preview
// Primary | Crimson Red | #E63946 |
// Secondary | Coral Red | #FF6B6B |
// Accent | Scarlet Punch | #FF3F3F |
// Background | Soft Blush Pink | #FFF1F1 |
// Dark Text | Charcoal Gray | #2B2B2B |
// Light Text | Snow White | #FFFFFF |
