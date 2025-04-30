import { conf } from "@/config";
import { MatchesContext } from "@/hooks/UseMatches";
import { matchInterface } from "@repo/common/types";
import axios from "axios";
import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useAuth } from "@/hooks/UseAuth";

export interface matchCompleteInterface extends matchInterface {
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

export interface MatchesContextType {
  liveMatches: matchCompleteInterface[] | [];
  completedMatches: matchCompleteInterface[] | [];
  upcomingMatches: matchCompleteInterface[] | [];
}

interface MatchProviderProps {
  children: React.ReactNode;
}

export const MatchesProvider: FC<MatchProviderProps> = ({ children }) => {
  const [liveMatches, setLiveMatches] = useState<matchCompleteInterface[] | []>([]);
  const [completedMatches, setCompletedMatches] = useState<matchCompleteInterface[] | []>([]);
  const [upcomingMatches, setUpcomingMatches] = useState<matchCompleteInterface[] | []>([]);
  const { accessToken } = useAuth();

  const prevLiveMatchesCountRef = useRef<number>(0);

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

  // Todo - only fetch liveMatches regularly only if there is one
  const getLiveMatches = useCallback(async () => {
    try {
      const matchesRes = await axios.get(`${conf.backendUrl}/matches/live`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const live: matchCompleteInterface[] = [];

      for (const match of matchesRes.data.liveMatches) {
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

        live.push(match);
      }

      live.sort((a: matchCompleteInterface, b: matchCompleteInterface) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });

      const currentLen = live.length;
      const prevLen = prevLiveMatchesCountRef.current;
      const lengthChanged = currentLen !== prevLen;

      setLiveMatches(live);

      prevLiveMatchesCountRef.current = live.length;

      return lengthChanged;
    } catch (error) {
      console.error(error);
      return false;
    }
  }, [accessToken]);

  const getCompletedMatches = useCallback(async () => {
    try {
      const matchesRes = await axios.get(`${conf.backendUrl}/matches/completed`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const completed: matchCompleteInterface[] = [];

      for (const match of matchesRes.data.completedMatches) {
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

      completed.sort((a: matchCompleteInterface, b: matchCompleteInterface) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });

      setCompletedMatches(completed);
    } catch (error) {
      console.error(error);
    }
  }, [accessToken]);

  const getUpcomingMatches = useCallback(async () => {
    try {
      const matchesRes = await axios.get(`${conf.backendUrl}/matches/upcoming`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const upcoming: matchCompleteInterface[] = [];

      for (const match of matchesRes.data.upcomingMatches) {
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

        upcoming.push(match);
      }

      upcoming.sort((a: matchCompleteInterface, b: matchCompleteInterface) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });

      setUpcomingMatches(upcoming);
    } catch (error) {
      console.error(error);
    }
  }, [accessToken]);

  useEffect(() => {
    if (accessToken) {
      const initLoad = async () => {
        await getLiveMatches();
        await getCompletedMatches();
        await getUpcomingMatches();
      };

      initLoad();

      const interval = setInterval(async () => {
        const lenChanged = await getLiveMatches();

        if (lenChanged) {
          getCompletedMatches();
          getUpcomingMatches();
        }
      }, 30 * 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [accessToken, getCompletedMatches, getLiveMatches, getUpcomingMatches]);

  const matchesContextValue = useMemo(() => {
    return { liveMatches, upcomingMatches, completedMatches };
  }, [liveMatches, upcomingMatches, completedMatches]);

  return <MatchesContext.Provider value={matchesContextValue}>{children}</MatchesContext.Provider>;
};
