import { Router } from "express";
import { userMiddleware } from "../../middleware/user";

export const userRouter = Router();
userRouter.use(userMiddleware)

userRouter.get("/metadata", async(req,res) => {
    const userId = req.query.userId
    if (!userId) {
        res.status(400)
        .json({
            message: "userId is required"
        })
        return;
    }

    try {
        
    } catch (error) {
        res.status(400)
        .json({
            message: "user "
        })
    }
})