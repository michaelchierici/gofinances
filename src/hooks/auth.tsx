import { createContext, ReactNode, useContext } from "react";

interface AuthProps {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface AuthContextData {
  user: User;
}

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProps) {
  const user = {
    id: "1",
    name: "Michael Chierici",
    email: "michael.chierjr@gmail.com",
  };

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthContext, useAuth };
