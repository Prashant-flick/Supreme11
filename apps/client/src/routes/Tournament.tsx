import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Trophy, Users, X, ArrowUp, ArrowDown, Minus } from "lucide-react";
import { useAuth } from "@/context/UseAuth";
import { useNavigate } from "react-router-dom";

const Link = ({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

const Image = ({
  src,
  width,
  height,
  alt,
  className,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  className: string;
}) => {
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
      style={{ maxWidth: "100%", height: "auto" }}
    />
  );
};

export default function TournamentPage() {
  const [activeTab, setActiveTab] = useState("standings");
  const [activeTeamId, setActiveTeamId] = useState<number | null>(null);
  const { accessToken } = useAuth();
  const navigate = useNavigate();

  const getTournament = async () => {};
  useEffect(() => {
    if (accessToken) {
      getTournament();
    } else {
      navigate("/auth");
    }
  });

  const toggleTeamDetails = (teamId: number) => {
    if (activeTeamId === teamId) {
      setActiveTeamId(null);
    } else {
      setActiveTeamId(teamId);
    }
  };

  const teams = [
    {
      id: 1,
      name: "Cricket Kings",
      owner: "John Smith",
      points: 458,
      rank: 1,
      trending: "up",
      isCurrentUser: false,
    },
    {
      id: 2,
      name: "Your Dream XI",
      owner: "You",
      points: 425,
      rank: 2,
      trending: "down",
      isCurrentUser: true,
    },
    {
      id: 3,
      name: "Pitch Perfect",
      owner: "Mike Johnson",
      points: 412,
      rank: 3,
      trending: "same",
      isCurrentUser: false,
    },
    {
      id: 4,
      name: "Bowling Wizards",
      owner: "Sarah Williams",
      points: 402,
      rank: 4,
      trending: "up",
      isCurrentUser: false,
    },
    {
      id: 5,
      name: "Chennai Super Kings",
      owner: "Alex Brown",
      points: 389,
      rank: 5,
      trending: "down",
      isCurrentUser: false,
    },
    {
      id: 6,
      name: "Royal Titans",
      owner: "Emily Davis",
      points: 376,
      rank: 6,
      trending: "up",
      isCurrentUser: false,
    },
    {
      id: 7,
      name: "Mumbai Indians",
      owner: "Robert Wilson",
      points: 354,
      rank: 7,
      trending: "down",
      isCurrentUser: false,
    },
    {
      id: 8,
      name: "Thunder Strikers",
      owner: "Jessica Taylor",
      points: 341,
      rank: 8,
      trending: "same",
      isCurrentUser: false,
    },
  ];

  const playerPoints = [
    { id: 1, name: "Virat Kohli", team: "IND", role: "Batsman", points: 126 },
    { id: 2, name: "Jasprit Bumrah", team: "IND", role: "Bowler", points: 118 },
    { id: 3, name: "Steve Smith", team: "AUS", role: "Batsman", points: 115 },
    { id: 4, name: "Rashid Khan", team: "AFG", role: "Bowler", points: 109 },
    { id: 5, name: "Kane Williamson", team: "NZ", role: "Batsman", points: 102 },
    { id: 6, name: "Pat Cummins", team: "AUS", role: "Bowler", points: 98 },
    { id: 7, name: "Babar Azam", team: "PAK", role: "Batsman", points: 95 },
    { id: 8, name: "Ben Stokes", team: "ENG", role: "All-rounder", points: 92 },
  ];

  const teamPlayers = {
    1: [
      { id: 1, name: "Virat Kohli", team: "IND", role: "Batsman", points: 87 },
      { id: 2, name: "Rohit Sharma", team: "IND", role: "Batsman", points: 65 },
      { id: 3, name: "Jasprit Bumrah", team: "IND", role: "Bowler", points: 78 },
      { id: 4, name: "Pat Cummins", team: "AUS", role: "Bowler", points: 59 },
      { id: 5, name: "Kane Williamson", team: "NZ", role: "Batsman", points: 72 },
      { id: 6, name: "Jos Buttler", team: "ENG", role: "WK-Batsman", points: 54 },
      { id: 7, name: "Shakib Al Hasan", team: "BAN", role: "All-rounder", points: 43 },
    ],
    2: [
      { id: 1, name: "Steve Smith", team: "AUS", role: "Batsman", points: 82 },
      { id: 2, name: "Joe Root", team: "ENG", role: "Batsman", points: 71 },
      { id: 3, name: "Trent Boult", team: "NZ", role: "Bowler", points: 65 },
      { id: 4, name: "Babar Azam", team: "PAK", role: "Batsman", points: 79 },
      { id: 5, name: "Ravindra Jadeja", team: "IND", role: "All-rounder", points: 51 },
      { id: 6, name: "Rishabh Pant", team: "IND", role: "WK-Batsman", points: 45 },
      { id: 7, name: "Rashid Khan", team: "AFG", role: "Bowler", points: 32 },
    ],
    3: [
      { id: 1, name: "Kane Williamson", team: "NZ", role: "Batsman", points: 75 },
      { id: 2, name: "David Warner", team: "AUS", role: "Batsman", points: 68 },
      { id: 3, name: "Kagiso Rabada", team: "SA", role: "Bowler", points: 58 },
      { id: 4, name: "Quinton de Kock", team: "SA", role: "WK-Batsman", points: 63 },
      { id: 5, name: "Ben Stokes", team: "ENG", role: "All-rounder", points: 72 },
      { id: 6, name: "Mohammed Shami", team: "IND", role: "Bowler", points: 49 },
      { id: 7, name: "Glenn Maxwell", team: "AUS", role: "All-rounder", points: 27 },
    ],
    4: [
      { id: 1, name: "Jasprit Bumrah", team: "IND", role: "Bowler", points: 85 },
      { id: 2, name: "Shaheen Afridi", team: "PAK", role: "Bowler", points: 72 },
      { id: 3, name: "Mitchell Starc", team: "AUS", role: "Bowler", points: 68 },
      { id: 4, name: "Trent Boult", team: "NZ", role: "Bowler", points: 63 },
      { id: 5, name: "Jofra Archer", team: "ENG", role: "Bowler", points: 59 },
      { id: 6, name: "Yuzvendra Chahal", team: "IND", role: "Bowler", points: 54 },
      { id: 7, name: "Kagiso Rabada", team: "SA", role: "Bowler", points: 51 },
    ],
    5: [
      { id: 1, name: "MS Dhoni", team: "IND", role: "WK-Batsman", points: 72 },
      { id: 2, name: "Ravindra Jadeja", team: "IND", role: "All-rounder", points: 68 },
      { id: 3, name: "Faf du Plessis", team: "SA", role: "Batsman", points: 65 },
      { id: 4, name: "Deepak Chahar", team: "IND", role: "Bowler", points: 58 },
      { id: 5, name: "Ruturaj Gaikwad", team: "IND", role: "Batsman", points: 56 },
      { id: 6, name: "Moeen Ali", team: "ENG", role: "All-rounder", points: 53 },
      { id: 7, name: "Sam Curran", team: "ENG", role: "All-rounder", points: 47 },
    ],
    6: [
      { id: 1, name: "Kane Williamson", team: "NZ", role: "Batsman", points: 75 },
      { id: 2, name: "Joe Root", team: "ENG", role: "Batsman", points: 71 },
      { id: 3, name: "Pat Cummins", team: "AUS", role: "Bowler", points: 68 },
      { id: 4, name: "KL Rahul", team: "IND", role: "Batsman", points: 65 },
      { id: 5, name: "Rashid Khan", team: "AFG", role: "Bowler", points: 61 },
      { id: 6, name: "Jos Buttler", team: "ENG", role: "WK-Batsman", points: 58 },
      { id: 7, name: "Chris Woakes", team: "ENG", role: "All-rounder", points: 48 },
    ],
    7: [
      { id: 1, name: "Rohit Sharma", team: "IND", role: "Batsman", points: 76 },
      { id: 2, name: "Jasprit Bumrah", team: "IND", role: "Bowler", points: 73 },
      { id: 3, name: "Suryakumar Yadav", team: "IND", role: "Batsman", points: 67 },
      { id: 4, name: "Ishan Kishan", team: "IND", role: "WK-Batsman", points: 59 },
      { id: 5, name: "Kieron Pollard", team: "WI", role: "All-rounder", points: 54 },
      { id: 6, name: "Trent Boult", team: "NZ", role: "Bowler", points: 51 },
      { id: 7, name: "Hardik Pandya", team: "IND", role: "All-rounder", points: 46 },
    ],
    8: [
      { id: 1, name: "David Warner", team: "AUS", role: "Batsman", points: 73 },
      { id: 2, name: "Mitchell Starc", team: "AUS", role: "Bowler", points: 68 },
      { id: 3, name: "Jos Buttler", team: "ENG", role: "WK-Batsman", points: 65 },
      { id: 4, name: "Andre Russell", team: "WI", role: "All-rounder", points: 58 },
      { id: 5, name: "Shakib Al Hasan", team: "BAN", role: "All-rounder", points: 54 },
      { id: 6, name: "Nicholas Pooran", team: "WI", role: "WK-Batsman", points: 49 },
      { id: 7, name: "Adam Zampa", team: "AUS", role: "Bowler", points: 46 },
    ],
  };

  const getActiveTeamPlayers = () => {
    if (activeTeamId) {
      return teamPlayers[activeTeamId as keyof typeof teamPlayers] || [];
    }
  };

  // Function to get the trend icon
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <ArrowUp className="h-4 w-4 text-green-500" />;
      case "down":
        return <ArrowDown className="h-4 w-4 text-red-500" />;
      default:
        return <Minus className="h-4 w-4 text-gray-400" />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="h-8 w-8 text-[#b91c1c]" />
            <span className="text-xl font-bold text-[#b91c1c]">Supreme 11</span>
            <div className="flex items-center ml-2 bg-gradient-to-r from-[#14F195] to-[#9945FF] text-white text-xs px-2 py-1 rounded-full">
              <span>on Solana</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-gray-700 hover:text-[#b91c1c]"
            >
              Dashboard
            </Link>
            <Link href="/teams" className="text-sm font-medium text-gray-700 hover:text-[#b91c1c]">
              My Teams
            </Link>
            <Link
              href="/matches"
              className="text-sm font-medium text-gray-700 hover:text-[#b91c1c]"
            >
              Matches
            </Link>
            <Link
              href="/tournaments"
              className="text-sm font-medium text-[#b91c1c] border-b-2 border-[#b91c1c]"
            >
              Tournaments
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="bg-red-50 rounded-full p-2">
              <svg
                className="h-5 w-5 text-[#b91c1c]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-sm font-medium text-[#b91c1c]">JS</span>
              </div>
              <span className="hidden md:inline text-sm font-medium">John Smith</span>
            </div>
          </div>
        </div>
      </header>

      {/* Tournament Header */}
      <div className="bg-gradient-to-r from-red-50 to-red-100 py-6">
        <div className="container">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">IPL Fantasy League</h1>
              <div className="flex items-center gap-4 mt-1">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-gray-600" />
                  <span className="text-sm text-gray-600">32 teams</span>
                </div>
                <span className="text-sm text-gray-600">•</span>
                <span className="text-sm text-gray-600">Ends in 18 days</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="text-xs text-gray-500 mb-1">Your Rank</div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-[#b91c1c]">2</span>
                <ArrowDown className="h-4 w-4 text-red-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 container py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section (2/3) - Standings/Points */}
          <div className="lg:w-2/3">
            {/* Tab Navigation */}
            <div className="flex mb-6 border-b">
              <button
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "standings"
                    ? "text-[#b91c1c] border-b-2 border-[#b91c1c]"
                    : "text-gray-600 hover:text-[#b91c1c]"
                }`}
                onClick={() => setActiveTab("standings")}
              >
                Standings
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "points"
                    ? "text-[#b91c1c] border-b-2 border-[#b91c1c]"
                    : "text-gray-600 hover:text-[#b91c1c]"
                }`}
                onClick={() => setActiveTab("points")}
              >
                Player Points
              </button>
            </div>

            {/* Standings Table */}
            {activeTab === "standings" && (
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16">
                        Rank
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Team
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Owner
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Points
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {teams.map((team) => (
                      <tr
                        key={team.id}
                        className={`${
                          team.isCurrentUser ? "bg-red-50" : "hover:bg-gray-50"
                        } cursor-pointer`}
                        onClick={() => toggleTeamDetails(team.id)}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span
                              className={`text-sm font-medium ${team.isCurrentUser ? "text-[#b91c1c]" : "text-gray-900"}`}
                            >
                              {team.rank}
                            </span>
                            <span className="ml-2">{getTrendIcon(team.trending)}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                              <span className="text-xs font-medium text-gray-700">
                                {team.name.charAt(0)}
                                {team.name.split(" ")[1]?.charAt(0)}
                              </span>
                            </div>
                            <span
                              className={`text-sm font-medium ${team.isCurrentUser ? "text-[#b91c1c]" : "text-gray-900"}`}
                            >
                              {team.name}
                            </span>
                            {team.isCurrentUser && (
                              <span className="ml-2 bg-red-100 text-[#b91c1c] text-xs px-2 py-0.5 rounded-full">
                                You
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-600">{team.owner}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <span
                            className={`text-sm font-medium ${team.isCurrentUser ? "text-[#b91c1c]" : "text-gray-900"}`}
                          >
                            {team.points}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Player Points Table */}
            {activeTab === "points" && (
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16">
                        Rank
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Player
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Role
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Points
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {playerPoints.map((player, index) => (
                      <tr key={player.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm font-medium text-gray-900">{index + 1}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                              <span className="text-xs font-medium text-gray-700">
                                {player.team}
                              </span>
                            </div>
                            <span className="text-sm font-medium text-gray-900">{player.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-600">{player.role}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <span className="text-sm font-medium text-gray-900">{player.points}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Team Details Modal */}
            {activeTeamId && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-xl shadow-lg max-w-xl w-full mx-4 relative overflow-hidden">
                  <div className="flex justify-between items-center border-b p-4">
                    <h3 className="text-lg font-bold text-gray-900">
                      {teams.find((t) => t.id === activeTeamId)?.name} - Team Players
                    </h3>
                    <button
                      onClick={() => setActiveTeamId(null)}
                      className="rounded-full p-1 hover:bg-gray-100"
                    >
                      <X className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>
                  <div className="p-4 max-h-[70vh] overflow-y-auto">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-sm text-gray-600">
                        Owner: {teams.find((t) => t.id === activeTeamId)?.owner}
                      </div>
                      <div className="bg-gray-100 px-3 py-1 rounded-full">
                        <span className="text-sm font-medium">
                          Total Points: {teams.find((t) => t.id === activeTeamId)?.points}
                        </span>
                      </div>
                    </div>
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Player
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Role
                          </th>
                          <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Points
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {getActiveTeamPlayers()?.map((player) => (
                          <tr key={player.id}>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                                  <span className="text-xs font-medium text-gray-700">
                                    {player.team}
                                  </span>
                                </div>
                                <span className="text-sm font-medium text-gray-900">
                                  {player.name}
                                </span>
                              </div>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <span className="text-sm text-gray-600">{player.role}</span>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-right">
                              <span className="text-sm font-medium text-gray-900">
                                {player.points}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 flex justify-end">
                    <Button
                      variant="outline"
                      className="border-[#b91c1c] text-[#b91c1c] hover:bg-[#b91c1c]/10"
                      onClick={() => setActiveTeamId(null)}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Section (1/3) - Match Scorecard */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-red-50 to-red-100 p-4">
                <div className="flex justify-between items-center">
                  <h2 className="font-bold text-gray-900">LIVE: IND vs AUS</h2>
                  <div className="flex items-center gap-1">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    <span className="text-xs text-red-500 font-medium">LIVE</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-1">T20 • Wankhede Stadium, Mumbai</p>
              </div>

              {/* Team Scores */}
              <div className="p-4 border-b">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-red-50 rounded-full flex items-center justify-center">
                      <Image
                        src="/api/placeholder/24/24"
                        width={24}
                        height={24}
                        alt="India"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">India</h3>
                      <p className="text-sm font-medium text-gray-600">
                        <span className="text-[#b91c1c]">186/4</span> (32.0 overs)
                      </p>
                    </div>
                  </div>
                  <div className="bg-red-50 px-2 py-1 rounded-md text-xs font-medium text-[#b91c1c]">
                    Batting
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <Image
                        src="/api/placeholder/24/24"
                        width={24}
                        height={24}
                        alt="Australia"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Australia</h3>
                      <p className="text-sm font-medium text-gray-600">244/7 (50.0 overs)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Batsmen */}
              <div className="p-4 border-b">
                <h3 className="text-sm font-medium text-gray-600 mb-3">Batting</h3>
                <table className="min-w-full">
                  <thead>
                    <tr className="text-xs text-gray-500">
                      <th className="pb-2 text-left font-medium">Batsman</th>
                      <th className="pb-2 text-right font-medium w-12">R</th>
                      <th className="pb-2 text-right font-medium w-12">B</th>
                      <th className="pb-2 text-right font-medium w-12">4s</th>
                      <th className="pb-2 text-right font-medium w-12">6s</th>
                      <th className="pb-2 text-right font-medium w-12">SR</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-sm">
                      <td className="py-1.5">
                        <div className="flex items-center">
                          <span className="font-medium text-gray-900">V Kohli</span>
                          <span className="ml-1 text-[#b91c1c] text-xs">*</span>
                        </div>
                      </td>
                      <td className="text-right font-medium text-gray-900">68</td>
                      <td className="text-right text-gray-600">52</td>
                      <td className="text-right text-gray-600">7</td>
                      <td className="text-right text-gray-600">2</td>
                      <td className="text-right text-gray-600">130.8</td>
                    </tr>
                    <tr className="text-sm">
                      <td className="py-1.5">
                        <div className="flex items-center">
                          <span className="font-medium text-gray-900">R Jadeja</span>
                        </div>
                      </td>
                      <td className="text-right font-medium text-gray-900">32</td>
                      <td className="text-right text-gray-600">28</td>
                      <td className="text-right text-gray-600">3</td>
                      <td className="text-right text-gray-600">1</td>
                      <td className="text-right text-gray-600">114.3</td>
                    </tr>
                    <tr className="text-xs text-gray-500">
                      <td className="pt-2">Yet to bat</td>
                      <td className="pt-2 text-right" colSpan={5}>
                        Pant, Pandya, Ashwin
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Current Bowler */}
              <div className="p-4 border-b">
                <h3 className="text-sm font-medium text-gray-600 mb-3">Bowling</h3>
                <table className="min-w-full">
                  <thead>
                    <tr className="text-xs text-gray-500">
                      <th className="pb-2 text-left font-medium">Bowler</th>
                      <th className="pb-2 text-right font-medium w-10">O</th>
                      <th className="pb-2 text-right font-medium w-10">M</th>
                      <th className="pb-2 text-right font-medium w-10">R</th>
                      <th className="pb-2 text-right font-medium w-10">W</th>
                      <th className="pb-2 text-right font-medium w-12">ECO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-sm">
                      <td className="py-1.5">
                        <div className="flex items-center">
                          <span className="font-medium text-gray-900">P Cummins</span>
                          <span className="ml-1 text-[#b91c1c] text-xs">*</span>
                        </div>
                      </td>
                      <td className="text-right font-medium text-gray-900">7.2</td>
                      <td className="text-right text-gray-600">0</td>
                      <td className="text-right text-gray-600">42</td>
                      <td className="text-right text-gray-600">2</td>
                      <td className="text-right text-gray-600">5.73</td>
                    </tr>
                    <tr className="text-sm">
                      <td className="py-1.5">
                        <span className="font-medium text-gray-900">M Starc</span>
                      </td>
                      <td className="text-right font-medium text-gray-900">8.0</td>
                      <td className="text-right text-gray-600">1</td>
                      <td className="text-right text-gray-600">38</td>
                      <td className="text-right text-gray-600">1</td>
                      <td className="text-right text-gray-600">4.75</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Recent Overs */}
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-600 mb-3">Recent Overs</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center justify-center gap-1 text-xs">
                    <span className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                      1
                    </span>
                    <span className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center text-[#b91c1c]">
                      4
                    </span>
                    <span className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                      0
                    </span>
                    <span className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                      1
                    </span>
                    <span className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                      W
                    </span>
                    <span className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                      0
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-1 text-xs">
                    <span className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                      2
                    </span>
                    <span className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                      0
                    </span>
                    <span className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center text-[#b91c1c]">
                      6
                    </span>
                    <span className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                      1
                    </span>
                    <span className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center text-[#b91c1c]">
                      4
                    </span>
                    <span className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                      1
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Match Fantasy Points */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden mt-4">
              <div className="bg-gradient-to-r from-red-50 to-red-100 p-4">
                <h2 className="font-bold text-gray-900">Your Fantasy Points</h2>
                <p className="text-xs text-gray-600 mt-1">IND vs AUS match</p>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-600">Match Points</span>
                  <span className="text-lg font-bold text-[#b91c1c]">+78</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                        <span className="text-xs font-medium text-gray-700">IND</span>
                      </div>
                      <span className="font-medium text-gray-900">V Kohli</span>
                    </div>
                    <span className="font-medium text-green-600">+35</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                        <span className="text-xs font-medium text-gray-700">IND</span>
                      </div>
                      <span className="font-medium text-gray-900">R Jadeja</span>
                    </div>
                    <span className="font-medium text-green-600">+22</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                        <span className="text-xs font-medium text-gray-700">AUS</span>
                      </div>
                      <span className="font-medium text-gray-900">P Cummins</span>
                    </div>
                    <span className="font-medium text-green-600">+18</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                        <span className="text-xs font-medium text-gray-700">AUS</span>
                      </div>
                      <span className="font-medium text-gray-900">M Starc</span>
                    </div>
                    <span className="font-medium text-red-600">-5</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                        <span className="text-xs font-medium text-gray-700">IND</span>
                      </div>
                      <span className="font-medium text-gray-900">Team Captain Bonus</span>
                    </div>
                    <span className="font-medium text-green-600">+8</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Matches */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden mt-4">
              <div className="bg-gradient-to-r from-red-50 to-red-100 p-4">
                <h2 className="font-bold text-gray-900">Upcoming Matches</h2>
              </div>
              <div className="divide-y">
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm font-medium text-gray-900">ENG vs PAK</div>
                      <div className="text-xs text-gray-600 mt-1">Tomorrow, 2:30 PM</div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs border-[#b91c1c] text-[#b91c1c] hover:bg-[#b91c1c]/10"
                    >
                      Create Team
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm font-medium text-gray-900">NZ vs SA</div>
                      <div className="text-xs text-gray-600 mt-1">22 Apr, 7:00 PM</div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs border-[#b91c1c] text-[#b91c1c] hover:bg-[#b91c1c]/10"
                    >
                      Create Team
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm font-medium text-gray-900">SL vs WI</div>
                      <div className="text-xs text-gray-600 mt-1">23 Apr, 3:00 PM</div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs border-[#b91c1c] text-[#b91c1c] hover:bg-[#b91c1c]/10"
                    >
                      Create Team
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Trophy className="h-6 w-6 text-[#b91c1c]" />
              <span className="text-lg font-medium text-[#b91c1c]">Supreme 11</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <Link href="/about" className="hover:text-[#b91c1c]">
                About
              </Link>
              <Link href="/terms" className="hover:text-[#b91c1c]">
                Terms
              </Link>
              <Link href="/privacy" className="hover:text-[#b91c1c]">
                Privacy
              </Link>
              <Link href="/contact" className="hover:text-[#b91c1c]">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-gray-500">
            &copy; 2025 Supreme 11. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
