import { Router } from "express";
import { userMiddleware } from "../../middleware/user";

export const userTeamsRouter = Router();
userTeamsRouter.use(userMiddleware);

