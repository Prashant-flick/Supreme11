import { Router } from "express";
import { userMiddleware } from "../../middleware/user";
import client from '@repo/db/client'
import { publicKeySchema } from "../../types";

export const userRouter = Router();
userRouter.use(userMiddleware)

userRouter.get("/:userId", async (req, res) => {
    const userId = req.query.userId as string
    if (!userId) {
        res.status(400)
            .json({
                message: "userId is required"
            })
        return;
    }

    try {
        const userRes = await client.user.findFirst({
            where: {
                id: userId
            },
            select: {
                id: true,
                name: true
            }
        })

        res.status(400)
            .json({
                message: "user fetching successful",
                userRes
            })
    } catch (error) {
        res.status(400)
            .json({
                message: "fetching user failed"
            })
    }
})

userRouter.get("/metadata/bulk", async (req, res) => {
    const userIdRes = (req.query.ids) as string;
    const userIds: string[] = userIdRes.substring(1, userIdRes.length - 1).split(",");
    if (!userIds || !userIds.length) {
        res.status(400)
            .json({
                message: "userId is required"
            })
        return;
    }

    try {
        const userRes = await client.user.findMany({
            where: {
                id: {
                    in: userIds
                }
            },
            select: {
                id: true,
                name: true
            }
        })

        res.status(400)
            .json({
                message: "users fetching successful",
                userRes
            })
    } catch (error) {
        res.status(400)
            .json({
                message: "fetching user failed"
            })
    }
})

userRouter.post("/publicKey", async (req, res) => {
    const parsedData = publicKeySchema.safeParse(req.body);
    if (!parsedData.success) {
        res.status(400)
            .json({
                message: "validation failed"
            })
        return;
    }

    try {
        await client.user.update({
            where: {
                id: req.userId
            },
            data: {
                publicKey: parsedData.data.publicKey
            }
        })
        res.status(200)
            .json({
                message: "publickey updation success"
            })
    } catch (error) {
        res.status(400)
            .json({
                message: "publicKey updation failed"
            })
    }
})

userRouter.delete("/:userId", async (req, res) => {
    const userId = req.params.userId;
    if (!userId) {
        res.status(400)
            .json({
                message: "userId is required"
            })
        return;
    }

    try {
        // Todo - delete user

        res.status(200)
            .json({
                message: "user deletion success"
            })
    } catch (error) {
        res.status(400)
            .json({
                message: "user deletion failed"
            })
    }
})