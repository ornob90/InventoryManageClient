import React, { useEffect } from "react";
import DashboardNav from "../pages/Dashboard/Navigation/DashboardNav";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../pages/Home/Footer";
import useUser from "../hooks/others/useUser";

const Dashboard = () => {
  const { role } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (role === "manager") {
      navigate("/dashboard/product-manage");
    } else {
      navigate("/dashboard/admin/sales-summary");
    }
  }, [role]);

  return (
    <div>
      <DashboardNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Dashboard;
