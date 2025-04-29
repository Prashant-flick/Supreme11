import { PageLayout } from "@/components/layout/page-layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { conf } from "../config/index";
import { matchInterface } from "@repo/common/types";
import { useAuth } from "@/context/UseAuth";
import { Link } from "react-router-dom";

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

export default function CompletedMatches() {
  const { accessToken } = useAuth();
  const [completedMatches, setCompletedMatches] = useState<matchCompleteInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const getCompletedMatches = async () => {
    setIsLoading(true);
    try {
      const matchesRes = await axios.get(`${conf.backendUrl}/matches/all`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const completed: matchCompleteInterface[] = [];

      for (const match of matchesRes.data.matchesRes) {
        if (match.status === "ended") {
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

          completed.push(match);
        }
      }

      completed.sort((a: matchCompleteInterface, b: matchCompleteInterface) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });

      setCompletedMatches(completed);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (accessToken) {
      getCompletedMatches();
    }
  }, [accessToken]);

  const navItems = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/teams", label: "My Teams" },
    { href: "/matches", label: "Matches", isActive: true },
    { href: "/rewards", label: "Rewards" },
  ];

  // Format match date to show how many days ago the match was played
  const getMatchTimeAgo = (matchDate: Date) => {
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - matchDate.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return "Today";
    } else if (diffDays === 1) {
      return "Yesterday";
    } else {
      return `${diffDays} days ago`;
    }
  };

  return (
    <PageLayout
      navItems={navItems}
      userInitials="JS"
      userName="John Smith"
      showAuthButtons={false}
      minimalFooter={true}
    >
      <div className="container py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Completed Matches</h1>
          <Link to="/matches" className="text-blue-600 hover:text-blue-800 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to All Matches
          </Link>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid gap-6">
            {completedMatches.length > 0 ? (
              completedMatches.map((match) => (
                <div
                  key={match.id}
                  className="bg-white rounded-lg shadow p-6 border border-gray-200 hover:border-blue-200 transition-colors"
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
                      {match.league}
                    </span>
                    <div className="flex flex-col items-end">
                      <span className="text-sm text-gray-800 font-medium">
                        {match.date.toLocaleDateString("en-US", options)}
                      </span>
                      <span className="text-xs text-gray-500">{getMatchTimeAgo(match.date)}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-4">
                      <img src={match.team1ImgSrc} alt={match.team1Name} className="w-10 h-10" />
                      <div>
                        <p className="font-medium">{match.team1FullName}</p>
                        <p className="text-sm text-gray-600">
                          {match.innings[1]?.teamName === match.team1Name
                            ? `${match?.innings[1]?.score}/${match?.innings[1]?.wickets} (${match.innings[1]?.over || ""} ov)`
                            : `${match?.innings[0]?.score}/${match?.innings[0]?.wickets} (${match.innings[0]?.over || ""} ov)`}
                        </p>
                      </div>
                    </div>
                    <div className="text-xs font-medium bg-gray-100 px-2 py-1 rounded">vs</div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-medium">{match.team2FullName}</p>
                        <p className="text-sm text-gray-600">
                          {match.innings[1]?.teamName === match.team2Name
                            ? `${match?.innings[1]?.score}/${match?.innings[1]?.wickets} (${match.innings[1]?.over || ""} ov)`
                            : `${match?.innings[0]?.score}/${match?.innings[0]?.wickets} (${match.innings[0]?.over || ""} ov)`}
                        </p>
                      </div>
                      <img src={match.team2ImgSrc} alt={match.team2Name} className="w-10 h-10" />
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded mb-4">
                    <p className="text-sm font-medium text-gray-800">{match.result}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t pt-4 mt-2">
                    <div className="mb-2 sm:mb-0">
                      <span className="font-medium text-gray-800">{match.venue}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 py-1 px-3 rounded">
                        Match Details
                      </button>
                      <button className="text-xs bg-green-50 hover:bg-green-100 text-green-700 py-1 px-3 rounded">
                        View Scorecard
                      </button>
                      <button className="text-xs bg-purple-50 hover:bg-purple-100 text-purple-700 py-1 px-3 rounded">
                        Highlights
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto text-gray-400 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Completed Matches</h3>
                <p className="text-gray-500">There are no completed matches to display</p>
              </div>
            )}
          </div>
        )}
      </div>
    </PageLayout>
  );
}
