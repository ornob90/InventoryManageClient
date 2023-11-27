import React from "react";
import useUser from "../hooks/others/useUser";
import Loading from "../pages/Loading/Loading";
import useAuth from "../hooks/auth/useAuth";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { role, loading } = useUser();
  const { loading: fireBaseLoad } = useAuth();

  if (fireBaseLoad || loading) {
    return <Loading />;
  }

  if (role === "admin") return children;

  <Navigate to="/"></Navigate>;
};

export default AdminRoute;
