import { Router } from "express";
import { userTeamsSchema } from "../../types/index";
import { userMiddleware } from "../../middleware/user";

export const userTeamsRouter = Router();
userTeamsRouter.use(userMiddleware);

userTeamRouter.post("/create", async (req: any, res: any) => {
  const parsedData = userTeamsSchema.safeParse(req.body);
  if (!parsedData.success) {
    return res.status(400).json({ message: "data validation failed" });
  }
});
