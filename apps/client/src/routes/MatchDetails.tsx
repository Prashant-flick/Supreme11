import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { conf } from "../config/index";
import { useAuth } from "@/hooks/UseAuth";
import { PageLayout } from "@/components/layout/page-layout";

type TabId = "scorecard" | "commentary" | "fantasyPoints";

interface tabNavigationPorps {
  activeTab: TabId;
  setActiveTab: Dispatch<SetStateAction<TabId>>;
}

const TabNavigation = ({ activeTab, setActiveTab }: tabNavigationPorps) => {
  const tabs: { id: TabId; label: string }[] = [
    { id: "scorecard", label: "Scorecard" },
    { id: "commentary", label: "Commentary" },
    { id: "fantasyPoints", label: "Fantasy Points" },
  ];

  return (
    <div className="border-b border-gray-200">
      <nav className="flex -mb-px">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-4 px-6 font-medium text-sm border-b-2 ${
              activeTab === tab.id
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

// Main score card component
const MatchScoreCard = ({ matchData }) => {
  if (!matchData) return <div className="animate-pulse bg-gray-200 h-32 rounded-lg"></div>;

  const getTeamScore = (teamName) => {
    const inning = matchData.innings.find((i) => i.teamName === teamName);
    if (!inning) return "Yet to bat";
    return `${inning.score}/${inning.wickets} (${inning.over || "0.0"} ov)`;
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium text-gray-500">{matchData.league}</span>
        <span className="text-sm font-medium px-3 py-1 bg-gray-100 rounded-full">
          {matchData.status === "started" ? "Live" : matchData.status}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        {/* Team 1 */}
        <div className="flex flex-col items-center">
          <img src={matchData.team1ImgSrc} alt={matchData.team1Name} className="w-16 h-16 mb-2" />
          <h3 className="font-bold text-lg">{matchData.team1Name}</h3>
          <p className="text-md font-medium">{getTeamScore(matchData.team1Name)}</p>
        </div>

        {/* VS */}
        <div className="flex flex-col items-center justify-center">
          <span className="text-xl font-bold">vs</span>
          <span className="text-sm text-gray-500 mt-2">{matchData.venue}</span>
          <span className="text-sm text-gray-500 mt-1">
            {new Date(matchData.date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>

        {/* Team 2 */}
        <div className="flex flex-col items-center">
          <img src={matchData.team2ImgSrc} alt={matchData.team2Name} className="w-16 h-16 mb-2" />
          <h3 className="font-bold text-lg">{matchData.team2Name}</h3>
          <p className="text-md font-medium">{getTeamScore(matchData.team2Name)}</p>
        </div>
      </div>

      {matchData.result && (
        <div className="bg-blue-50 p-3 rounded-md text-center text-blue-800 font-medium">
          {matchData.result}
        </div>
      )}
    </div>
  );
};

// Ball-by-ball tracking component
const BallByBallTracker = ({ ballsData }) => {
  if (!ballsData || ballsData.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <h3 className="font-medium text-gray-700 mb-3">Ball-by-Ball</h3>
        <div className="text-center py-4 text-gray-500">No ball data available</div>
      </div>
    );
  }

  // Group balls by over
  const overGroups = ballsData.reduce((acc, ball) => {
    const overNumber = Math.floor(ball.ballNumber);
    if (!acc[overNumber]) acc[overNumber] = [];
    acc[overNumber].push(ball);
    return acc;
  }, {});

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6 overflow-x-auto">
      <h3 className="font-medium text-gray-700 mb-3">Ball-by-Ball</h3>
      <div className="flex space-x-2">
        {Object.entries(overGroups).map(([overNumber, balls]) => (
          <div key={overNumber} className="flex flex-col items-center min-w-[60px]">
            <div className="bg-gray-200 px-2 py-1 rounded-md text-xs mb-2">Over {overNumber}</div>
            <div className="flex flex-col space-y-2">
              {balls.map((ball, idx) => {
                // Determine class based on ball result
                let bgColor = "bg-gray-100";
                let textColor = "text-gray-800";

                if (ball.runs === 0) bgColor = "bg-gray-200";
                else if (ball.runs === 4) bgColor = "bg-green-100";
                else if (ball.runs === 6) bgColor = "bg-blue-100";
                else if (ball.isWicket) {
                  bgColor = "bg-red-100";
                  textColor = "text-red-800";
                } else if (ball.isExtra) bgColor = "bg-yellow-100";

                return (
                  <div
                    key={idx}
                    className={`w-10 h-10 ${bgColor} ${textColor} rounded-full flex items-center justify-center font-medium`}
                  >
                    {ball.isWicket ? "W" : ball.runs}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Scorecard tab content
const ScorecardTab = ({ matchData }) => {
  const [activeInning, setActiveInning] = useState(0);

  if (!matchData) return <div className="text-center py-8">Loading scorecard...</div>;

  // Sample batsmen and bowler data (in a real app, this would come from the API)
  const innings = matchData.innings || [];

  // This is mock data for demonstration - would be fetched from API in real implementation
  const mockBattingStats = [
    { playerName: "Virat Kohli", runs: 82, balls: 53, fours: 7, sixes: 4, strikeRate: 154.72 },
    { playerName: "Rohit Sharma", runs: 45, balls: 36, fours: 5, sixes: 2, strikeRate: 125.0 },
    { playerName: "KL Rahul", runs: 28, balls: 21, fours: 3, sixes: 1, strikeRate: 133.33 },
    { playerName: "Rishabh Pant", runs: 34, balls: 18, fours: 3, sixes: 2, strikeRate: 188.89 },
    { playerName: "Hardik Pandya", runs: 16, balls: 8, fours: 1, sixes: 1, strikeRate: 200.0 },
  ];

  const mockBowlingStats = [
    { playerName: "Jasprit Bumrah", overs: "4.0", maidens: 0, runs: 28, wickets: 2, economy: 7.0 },
    { playerName: "Mohammed Shami", overs: "4.0", maidens: 0, runs: 36, wickets: 1, economy: 9.0 },
    { playerName: "Ravindra Jadeja", overs: "4.0", maidens: 0, runs: 32, wickets: 1, economy: 8.0 },
    {
      playerName: "Yuzvendra Chahal",
      overs: "4.0",
      maidens: 0,
      runs: 42,
      wickets: 2,
      economy: 10.5,
    },
  ];

  return (
    <div className="bg-white shadow-sm rounded-b-lg">
      {/* Innings selector */}
      <div className="flex border-b border-gray-200">
        {innings.map((inning, idx) => (
          <button
            key={idx}
            onClick={() => setActiveInning(idx)}
            className={`py-3 px-4 text-sm font-medium ${
              activeInning === idx
                ? "bg-gray-100 text-gray-900"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`}
          >
            {inning.teamName} Innings
          </button>
        ))}
      </div>

      {/* Batting stats table */}
      <div className="p-4">
        <h4 className="font-medium text-gray-900 mb-3">Batting</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Batsman
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  R
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  B
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  4s
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  6s
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  SR
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockBattingStats.map((player, idx) => (
                <tr key={idx}>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{player.playerName}</div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                    {player.runs}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                    {player.balls}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                    {player.fours}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                    {player.sixes}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                    {player.strikeRate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bowling stats table */}
        <h4 className="font-medium text-gray-900 mt-6 mb-3">Bowling</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Bowler
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  O
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  M
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  R
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  W
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Econ
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockBowlingStats.map((player, idx) => (
                <tr key={idx}>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{player.playerName}</div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                    {player.overs}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                    {player.maidens}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                    {player.runs}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                    {player.wickets}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                    {player.economy}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Commentary tab content
const CommentaryTab = ({ matchData }) => {
  // Mock commentary data
  const mockCommentary = [
    {
      over: "19.6",
      commentary: "SIX! Dhoni finishes off in style! A magnificent strike over long-on.",
      time: "10 min ago",
    },
    {
      over: "19.5",
      commentary: "FOUR! Slashed hard through point, perfect timing.",
      time: "11 min ago",
    },
    {
      over: "19.4",
      commentary: "Full toss, driven to long-off for a single.",
      time: "12 min ago",
    },
    {
      over: "19.3",
      commentary: "Yorker on the leg stump, dug out for no run.",
      time: "13 min ago",
    },
    {
      over: "19.2",
      commentary: "WIDE! Bowled down the leg side.",
      time: "14 min ago",
    },
    {
      over: "19.1",
      commentary: "Good length delivery, pushed to cover for a quick single.",
      time: "15 min ago",
    },
    {
      over: "18.6",
      commentary: "Full and straight, driven down the ground for two runs.",
      time: "16 min ago",
    },
    {
      over: "18.5",
      commentary: "WICKET! Caught at deep midwicket, excellent catch diving forward.",
      time: "17 min ago",
    },
    {
      over: "18.4",
      commentary: "Short ball, pulled to deep square leg for a single.",
      time: "18 min ago",
    },
    {
      over: "18.3",
      commentary: "Slower ball, well disguised, just a single to point.",
      time: "19 min ago",
    },
  ];

  return (
    <div className="bg-white shadow-sm rounded-b-lg p-4">
      <div className="space-y-4">
        {mockCommentary.map((item, idx) => (
          <div key={idx} className="border-b border-gray-100 pb-4 last:border-0">
            <div className="flex justify-between items-center mb-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                {item.over}
              </span>
              <span className="text-xs text-gray-500">{item.time}</span>
            </div>
            <p className="text-gray-800">{item.commentary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Fantasy Points tab content
const FantasyPointsTab = ({ matchData }) => {
  // Mock fantasy points data
  const mockFantasyPoints = [
    {
      playerName: "Virat Kohli",
      team: "RCB",
      points: 147,
      battingPoints: 82,
      bowlingPoints: 0,
      fieldingPoints: 30,
      bonusPoints: 35,
    },
    {
      playerName: "Jasprit Bumrah",
      team: "MI",
      points: 129,
      battingPoints: 0,
      bowlingPoints: 109,
      fieldingPoints: 10,
      bonusPoints: 10,
    },
    {
      playerName: "Rohit Sharma",
      team: "MI",
      points: 87,
      battingPoints: 62,
      bowlingPoints: 0,
      fieldingPoints: 15,
      bonusPoints: 10,
    },
    {
      playerName: "KL Rahul",
      team: "PBKS",
      points: 73,
      battingPoints: 58,
      bowlingPoints: 0,
      fieldingPoints: 5,
      bonusPoints: 10,
    },
    {
      playerName: "Ravindra Jadeja",
      team: "CSK",
      points: 102,
      battingPoints: 22,
      bowlingPoints: 45,
      fieldingPoints: 25,
      bonusPoints: 10,
    },
    {
      playerName: "Andre Russell",
      team: "KKR",
      points: 118,
      battingPoints: 48,
      bowlingPoints: 65,
      fieldingPoints: 5,
      bonusPoints: 0,
    },
    {
      playerName: "MS Dhoni",
      team: "CSK",
      points: 93,
      battingPoints: 48,
      bowlingPoints: 0,
      fieldingPoints: 35,
      bonusPoints: 10,
    },
    {
      playerName: "Rashid Khan",
      team: "GT",
      points: 105,
      battingPoints: 15,
      bowlingPoints: 80,
      fieldingPoints: 10,
      bonusPoints: 0,
    },
  ];

  return (
    <div className="bg-white shadow-sm rounded-b-lg p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Player
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Team
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Pts
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Batting
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Bowling
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fielding
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Bonus
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockFantasyPoints.map((player, idx) => (
              <tr key={idx}>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="font-medium text-gray-900">{player.playerName}</div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{player.team}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-right font-bold text-gray-900">
                  {player.points}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-right text-gray-900">
                  {player.battingPoints}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-right text-gray-900">
                  {player.bowlingPoints}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-right text-gray-900">
                  {player.fieldingPoints}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-right text-gray-900">
                  {player.bonusPoints}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Main match details page component
export default function MatchDetails() {
  const { matchId } = useParams();
  const { accessToken } = useAuth();
  const [matchData, setMatchData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("scorecard");

  // Mock ball-by-ball data
  const mockBallsData = [
    { ballNumber: 19.5, runs: 6, isWicket: false, isExtra: false },
    { ballNumber: 19.4, runs: 4, isWicket: false, isExtra: false },
    { ballNumber: 19.3, runs: 1, isWicket: false, isExtra: false },
    { ballNumber: 19.2, runs: 0, isWicket: false, isExtra: false },
    { ballNumber: 19.1, runs: 2, isWicket: false, isExtra: false },
    { ballNumber: 18.6, runs: 1, isWicket: false, isExtra: false },
    { ballNumber: 18.5, runs: 0, isWicket: true, isExtra: false },
    { ballNumber: 18.4, runs: 1, isWicket: false, isExtra: false },
    { ballNumber: 18.3, runs: 1, isWicket: false, isExtra: false },
    { ballNumber: 18.2, runs: 1, isWicket: false, isExtra: true },
    { ballNumber: 18.1, runs: 4, isWicket: false, isExtra: false },
    { ballNumber: 17.6, runs: 6, isWicket: false, isExtra: false },
    { ballNumber: 17.5, runs: 0, isWicket: false, isExtra: false },
    { ballNumber: 17.4, runs: 0, isWicket: false, isExtra: false },
    { ballNumber: 17.3, runs: 1, isWicket: false, isExtra: false },
    { ballNumber: 17.2, runs: 2, isWicket: false, isExtra: false },
    { ballNumber: 17.1, runs: 4, isWicket: false, isExtra: false },
  ];

  useEffect(() => {
    const fetchMatchDetails = async () => {
      if (!accessToken || !matchId) return;

      try {
        setLoading(true);
        // API call to fetch match details
        const matchRes = await axios.get(`${conf.backendUrl}/matches/${matchId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        // Get team details
        const team1Res = await axios.get(
          `${conf.backendUrl}/squad/squadId/${matchRes.data.matchRes.team1Id}`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );

        const team2Res = await axios.get(
          `${conf.backendUrl}/squad/squadId/${matchRes.data.matchRes.team2Id}`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );

        // Combine data
        const matchDetails = {
          ...matchRes.data.matchRes,
          team1ImgSrc: team1Res.data.squadRes.logo,
          team2ImgSrc: team2Res.data.squadRes.logo,
          team1FullName: getTeamFullName(team1Res.data.squadRes.name),
          team2FullName: getTeamFullName(team2Res.data.squadRes.name),
          team1Name: team1Res.data.squadRes.name,
          team2Name: team2Res.data.squadRes.name,
          date: new Date(matchRes.data.matchRes.date),
        };

        setMatchData(matchDetails);
      } catch (error) {
        console.error("Error fetching match details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatchDetails();
  }, [matchId, accessToken]);

  function getTeamFullName(abbreviation) {
    const abbr = abbreviation?.toUpperCase();

    const teamMap = {
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
        <div className="mb-8">
          <MatchScoreCard matchData={matchData} />
        </div>

        <BallByBallTracker ballsData={mockBallsData} />

        <div className="bg-white rounded-lg shadow mb-8">
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

          {activeTab === "scorecard" && <ScorecardTab matchData={matchData} />}
          {activeTab === "commentary" && <CommentaryTab matchData={matchData} />}
          {activeTab === "fantasyPoints" && <FantasyPointsTab matchData={matchData} />}
        </div>
      </div>
    </PageLayout>
  );
}
