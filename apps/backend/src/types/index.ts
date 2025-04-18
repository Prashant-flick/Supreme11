import z from 'zod';

export type expiresInType = `${number}${'M'|'Y'|'D'}`;

export const signupSchema = z.object({
    email: z.string().email(),
    name: z.string(),
    password: z.string().min(8),
    role: z.enum(["user", "admin"]),
})

export const signinSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})

export const publicKeySchema = z.object({
    publicKey: z.string()
})

export const squadSchema = z.object({
    name: z.string(),
    logo: z.string(),
    captain: z.string(),
    viceCaptain: z.string(),

})

const playerSchema = z.object({
    name: z.string(),
    role: z.enum(["batsman", "bowler", "wk", "ar"]),
    dexture: z.enum(["right", "left"]),
    playingStatus: z.enum(["playing", "notPlaying", "substitute"]),
    squadId: z.string(),
    countryStatus: z.enum(["indian", "foreign"])
})