import { Navigate } from "react-router-dom";
import type { AuthRouteProps } from "./typing";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import type { FC } from "react";

const AuthRoute:FC<AuthRouteProps> = ({ children, authType }) => {
  const { isLoggedIn } = useAuth();

  if (authType === "private" && !isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AuthRoute;
