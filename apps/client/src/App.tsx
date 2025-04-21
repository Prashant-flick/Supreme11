import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import Dashboard from "./routes/Dashboard";
import Tournament from "./routes/Tournament";

function App() {
  return (
    <BrowserRouter>
      <div class="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tournament" element={<Tournament />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
