import React from "react";
import useUser from "../hooks/others/useUser";
import useAuth from "../hooks/auth/useAuth";
import Loading from "../pages/Loading/Loading";
import { Navigate } from "react-router-dom";

const SecureRoute = ({ children }) => {
  const { role, loading: managerLoad } = useUser();

  const { user, loading } = useAuth();

  // console.log(loading, managerLoad);
  if (loading || managerLoad) {
    return <Loading />;
  } else if (user && role && role !== "user") {
    // console.log(role);
    return children;
  }
  //   window.location.href = "/";

  return <Navigate to="/forbidden"></Navigate>;
  //   return <></>;
};

export default SecureRoute;
