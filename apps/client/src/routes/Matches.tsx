import { PageLayout } from "@/components/layout/page-layout";
import { LiveMatchCard } from "@/components/dashboard/live-match-card";
import { useEffect, useState } from "react";
import axios from "axios";
import { conf } from "../config/index";
import { matchInterface } from "@repo/common/types";
import { useAuth } from "@/context/UseAuth";
// import { useNavigate } from "react-router-dom";

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
    over: string | null;
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
  // const navigate = useNavigate();

  console.log(liveMatches);

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
      const sortedMatches: matchCompleteInterface[] = matchesRes.data.matchesRes.sort(
        (a: matchInterface, b: matchInterface) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
      );

      const live: matchCompleteInterface[] = [];
      const upcoming: matchCompleteInterface[] = [];
      const completed: matchCompleteInterface[] = [];

      for (const match of sortedMatches) {
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
      setInterval(() => {
        getMatches();
      }, 30 * 1000);
    }
  }, [accessToken]);

  const navItems = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/teams", label: "My Teams" },
    { href: "/matches", label: "Matches", isActive: true },
    { href: "/rewards", label: "Rewards" },
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
                {liveMatches.length > 0 ? (
                  liveMatches.map((match) => (
                    <LiveMatchCard
                      key={match.id}
                      homeTeam={{
                        name: match.team1FullName,
                        shortName: match.team1Name,
                        logoSrc: match.team1ImgSrc,
                        score: `${match.innings[1].teamName === match.team1Name ? `${match?.innings[1]?.score} / ${match?.innings[1]?.wickets}(${match.innings[1]?.over || ""} ov)` : `${match?.innings[0]?.score}/${match?.innings[0]?.wickets}(${match.innings[0]?.over || ""} ov)`}`,
                      }}
                      awayTeam={{
                        name: match.team2FullName,
                        shortName: match.team2Name,
                        logoSrc: match.team2ImgSrc,
                        score: `${match.innings[1].teamName === match.team2Name ? `${match?.innings[1]?.score} / ${match?.innings[1]?.wickets}(${match.innings[1]?.over || ""} ov)` : `${match?.innings[0]?.score}/${match?.innings[0]?.wickets}(${match.innings[0]?.over || ""} ov)`}`,
                      }}
                      matchType={match.league}
                      currentOver={"0"}
                      target={0}
                      statusText={match.status}
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
                {upcomingMatches.length > 0 &&
                  upcomingMatches.map((match) => (
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
                          <span className="font-medium">{match.team1Name}</span>
                        </div>
                        <span className="text-sm font-medium">vs</span>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{match.team2Name}</span>
                          <img src={match.team2ImgSrc} alt={match.team2Name} className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 mb-3">{match.venue}</div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">{22} players participating</span>
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
                            {match.innings[1].teamName === match.team1Name
                              ? `${match?.innings[1]?.score} / ${match?.innings[1]?.wickets}(${match.innings[1]?.over || ""} ov)`
                              : `${match?.innings[0]?.score}/${match?.innings[0]?.wickets}(${match.innings[0]?.over || ""} ov)`}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-medium bg-gray-100 px-2 py-1 rounded">vs</span>
                      <div className="flex items-center space-x-2">
                        <div className="text-right">
                          <span className="font-medium">{match.team2Name}</span>
                          <p className="text-xs text-gray-600">
                            {match.innings[1].teamName === match.team2Name
                              ? `${match?.innings[1]?.score} / ${match?.innings[1]?.wickets}(${match.innings[1]?.over || ""} ov)`
                              : `${match?.innings[0]?.score}/${match?.innings[0]?.wickets}(${match.innings[0]?.over || ""} ov)`}
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
