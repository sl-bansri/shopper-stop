import { createContext, useContext, useState } from "react";
import type { AuthContextProps } from "./typing";

const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const initialLoginState = !!localStorage.getItem("authEmail");
  const [isLoggedIn, setIsLoggedIn] = useState(initialLoginState);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
