import { PageLayout } from "@/components/layout/page-layout";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMatches } from "@/hooks/UseMatches";

export default function UpcomingMatches() {
  const { upcomingMatches } = useMatches();
  const [isLoading, setIsLoading] = useState(true);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  useEffect(() => {
    if (upcomingMatches) {
      setIsLoading(false);
    }
  }, [upcomingMatches]);

  const navItems = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/teams", label: "My Teams" },
    { href: "/matches", label: "Matches", isActive: true },
    { href: "/rewards", label: "Rewards" },
  ];

  // Calculate days remaining until the match
  const getDaysRemaining = (matchDate: Date) => {
    const today = new Date();
    const diffTime = Math.abs(matchDate.getTime() - today.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
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
          <h1 className="text-2xl font-bold text-gray-900">Upcoming Matches</h1>
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
            {upcomingMatches.length > 0 ? (
              upcomingMatches.map((match) => (
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
                      <span className="text-xs text-gray-500">
                        {match.date.toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-4">
                      <img src={match.team1ImgSrc} alt={match.team1Name} className="w-10 h-10" />
                      <div>
                        <p className="font-medium">{match.team1FullName}</p>
                        <p className="text-sm text-gray-600">{match.team1Name}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-bold bg-gray-100 px-3 py-1 rounded-full mb-1">
                        vs
                      </span>
                      <span className="text-xs text-gray-500">
                        {getDaysRemaining(match.date) === 0
                          ? "Today"
                          : getDaysRemaining(match.date) === 1
                            ? "Tomorrow"
                            : `In ${getDaysRemaining(match.date)} days`}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-medium">{match.team2FullName}</p>
                        <p className="text-sm text-gray-600">{match.team2Name}</p>
                      </div>
                      <img src={match.team2ImgSrc} alt={match.team2Name} className="w-10 h-10" />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t pt-4 mt-2">
                    <div className="mb-2 sm:mb-0">
                      <span className="font-medium text-gray-800">{match.venue}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 py-1 px-3 rounded">
                        Match Details
                      </button>
                      <button className="text-xs bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded">
                        Create Fantasy Team
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Upcoming Matches</h3>
                <p className="text-gray-500">Check back later for new match schedules</p>
              </div>
            )}
          </div>
        )}
      </div>
    </PageLayout>
  );
}
