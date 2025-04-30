import { createContext, useContext } from "react";
import { MatchesContextType } from "@/context/MatchesContext";

export const MatchesContext = createContext<MatchesContextType | undefined>(undefined);

export const useMatches = () => {
  const context = useContext(MatchesContext);
  if (!context) {
    throw new Error("useMatches must be used within the provider");
  }

  return context;
};
