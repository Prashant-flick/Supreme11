import { Router } from "express";
import { tournamentSchema, joinTournamentSchema } from "../../types/index";
import client from "@repo/db/client";
import { userMiddleware } from "../../middleware/user";

export const tournamentRouter = Router();
tournamentRouter.use(userMiddleware);

tournamentRouter.post("/create", async (req, res) => {
  const parsedData = tournamentSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.status(400).json({ message: "validation failed" });
    return;
  }

  const { maxLimit, entryFee, matchId } = parsedData.data;
  try {
    const tournamentResponse = await client.tournament.create({
      data: {
        maxLimit,
        entryFee,
        ownerId: req.userId!,
        teamsJoined: 1,
        status: "upcoming",
        winner: "tobeDeclared",
        matchId
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

tournamentRouter.patch("/join", async (req, res) => {
  const parsedData = joinTournamentSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.status(400).json({
      message: "error parsing the data",
    });
    return;
  }

  const { teamId, tournamentId } = parsedData.data;
  try {
    const tournamentDetails = await client.tournament.findUnique({
      where: {
        id: tournamentId,
      },
    });

    if (tournamentDetails && tournamentDetails.teamsJoined >= tournamentDetails.maxLimit) {
      res.status(409).json({ messaga: "Tournament full" });
      return
    }
    const joinedTournamentResponse = await client.$transaction([
      client.tournamentJoinedTeams.create({
        data: {
          tournamentId: tournamentId,
          userTeamId: teamId,
          userId: req.userId!
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

    res.status(200).json({
      joinedTournamentResponse,
      message: "joined tournament successfully",
    });
  } catch (err) {
    res.status(400).json({ message: "error joining tournament", err });
  }
});

tournamentRouter.get("/myTournament", async (req, res) => {
  try {
    const tournamentRes = await client.tournament.findMany({
      where: {
        ownerId: req.userId
      }
    })

    res.status(200)
      .json({
        message: "myTournament Fetching success",
        tournamentRes
      })
  } catch (error) {
    res.status(400)
      .json({
        message: "myTournament fetching failed"
      })
  }
})

tournamentRouter.get("/matchTournament/:matchId", async (req, res) => {
  const matchId = req.params.matchId;
  if (!matchId) {
    res.status(400)
      .json({
        message: "matchId is required"
      })
    return;
  }

  try {
    const matchTournamentRes = await client.tournament.findMany({
      where: {
        matchId
      }
    })

    res.status(200)
      .json({
        message: "matchTournament fetching success",
        matchTournamentRes
      })
  } catch (error) {
    res.status(400)
      .json({
        message: "matches tournament fetching failed"
      })
  }
})
