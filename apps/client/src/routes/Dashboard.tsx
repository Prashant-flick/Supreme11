import { PageLayout } from "@/components/layout/page-layout";
import { LiveMatchCard } from "@/components/dashboard/live-match-card";
import { TournamentsSection } from "@/components/dashboard/tournaments-section";
import { UpcomingMatchesSection } from "@/components/dashboard/upcoming-matches-section";
import { useEffect, useState } from "react";
import axios from "axios";
import { conf } from "../config/index";
import { tournamentInerface } from "@repo/common/types";
import { useAuth } from "@/context/UseAuth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { accessToken, isLogin } = useAuth();
  const [tournament, setTournament] = useState<tournamentInerface[] | []>([]);
  const navigate = useNavigate();

  const getTournaments = async () => {
    try {
      const tournametRes = await axios.get(`${conf.backendUrl}/tournament/myTournament`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setTournament(tournametRes.data.tournamentRes);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    console.log(accessToken, isLogin);
    if (accessToken) {
      getTournaments();
    }
    // else {
    //   navigate("/auth");
    // }
  }, [accessToken]);

  const navItems = [
    { href: "/dashboard", label: "Dashboard", isActive: true },
    { href: "/teams", label: "My Teams" },
    { href: "/matches", label: "Matches" },
    { href: "/rewards", label: "Rewards" },
  ];

  const tournaments = [
    {
      id: "1",
      name: "IPL Fantasy League",
      teamsCount: 12,
      timeRemaining: "Ends in 18 days",
      status: "active" as const,
      position: 2,
    },
    {
      id: "2",
      name: "Friends Cup 2025",
      teamsCount: 8,
      timeRemaining: "Starts in 2 days",
      status: "upcoming" as const,
    },
    {
      id: "3",
      name: "Cricket World Cup",
      teamsCount: 24,
      timeRemaining: "Ends in 45 days",
      status: "active" as const,
      position: 8,
    },
  ];

  const liveMatch = {
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
  };

  const upcomingMatches = [
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
      dateTime: "Apr 22, 2:00 PM",
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
        <h1 className="text-2xl font-bold mb-6 text-gray-900">Welcome back, John!</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Your Tournaments */}
          <TournamentsSection tournaments={tournaments} />

          {/* Right Column - Live Score & Upcoming Matches */}
          <div className="space-y-8">
            <LiveMatchCard
              homeTeam={liveMatch.homeTeam}
              awayTeam={liveMatch.awayTeam}
              matchType={liveMatch.matchType}
              currentOver={liveMatch.currentOver}
              target={liveMatch.target}
              statusText={liveMatch.statusText}
            />

            <UpcomingMatchesSection matches={upcomingMatches} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
