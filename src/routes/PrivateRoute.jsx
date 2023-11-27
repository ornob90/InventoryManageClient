import React from "react";
import useAuth from "../hooks/auth/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { pathname } = useLocation();

  if (loading) {
    return <Loading />;
  } else if (user) {
    console.log("user");
    return children;
  }
  return <Navigate state={pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
