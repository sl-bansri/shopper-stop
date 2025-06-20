import { Navigate } from "react-router-dom";
import type { AuthRouteProps } from "./typing";
import { useAuth } from "../../Context/AuthContext/AuthContext";

const AuthRoute= ({ children, authType }:AuthRouteProps) => {
  const { isLoggedIn } = useAuth();

  if (authType === "private" && !isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AuthRoute;
