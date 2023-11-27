import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Home/Navbar";
import Footer from "../pages/Home/Footer";

const Root = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    let title = "Home ";
    if (pathname !== "/") {
      title += "| ";
      let newPath = pathname.replace(/\//g, " ").split(" ");

      newPath.forEach((path) => {
        if (path) path = path[0].toUpperCase() + path.slice(1) + " | ";

        title += path;
      });
    }
    document.title = title;
  }, [pathname]);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
