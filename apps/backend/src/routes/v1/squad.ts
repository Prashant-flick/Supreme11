import { Router } from "express";
import client from '@repo/db/client'
import { squadSchema } from "../../types";

export const squadRouter = Router();

squadRouter.get('/:squadName', async(req, res) => {
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

squadRouter.post('/', async(req,res) => {
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