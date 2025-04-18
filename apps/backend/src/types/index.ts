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