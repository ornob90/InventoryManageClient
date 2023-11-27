import React from "react";
import useUser from "../hooks/others/useUser";
import useAuth from "../hooks/auth/useAuth";
import Loading from "../pages/Loading/Loading";
import { Navigate } from "react-router-dom";

const ManagerRoute = ({ children }) => {
  const { role, loading: managerLoad } = useUser();

  const { user, loading } = useAuth();

  console.log(loading, managerLoad);
  if (loading || managerLoad) {
    return <Loading />;
  } else if (user && role && role === "manager") {
    return children;
  }
  console.log(role);

  return <Navigate to="/forbidden"></Navigate>;
};

export default ManagerRoute;
