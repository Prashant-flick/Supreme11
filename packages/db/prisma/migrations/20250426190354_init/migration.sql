-- CreateEnum
CREATE TYPE "WhichInning" AS ENUM ('first', 'second');

-- CreateEnum
CREATE TYPE "TournamentStatus" AS ENUM ('upcoming', 'started', 'ended');

-- CreateEnum
CREATE TYPE "MatchTossElection" AS ENUM ('ball', 'bat', 'tobeDeclared');

-- CreateEnum
CREATE TYPE "MatchesWinner" AS ENUM ('team1', 'team2', 'tobeDeclared');

-- CreateEnum
CREATE TYPE "PlayerRole" AS ENUM ('batsman', 'bowler', 'wk', 'ar');

-- CreateEnum
CREATE TYPE "PlayerDexture" AS ENUM ('right', 'left', 'tobeDeclared');

-- CreateEnum
CREATE TYPE "PlayerPlayingStatus" AS ENUM ('playing', 'substitute', 'notPlaying');

-- CreateEnum
CREATE TYPE "PlayerCountryStatus" AS ENUM ('indian', 'foreign');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('user', 'admin');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "publicKey" TEXT,
    "role" "UserRole" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserTeams" (
    "id" TEXT NOT NULL,
    "name" INTEGER NOT NULL,
    "fantasyPoints" INTEGER NOT NULL,
    "captain" TEXT NOT NULL,
    "viceCaptain" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "disabled" BOOLEAN,

    CONSTRAINT "UserTeams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserTeamPlayers" (
    "id" TEXT NOT NULL,
    "userTeamsId" TEXT NOT NULL,
    "playersId" TEXT NOT NULL,

    CONSTRAINT "UserTeamPlayers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Squad" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "captain" TEXT NOT NULL,
    "viceCaptain" TEXT NOT NULL,

    CONSTRAINT "Squad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Players" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "PlayerRole" NOT NULL,
    "battingDexture" "PlayerDexture" NOT NULL,
    "bowlingDexture" "PlayerDexture" NOT NULL,
    "countryStatus" "PlayerCountryStatus" NOT NULL,
    "squadId" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "img" TEXT NOT NULL,

    CONSTRAINT "Players_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerScore" (
    "id" TEXT NOT NULL,
    "playingStatus" "PlayerPlayingStatus" NOT NULL,
    "fantasyPoints" INTEGER NOT NULL,
    "run" INTEGER NOT NULL,
    "sixes" INTEGER NOT NULL,
    "fours" INTEGER NOT NULL,
    "others" INTEGER NOT NULL,
    "runsConceded" INTEGER NOT NULL,
    "wickets" INTEGER NOT NULL,
    "ballsBowled" INTEGER NOT NULL,
    "catches" INTEGER NOT NULL,
    "runout" INTEGER NOT NULL,
    "dotBall" INTEGER NOT NULL,
    "playerId" TEXT NOT NULL,
    "matchId" TEXT NOT NULL,

    CONSTRAINT "PlayerScore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Matches" (
    "id" TEXT NOT NULL,
    "league" TEXT NOT NULL,
    "team1Id" TEXT NOT NULL,
    "team2Id" TEXT NOT NULL,
    "venue" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "winner" "MatchesWinner" NOT NULL,
    "toss" "MatchesWinner" NOT NULL,
    "elected" "MatchTossElection" NOT NULL,
    "status" "TournamentStatus" NOT NULL,
    "result" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Matches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inning" (
    "id" TEXT NOT NULL,
    "whichInning" "WhichInning" NOT NULL,
    "over" TEXT,
    "teamName" TEXT,
    "score" INTEGER NOT NULL,
    "wickets" INTEGER NOT NULL,
    "extras" INTEGER NOT NULL,
    "batsman1" TEXT,
    "batsman2" TEXT,
    "bowler" TEXT,
    "matchId" TEXT NOT NULL,

    CONSTRAINT "Inning_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Balls" (
    "id" TEXT NOT NULL,
    "overNo" INTEGER NOT NULL,
    "whatHappendtext" TEXT NOT NULL,
    "whatHappendWicketText" TEXT,
    "overBallNo" INTEGER NOT NULL,
    "bowler" TEXT NOT NULL,
    "batsman" TEXT NOT NULL,
    "catch" TEXT,
    "runout" TEXT,
    "stump" TEXT,
    "lbw" BOOLEAN NOT NULL,
    "run" TEXT NOT NULL,
    "inningId" TEXT NOT NULL,

    CONSTRAINT "Balls_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tournament" (
    "id" TEXT NOT NULL,
    "maxLimit" INTEGER NOT NULL,
    "entryFee" INTEGER NOT NULL,
    "prizePool" INTEGER,
    "winner" TEXT NOT NULL,
    "matchId" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "teamsJoined" INTEGER NOT NULL,
    "status" "TournamentStatus" NOT NULL,

    CONSTRAINT "Tournament_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TournamentJoinedTeams" (
    "id" TEXT NOT NULL,
    "tournamentId" TEXT NOT NULL,
    "userTeamId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "TournamentJoinedTeams_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserTeams_id_key" ON "UserTeams"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserTeamPlayers_id_key" ON "UserTeamPlayers"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Squad_id_key" ON "Squad"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Squad_name_key" ON "Squad"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Players_id_key" ON "Players"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PlayerScore_id_key" ON "PlayerScore"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PlayerScore_playerId_matchId_key" ON "PlayerScore"("playerId", "matchId");

-- CreateIndex
CREATE UNIQUE INDEX "Matches_id_key" ON "Matches"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Inning_id_key" ON "Inning"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Inning_matchId_whichInning_key" ON "Inning"("matchId", "whichInning");

-- CreateIndex
CREATE UNIQUE INDEX "Balls_id_key" ON "Balls"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Tournament_id_key" ON "Tournament"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TournamentJoinedTeams_id_key" ON "TournamentJoinedTeams"("id");

-- AddForeignKey
ALTER TABLE "UserTeams" ADD CONSTRAINT "UserTeams_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTeamPlayers" ADD CONSTRAINT "UserTeamPlayers_userTeamsId_fkey" FOREIGN KEY ("userTeamsId") REFERENCES "UserTeams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTeamPlayers" ADD CONSTRAINT "UserTeamPlayers_playersId_fkey" FOREIGN KEY ("playersId") REFERENCES "Players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Players" ADD CONSTRAINT "Players_squadId_fkey" FOREIGN KEY ("squadId") REFERENCES "Squad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerScore" ADD CONSTRAINT "PlayerScore_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerScore" ADD CONSTRAINT "PlayerScore_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Matches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inning" ADD CONSTRAINT "Inning_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Matches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Balls" ADD CONSTRAINT "Balls_inningId_fkey" FOREIGN KEY ("inningId") REFERENCES "Inning"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tournament" ADD CONSTRAINT "Tournament_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tournament" ADD CONSTRAINT "Tournament_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Matches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TournamentJoinedTeams" ADD CONSTRAINT "TournamentJoinedTeams_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TournamentJoinedTeams" ADD CONSTRAINT "TournamentJoinedTeams_userTeamId_fkey" FOREIGN KEY ("userTeamId") REFERENCES "UserTeams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
