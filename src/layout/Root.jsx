import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Home/Navbar";
import Footer from "../pages/Home/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const Root = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    let title = "InventoryHub | ";
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
    <div className="overflow-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
