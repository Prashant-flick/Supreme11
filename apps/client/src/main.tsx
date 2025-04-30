import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import { MatchesProvider } from "./context/MatchesContext.tsx";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <MatchesProvider>
      <App />
    </MatchesProvider>
  </AuthProvider>
);
