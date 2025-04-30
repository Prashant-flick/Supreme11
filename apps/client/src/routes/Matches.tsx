import { PageLayout } from "@/components/layout/page-layout";
import { LiveMatchCard } from "@/components/dashboard/live-match-card";
import { useNavigate } from "react-router-dom";
import { useMatches } from "@/hooks/UseMatches";

export default function Matches() {
  const { liveMatches, upcomingMatches, completedMatches } = useMatches();
  const navigate = useNavigate();

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const navItems = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/teams", label: "My Teams" },
    { href: "/matches", label: "Matches", isActive: true },
    { href: "/rewards", label: "Rewards" },
  ];

  const handleShowAllLiveMatches = () => {
    navigate("/matches/live");
  };

  const handleShowAllUpcomingMatches = () => {
    navigate("/matches/upcoming");
  };

  const handleShowAllCompletedMatches = () => {
    navigate("/matches/completed");
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
        <h1 className="text-2xl font-bold mb-6 text-gray-900">All Matches</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Live and Upcoming Matches */}
          <div className="space-y-8">
            {/* Live Matches Section */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-900">Live Matches</h2>
                <button
                  className="text-sm text-blue-600 cursor-pointer hover:text-blue-800"
                  onClick={handleShowAllLiveMatches}
                >
                  Show all live matches
                </button>
              </div>
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
                  <div className="text-center py-8 text-gray-500">No live matches right now</div>
                )}
              </div>
            </div>

            {/* Upcoming Matches Section */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-900">Upcoming Matches</h2>
                <button
                  className="text-sm cursor-pointer text-blue-600 hover:text-blue-800"
                  onClick={handleShowAllUpcomingMatches}
                >
                  Show all upcoming matches
                </button>
              </div>
              <div className="space-y-4">
                {upcomingMatches && upcomingMatches.length > 0 ? (
                  upcomingMatches.slice(0, 3).map((match) => (
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
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">No upcoming matches</div>
                )}
                {upcomingMatches.length > 3 && (
                  <div className="text-center pt-2">
                    <button
                      onClick={handleShowAllUpcomingMatches}
                      className="text-sm cursor-pointer text-blue-600 hover:text-blue-800"
                    >
                      View {upcomingMatches.length - 3} more upcoming matches
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Completed Matches */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-900">Completed Matches</h2>
              <button
                className="text-sm cursor-pointer text-blue-600 hover:text-blue-800"
                onClick={handleShowAllCompletedMatches}
              >
                Show all completed matches
              </button>
            </div>
            <div className="space-y-4">
              {completedMatches && completedMatches.length > 0 ? (
                completedMatches.slice(0, 5).map((match) => (
                  <div
                    onClick={() => navigate(`/matches/details/${match.id}`)}
                    key={match.id}
                    className="border border-gray-200 rounded-md p-4 hover:bg-gray-50 cursor-pointer"
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
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">No completed matches</div>
              )}
              {completedMatches.length > 5 && (
                <div className="text-center pt-2">
                  <button
                    onClick={handleShowAllCompletedMatches}
                    className="text-sm cursor-pointer text-blue-600 hover:text-blue-800"
                  >
                    View {completedMatches.length - 5} more completed matches
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
