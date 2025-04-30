import { PageLayout } from "@/components/layout/page-layout";
import { LiveMatchCard } from "@/components/dashboard/live-match-card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMatches } from "@/hooks/UseMatches";

export default function LiveMatches() {
  const { liveMatches } = useMatches();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (liveMatches) {
      setIsLoading(false);
    }
  }, [liveMatches]);

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
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Live Matches</h1>
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
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow p-6">
            <div className="space-y-6">
              {liveMatches.length > 0 ? (
                liveMatches.map((match) => (
                  <LiveMatchCard
                    matchId={match.id}
                    key={match.id}
                    homeTeam={{
                      name: match.team1FullName,
                      shortName: match.team1Name,
                      logoSrc: match.team1ImgSrc,
                      score: `${match.innings[1].teamName === match.team1Name ? `${match?.innings[1]?.score}/${match?.innings[1]?.wickets}(${match.innings[1]?.over || ""} ov)` : `${match?.innings[0]?.score}/${match?.innings[0]?.wickets}(${match.innings[0]?.over || ""} ov)`}`,
                    }}
                    awayTeam={{
                      name: match.team2FullName,
                      shortName: match.team2Name,
                      logoSrc: match.team2ImgSrc,
                      score: `${match.innings[1].teamName === match.team2Name ? `${match?.innings[1]?.score}/${match?.innings[1]?.wickets}(${match.innings[1]?.over || ""} ov)` : `${match?.innings[0]?.score}/${match?.innings[0]?.wickets}(${match.innings[0]?.over || ""} ov)`}`,
                    }}
                    matchType={match.league}
                    currentOver={""}
                    target={"vs"}
                    statusText={match.status}
                  />
                ))
              ) : (
                <div className="text-center py-16 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mx-auto mb-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                  <h3 className="text-lg font-medium mb-1">No Live Matches</h3>
                  <p>There are currently no matches being played live.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
