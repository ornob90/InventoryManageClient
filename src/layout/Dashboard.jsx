import React from "react";
import DashboardNav from "../pages/Dashboard/Navigation/DashboardNav";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <DashboardNav />
      <Outlet />
    </div>
  );
};

export default Dashboard;
