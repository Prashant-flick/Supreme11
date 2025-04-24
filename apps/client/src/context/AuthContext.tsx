import React, { useState, ReactNode, useMemo, useCallback } from "react";
import axios from "axios";
import { conf } from "@/config";
import { AuthContext } from "./UseAuth";

export interface AuthContextType {
  userId: string;
  accessToken: string;
  login: (accessToken: string, userId: string, expiryTime: number) => void;
  logout: () => Promise<void>;
  isLogin: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLogin, setIslogin] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [tokenTimeOut, setTokenTimeOut] = useState<NodeJS.Timeout | null>(null);

  const login = useCallback(
    (accessToken: string, userId: string, expiryTime: number = 30 * 60 * 1000) => {
      setIslogin(true);
      setAccessToken(accessToken);
      setUserId(userId);

      if (tokenTimeOut) clearTimeout(tokenTimeOut);

      const timeout = setTimeout(() => {
        setAccessToken("");
        setIslogin(false);
        setUserId("");
        setTokenTimeOut(null);
      }, expiryTime);

      setTokenTimeOut(timeout);
    },
    [tokenTimeOut]
  );

  const logout = useCallback(async () => {
    try {
      await axios.post(
        `${conf.backendUrl}/signout`,
        {},
        {
          withCredentials: true,
        }
      );

      setIslogin(false);
      setAccessToken("");
      setUserId("");
      if (tokenTimeOut) clearInterval(tokenTimeOut);
    } catch (error) {
      console.error(error);
    }
  }, [tokenTimeOut]);

  const authContextValue = useMemo(() => {
    return { isLogin, accessToken, userId, login, logout };
  }, [isLogin, accessToken, userId, login, logout]);

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};
