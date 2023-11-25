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
    <div>
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
      <div className="w-full bg-gray-400">
        <div className=" h-[calc(100vh-48px)]  bg-gray-700 w-[20%] min-h-[500px]">
          <ul className="flex flex-col gap-4 pt-4 font-semibold text-white text-medium">
            {navItems.map(({ name, slug }) => (
              <NavLink
                onClick={() => setActiveNav(slug)}
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
