export interface matchInterface {
  team1Name: string,
  team2Name: string,
  venue: string,
  toss: 'team1' | 'team2' | 'tobeDeclared',
  winner: 'team1' | 'team2' | 'tobeDeclared',
  elected: 'bat' | 'ball' | 'tobeDeclared',
  status: 'upcoming' | 'started' | 'ended',
  link: string,
  date: Date,
  id: string
}

export interface squadInterface {
  squadName: string,
  playerLink: string,
  img: string,
}

export interface playerInterface {
  name: string,
  age: string,
  battingDexture: "left" | "right",
  bowlingDexture: "left" | "right",
  role: "batsman" | "bowler" | "ar" | "wk",
  countryStatus: "foreign" | "indian",
  squadId: string,
  img: string,
}