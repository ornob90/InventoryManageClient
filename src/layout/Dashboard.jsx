import React from "react";
import DashboardNav from "../pages/Dashboard/Navigation/DashboardNav";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Home/Footer";

const Dashboard = () => {
  return (
    <div>
      <DashboardNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Dashboard;
