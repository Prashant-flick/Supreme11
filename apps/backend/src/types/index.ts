import z from "zod";

<<<<<<< HEAD
export type expiresInType = `${number}${'M' | 'Y' | 'D'}`;
=======
export type expiresInType = `${number}${"M" | "Y" | "D"}`;
>>>>>>> ddf9311f28e98659bd37cf2db8a0e551f6ee67fd

export const signupSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z.string().min(8),
  role: z.enum(["user", "admin"]),
<<<<<<< HEAD
})
=======
});
>>>>>>> ddf9311f28e98659bd37cf2db8a0e551f6ee67fd

export const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
<<<<<<< HEAD
})

export const publicKeySchema = z.object({
  publicKey: z.string()
=======
});

export const publicKeySchema = z.object({

    publicKey: z.string()
>>>>>>> ddf9311f28e98659bd37cf2db8a0e551f6ee67fd
})

export const squadSchema = z.object({
  name: z.string(),
  logo: z.string(),
  captain: z.string(),
  viceCaptain: z.string(),

})

<<<<<<< HEAD
export const playerSchema = z.object({
  name: z.string(),
  role: z.enum(["batsman", "bowler", "wk", "ar"]),
  dexture: z.enum(["right", "left"]),
  playingStatus: z.enum(["playing", "notPlaying", "substitute"]),
  squadId: z.string(),
  countryStatus: z.enum(["indian", "foreign"])
})

export const playerUpdateSchema = z.object({
  playingStatus: z.enum(["playing", "notPlaying", "substitute"]),
  playerId: z.string(),
})
=======
const playerSchema = z.object({
    name: z.string(),
    role: z.enum(["batsman", "bowler", "wk", "ar"]),
    dexture: z.enum(["right", "left"]),
    playingStatus: z.enum(["playing", "notPlaying", "substitute"]),
    squadId: z.string(),
    countryStatus: z.enum(["indian", "foreign"])
})

>>>>>>> ddf9311f28e98659bd37cf2db8a0e551f6ee67fd
