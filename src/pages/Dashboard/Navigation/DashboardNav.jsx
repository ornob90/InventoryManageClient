import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";

const DashboardNav = () => {
  const [activeNav, setActiveNav] = useState("/dashboard");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Product Manage",
      slug: "/dashboard",
    },
    {
      name: "Sales Collection",
      slug: "/dashboard/sales-collection",
    },
    {
      name: "Checkout",
      slug: "/dashboard/checkout",
    },
    {
      name: "Subscription",
      slug: "/dashboard/subscription",
    },
    {
      name: "Sales Summary",
      slug: "/dashboard/sales-summary",
    },
  ];

  return (
    <div className="relative">
      <div className="flex items-center justify-between py-2 pl-4 text-2xl font-bold text-white bg-primary">
        <div className="flex items-center gap-2">
          {menuOpen ? (
            <IoCloseOutline onClick={() => setMenuOpen(false)} className="" />
          ) : (
            <MdOutlineMenu onClick={() => setMenuOpen(true)} className="" />
          )}

          <h1>
            <Link to="/">InventorHub</Link>
          </h1>
        </div>
      </div>
      {/* Drawer */}
      <div
        className={`${menuOpen ? "w-full h-screen bg-gray-400" : "w-auto"}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div
          className={` h-[calc(100vh-48px)]  bg-gray-700 w-[60%] sm:w-[40%] md:w-[30%] lg:w-[20%] min-h-[500px] fixed top-[48px]  ${
            menuOpen ? "left-0" : "left-[-100%]"
          } duration-[.3s]`}
        >
          <ul className="flex flex-col gap-4 pt-4 font-semibold text-white text-medium">
            {navItems.map(({ name, slug }) => (
              <NavLink
                onClick={() => {
                  setActiveNav(slug);
                  setMenuOpen(false);
                }}
                to={slug}
                key={name}
                className={
                  activeNav === slug ? "bg-primary pl-4 py-2" : "pl-4 py-2"
                }
              >
                {name}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
