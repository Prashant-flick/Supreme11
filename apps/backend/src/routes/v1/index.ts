import { Router } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import bcrypt from "bcryptjs";
import client from "@repo/db/client";
import { expiresInType, signinSchema, signupSchema } from "../../types";
import { userRouter } from "./user";
import { tournamentRouter } from "./tournament";
import { squadRouter } from "./squad";
import { playerRouter } from "./player";
import { inningRouter } from "./inning";
import { ballRouter } from "./ball";
import { matchesRouter } from "./matches";
import { playerScoreRouter } from "./playerScore";
import { userTeamsRouter } from "./userTeams";

export const router = Router();

router.post("/refresh", async (req, res) => {
  const refreshToken = req.cookies?.refreshToken;

  if (!refreshToken) {
    res.status(401).json({
      message: "refresh Token Expired",
    });
    return;
  }

  interface DecodedUser extends JwtPayload {
    userId: string;
    role: "admin" | "user";
  }

  try {
    const decoded = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET || "HELLO",
    ) as DecodedUser;
    const accessToken = generateAccessToken({
      id: decoded.userId,
      role: decoded.role,
    });
    res.status(200).json({ accessToken, userId: decoded.userId });
  } catch (err) {
    res.status(403).json({
      message: "jwt verification failed",
    });
  }
});

router.post("/signup", async (req, res) => {
  const parsedData = signupSchema.safeParse(req.body);

  if (!parsedData.success) {
    res.status(400).json({ message: "Validation failed" })
    return
  }

  try {
    const checkemailAndUsername = await client.user.findFirst({
      where: {
        email: parsedData.data.email
      }
    })

    if (checkemailAndUsername) {
      res.status(403).json({
        message: "user already exists"
      })
      return
    }

    const hashedPassword = bcrypt.hashSync(parsedData.data.password, parseInt(process.env.BCRYPT_SECRET || "HEHE"));

    const user = await client.user.create({
      data: {
        email: parsedData.data.email,
        name: parsedData.data.name,
        password: hashedPassword,
        role: parsedData.data.role,
      }
    })

    res.status(200).json({
      userId: user.id
    })
  } catch (error) {
    res.status(404).json({ message: "axios error" });
  }
})

router.post("/signin", async (req, res) => {
  const parsedData = signinSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.status(403).json({ message: "Validation failed" })
    return
  }

  try {
    const user = await client.user.findUnique({
      where: {
        email: parsedData.data.email
      }
    })

    if (!user) {
      res.status(403).json({ message: "user Doesn't exist" });
      return
    }

    const verifyPassword = bcrypt.compareSync(parsedData.data.password, user.password)

    if (!verifyPassword) {
      res.status(403).json({ message: "Invalid Password" });
      return
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
    });

    res.status(200).json({
      accessToken,
      userId: user.id
    })
  } catch (error) {
    res.status(400).json({
      message: "signin error"
    })
  }
})

router.post("/signout", async (req, res) => {
  res.clearCookie("refreshToken", {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });

  res.status(200).json({
    message: "signout succeeded",
  });
});

const generateAccessToken = (user: { id: string; role: "admin" | "user" }) => {
  const token = jwt.sign(
    {
      userId: user.id,
      role: user.role,
    },
    process.env.ACCESS_TOKEN_SECRET || "HELLO",
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY as expiresInType,
    },
  );
  return token;
};

const generateRefreshToken = (user: { id: string; role: "admin" | "user" }) => {
  const token = jwt.sign(
    {
      userId: user.id,
      role: user.role,
    },
    process.env.REFRESH_TOKEN_SECRET || "HELLO",
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY as expiresInType,
    },
  );
  return token;
};

router.use("/user", userRouter);
router.use("/tournament", tournamentRouter);
router.use("/squad", squadRouter);
router.use("/player", playerRouter);
router.use("/inning", inningRouter);
router.use("/ball", ballRouter);
router.use("/matches", matchesRouter);
router.use("/playerScore", playerScoreRouter);
router.use("/userTeam", userTeamsRouter);
