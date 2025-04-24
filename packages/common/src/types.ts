export interface matchInterface {
  team1Id?: string,
  team2Id?: string,
  team1Name: string,
  team2Name: string,
  venue: string,
  toss: 'team1' | 'team2' | 'tobeDeclared',
  winner: 'team1' | 'team2' | 'tobeDeclared',
  elected: 'bat' | 'ball' | 'tobeDeclared',
  status: 'upcoming' | 'started' | 'ended',
  link: string,
  date: Date,
  id?: string,
  league: string,
  result: string
}

export interface squadInterface {
  squadName: string,
  playerLink: string,
  img: string,
}

export interface playerInterface {
  name: string,
  age: string,
  battingDexture: "left" | "right" | "tobeDeclared",
  bowlingDexture: "left" | "right" | "tobeDeclared",
  role: "batsman" | "bowler" | "ar" | "wk",
  countryStatus: "foreign" | "indian",
  squadId: string,
  img: string,
}