"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";
import { usePathname } from "next/navigation";
import axios from "@/lib/axios";

interface User {
  id: string;
  email: string;
  First_name: string;
  Last_name: string;
  [key: string]: unknown;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  fetchUser: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const publicRoutes = ["/login", "/register", "/forgot-password", "/"];

export function AuthProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUser = useCallback(async () => {
    try {
      const res = await axios.get("/auth/me");
      setUser(res.data.user);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  async function logout() {
    try {
      await axios.post("/auth/logout");
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  useEffect(() => {
    const isPublicRoute = publicRoutes.some((route) =>
      pathname.startsWith(route)
    );

    if (!isPublicRoute) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, [pathname, fetchUser]);

  return (
    <AuthContext.Provider value={{ user, loading, setUser, fetchUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
