import React, { useEffect } from "react";
import DashboardNav from "../pages/Dashboard/Navigation/DashboardNav";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../pages/Home/Footer";
import useUser from "../hooks/others/useUser";

const Dashboard = () => {
  const { role } = useUser();
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (role === "manager") {
  //     navigate("/dashboard/product-manage");
  //   } else {
  //     navigate("/dashboard/admin/sales-summary");
  //   }
  // }, [role]);

  const { pathname } = useLocation();
  useEffect(() => {
    let newPath = pathname.replace(/\//g, " ").split(" ");

    let title = "InventoryHub | ";
    newPath.forEach((path) => {
      if (path) path = path[0].toUpperCase() + path.slice(1) + " | ";

      title += path;
    });
    document.title = title;
  }, [pathname]);

  return (
    <div>
      <DashboardNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Dashboard;
