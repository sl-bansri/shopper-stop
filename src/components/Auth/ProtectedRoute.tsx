import { Navigate } from "react-router-dom";
import type { AuthRouteProps } from "./typing";



const AuthRoute= ({ children, authType }:AuthRouteProps) => {
  const isAuthenticated = !!localStorage.getItem("authEmail");

  if (authType === "private" && !isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AuthRoute;
