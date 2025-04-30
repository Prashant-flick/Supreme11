import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Dashboard from "./routes/Dashboard";
import Tournament from "./routes/Tournament";
import Matches from "./routes/Matches";
import { useEffect } from "react";
import { useAuth } from "./hooks/UseAuth";
import axios from "axios";
import { conf } from "./config";
import Auth from "./routes/Auth";
import LiveMatches from "./routes/LiveMatches";
import UpcomingMatches from "./routes/UpcomingMatches";
import CompletedMatches from "./routes/CompletedMatches";
import MatchDetails from "./routes/MatchDetails";

function App() {
  const { isLogin, login } = useAuth();

  const getAccessToken = async () => {
    try {
      const authRes = await axios.post(
        `${conf.backendUrl}/refresh`,
        {},
        {
          withCredentials: true,
        }
      );
      console.log(authRes.data);

      login(authRes.data.accessToken, authRes.data.userId, 30 * 60 * 1000);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!isLogin) {
      getAccessToken();
    }
  }, [isLogin]);

  return (
    <BrowserRouter>
      <div className="w-full px-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tournament" element={<Tournament />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/matches/live" element={<LiveMatches />} />
          <Route path="/matches/upcoming" element={<UpcomingMatches />} />
          <Route path="/matches/completed" element={<CompletedMatches />} />
          <Route path="/matches/details/:matchId" element={<MatchDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
