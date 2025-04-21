import { Router } from "express";
import { userTeamsSchema } from "../../types/index";
import { userMiddleware } from "../../middleware/user";
import client from '@repo/db/client'

export const userTeamsRouter = Router();
userTeamsRouter.use(userMiddleware);

userTeamsRouter.post("/create", async (req, res) => {
  const parsedData = userTeamsSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.status(400).json({ message: "data validation failed" });
    return;
  }

  try {
    const tournamentRes = await client.tournamentJoinedTeams.findMany({
      where: {
        tournamentId: parsedData.data.tournamentId,
        userId: req.userId!
      }
    })
    await client.$transaction(async (tx) => {
      const teamRes = await tx.userTeams.create({
        data: {
          captain: parsedData.data.captain,
          viceCaptain: parsedData.data.viceCaptain,
          ownerId: req.userId!,
          fantasyPoints: 0,
          name: tournamentRes.length + 1
        }
      })

      await tx.userTeamPlayers.createMany({
        data: parsedData.data.selectedPlayersIds.map((playerId) => ({
          userTeamsId: teamRes.id,
          playersId: playerId
        }))
      })

      await tx.tournamentJoinedTeams.create({
        data: {
          tournamentId: parsedData.data.tournamentId,
          userTeamId: teamRes.id,
          userId: req.userId!
        }
      })
    })

    res.status(200)
      .json({
        message: "userTeams created successfully"
      })
  } catch (error) {
    res.status(400)
      .json({
        message: "userTeam creation failed"
      })
  }
})

userTeamsRouter.get("/:userTeamId", async (req, res) => {
  const userTeamId = req.params.userTeamId;
  if (!userTeamId) {
    res.status(400)
      .json({
        message: "userTeamId is required"
      })
    return;
  }

  try {
    const userTeamRes = await client.userTeams.findFirst({
      where: {
        id: userTeamId
      },
      include: {
        players: {
          select: {
            playersId: true
          }
        }
      }
    })

    res.status(200)
      .json({
        message: "userTeams fetching success",
        userTeamRes
      })
  } catch (error) {
    res.status(400)
      .json({
        message: "fetching userteam failed"
      })
  }
})

userTeamsRouter.get("/tournament/:tournamentId", async (req, res) => {
  const tournamentId = req.params.tournamentId;
  if (!tournamentId) {
    res.status(400)
      .json({
        message: "tournamentId is required"
      })
    return;
  }

  try {
    const tournamentUserTeamsRes = await client.tournamentJoinedTeams.findMany({
      where: {
        tournamentId: tournamentId,
        userId: req.userId!
      },
      select: {
        userTeamId: true
      }
    })

    res.status(200)
      .json({
        message: "tournamet UserTeams fetching success",
        tournamentUserTeamsRes
      })
  } catch (error) {
    res.status(400)
      .json({
        message: "tournament userTeam fetching failed"
      })
  }
})