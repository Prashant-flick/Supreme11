import { PageLayout } from "@/components/layout/page-layout";
import { LiveMatchCard } from "@/components/dashboard/live-match-card";
import { useEffect, useState } from "react";
import axios from "axios";
import { conf } from "../config/index";
import { matchInterface } from "@repo/common/types";
import { useAuth } from "@/context/UseAuth";
import { useNavigate } from "react-router-dom";

interface matchCompleteInterface extends matchInterface {
  innings: {
    id: string;
    matchId: string;
    whichInning: "1st" | "2nd";
    teamName: string | null;
    score: number;
    wickets: number;
    extras: number;
    batsman1: string | null;
    batsman2: string | null;
    bowler: string | null;
  }[];
  team1ImgSrc: string;
  team2ImgSrc: string;
  team1FullName: string;
  team2FullName: string;
}

export default function Matches() {
  const { accessToken } = useAuth();
  const [liveMatches, setLiveMatches] = useState<matchCompleteInterface[]>([]);
  const [upcomingMatches, setUpcomingMatches] = useState<matchCompleteInterface[]>([]);
  const [completedMatches, setCompletedMatches] = useState<matchCompleteInterface[]>([]);
  const navigate = useNavigate();

  console.log(liveMatches);
  console.log(upcomingMatches);
  console.log(completedMatches);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  function getTeamFullName(abbreviation: string): string {
    const abbr = abbreviation.toUpperCase();

    const teamMap: Record<string, string> = {
      CSK: "Chennai Super Kings",
      DC: "Delhi Capitals",
      GT: "Gujarat Titans",
      KKR: "Kolkata Knight Riders",
      LSG: "Lucknow Super Giants",
      MI: "Mumbai Indians",
      PBKS: "Punjab Kings",
      RCB: "Royal Challengers Bangalore",
      RR: "Rajasthan Royals",
      SRH: "Sunrisers Hyderabad",
    };

    return teamMap[abbr] || "Unknown Team";
  }

  const getMatches = async () => {
    try {
      const matchesRes = await axios.get(`${conf.backendUrl}/matches/all`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const live: matchCompleteInterface[] = [];
      const upcoming: matchCompleteInterface[] = [];
      const completed: matchCompleteInterface[] = [];

      for (const match of matchesRes.data.matchesRes) {
        const team1Res = await axios.get(`${conf.backendUrl}/squad/squadId/${match.team1Id}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        const team2Res = await axios.get(`${conf.backendUrl}/squad/squadId/${match.team2Id}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        match.team1ImgSrc = team1Res.data.squadRes.logo;
        match.team2ImgSrc = team2Res.data.squadRes.logo;
        match.team1FullName = getTeamFullName(team1Res.data.squadRes.name);
        match.team2FullName = getTeamFullName(team2Res.data.squadRes.name);
        match.team1Name = team1Res.data.squadRes.name;
        match.team2Name = team2Res.data.squadRes.name;
        match.date = new Date(match.date);

        if (match.status === "started") {
          live.push(match);
        } else if (match.status === "upcoming") {
          upcoming.push(match);
        } else if (match.status === "ended") {
          completed.push(match);
        }
      }

      setLiveMatches(live);
      setUpcomingMatches(upcoming);
      setCompletedMatches(completed);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (accessToken) {
      getMatches();
    }
    // else {
    //   navigate("/auth");
    // }
  }, [accessToken]);

  const navItems = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/teams", label: "My Teams" },
    { href: "/matches", label: "Matches", isActive: true },
    { href: "/rewards", label: "Rewards" },
  ];

  const mockLiveMatches = [
    {
      id: "1",
      homeTeam: {
        name: "India",
        shortName: "IND",
        logoSrc: "/placeholder.svg?height=24&width=24",
        score: "186/4",
      },
      awayTeam: {
        name: "Australia",
        shortName: "AUS",
        logoSrc: "/placeholder.svg?height=24&width=24",
        score: "244/7",
      },
      matchType: "T20 • IND vs AUS",
      currentOver: "32nd over",
      target: 245,
      statusText: "India needs 59 runs from 18 overs",
    },
    {
      id: "2",
      homeTeam: {
        name: "England",
        shortName: "ENG",
        logoSrc: "/placeholder.svg?height=24&width=24",
        score: "156/2",
      },
      awayTeam: {
        name: "Pakistan",
        shortName: "PAK",
        logoSrc: "/placeholder.svg?height=24&width=24",
        score: "142/8",
      },
      matchType: "ODI • ENG vs PAK",
      currentOver: "23rd over",
      target: 143,
      statusText: "England needs 13 runs to win",
    },
  ];

  const mockUpcomingMatches = [
    {
      id: "1",
      matchType: "T20",
      dateTime: "Tomorrow, 7:30 PM",
      homeTeam: {
        shortName: "ENG",
        logoSrc: "/placeholder.svg?height=20&width=20",
      },
      awayTeam: {
        shortName: "SA",
        logoSrc: "/placeholder.svg?height=20&width=20",
      },
      venue: "Wankhede Stadium, Mumbai",
      playersCount: 28,
    },
    {
      id: "2",
      matchType: "ODI",
      dateTime: "Apr 26, 2:00 PM",
      homeTeam: {
        shortName: "WI",
        logoSrc: "/placeholder.svg?height=20&width=20",
      },
      awayTeam: {
        shortName: "NZ",
        logoSrc: "/placeholder.svg?height=20&width=20",
      },
      venue: "Kensington Oval, Barbados",
      playersCount: 16,
    },
    {
      id: "3",
      matchType: "Test",
      dateTime: "Apr 28, 10:00 AM",
      homeTeam: {
        shortName: "IND",
        logoSrc: "/placeholder.svg?height=20&width=20",
      },
      awayTeam: {
        shortName: "SL",
        logoSrc: "/placeholder.svg?height=20&width=20",
      },
      venue: "Eden Gardens, Kolkata",
      playersCount: 22,
    },
  ];

  const mockCompletedMatches = [
    {
      id: "1",
      matchType: "T20",
      date: "Apr 20, 2025",
      homeTeam: {
        shortName: "IND",
        logoSrc: "/placeholder.svg?height=20&width=20",
        score: "189/4",
      },
      awayTeam: {
        shortName: "PAK",
        logoSrc: "/placeholder.svg?height=20&width=20",
        score: "186/7",
      },
      result: "India won by 3 runs",
    },
    {
      id: "2",
      matchType: "ODI",
      date: "Apr 18, 2025",
      homeTeam: {
        shortName: "AUS",
        logoSrc: "/placeholder.svg?height=20&width=20",
        score: "312/8",
      },
      awayTeam: {
        shortName: "SA",
        logoSrc: "/placeholder.svg?height=20&width=20",
        score: "256/10",
      },
      result: "Australia won by 56 runs",
    },
    {
      id: "3",
      matchType: "Test",
      date: "Apr 14-18, 2025",
      homeTeam: {
        shortName: "ENG",
        logoSrc: "/placeholder.svg?height=20&width=20",
        score: "423 & 312/6d",
      },
      awayTeam: {
        shortName: "NZ",
        logoSrc: "/placeholder.svg?height=20&width=20",
        score: "367 & 289/10",
      },
      result: "England won by 79 runs",
    },
    {
      id: "4",
      matchType: "T20",
      date: "Apr 12, 2025",
      homeTeam: {
        shortName: "WI",
        logoSrc: "/placeholder.svg?height=20&width=20",
        score: "201/5",
      },
      awayTeam: {
        shortName: "BAN",
        logoSrc: "/placeholder.svg?height=20&width=20",
        score: "183/9",
      },
      result: "West Indies won by 18 runs",
    },
  ];

  return (
    <PageLayout
      navItems={navItems}
      userInitials="JS"
      userName="John Smith"
      showAuthButtons={false}
      minimalFooter={true}
    >
      <div className="container py-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-900">All Matches</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Live and Upcoming Matches */}
          <div className="space-y-8">
            {/* Live Matches Section */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-900">Live Matches</h2>
                <button className="text-sm text-blue-600 hover:text-blue-800">
                  Show all live matches
                </button>
              </div>
              <div className="space-y-6">
                {mockLiveMatches.length > 0 ? (
                  mockLiveMatches.map((match) => (
                    <LiveMatchCard
                      key={match.id}
                      homeTeam={match.homeTeam}
                      awayTeam={match.awayTeam}
                      matchType={match.matchType}
                      currentOver={match.currentOver}
                      target={match.target}
                      statusText={match.statusText}
                    />
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">No live matches right now</div>
                )}
              </div>
            </div>

            {/* Upcoming Matches Section */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-900">Upcoming Matches</h2>
                <button className="text-sm text-blue-600 hover:text-blue-800">
                  Show all upcoming matches
                </button>
              </div>
              <div className="space-y-4">
                {mockUpcomingMatches.map((match) => (
                  <div
                    key={match.id}
                    className="border border-gray-200 rounded-md p-4 hover:bg-gray-50"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-500">{match.matchType}</span>
                      <span className="text-sm text-gray-500">{match.dateTime}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-2">
                        <img
                          src={match.homeTeam.logoSrc}
                          alt={match.homeTeam.shortName}
                          className="w-5 h-5"
                        />
                        <span className="font-medium">{match.homeTeam.shortName}</span>
                      </div>
                      <span className="text-sm font-medium">vs</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{match.awayTeam.shortName}</span>
                        <img
                          src={match.awayTeam.logoSrc}
                          alt={match.awayTeam.shortName}
                          className="w-5 h-5"
                        />
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mb-3">{match.venue}</div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        {match.playersCount} players participating
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Completed Matches */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-900">Completed Matches</h2>
              <button className="text-sm text-blue-600 hover:text-blue-800">
                Show all completed matches
              </button>
            </div>
            <div className="space-y-4">
              {completedMatches &&
                completedMatches.length > 0 &&
                completedMatches.map((match) => (
                  <div
                    key={match.id}
                    className="border border-gray-200 rounded-md p-4 hover:bg-gray-50"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-500">{match.league}</span>
                      <span className="text-sm text-gray-500">
                        {match.date.toLocaleDateString("en-US", options)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-2">
                        <img src={match.team1ImgSrc} alt={match.team1Name} className="w-5 h-5" />
                        <div>
                          <span className="font-medium">{match.team1Name}</span>
                          <p className="text-xs text-gray-600">
                            {match?.innings[1].score}/{match.innings[1].wickets}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-medium bg-gray-100 px-2 py-1 rounded">vs</span>
                      <div className="flex items-center space-x-2">
                        <div className="text-right">
                          <span className="font-medium">{match.team2Name}</span>
                          <p className="text-xs text-gray-600">
                            {match?.innings[0].score}/{match.innings[0].wickets}
                          </p>
                        </div>
                        <img src={match.team2ImgSrc} alt={match.team2Name} className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="text-sm text-gray-700 font-medium mb-3">{match.result}</div>
                    <div className="flex justify-end">
                      <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 py-1 px-3 rounded">
                        Match Details
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
