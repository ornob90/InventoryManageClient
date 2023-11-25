import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const DashboardNav = () => {
  const [activeNav, setActiveNav] = useState("/dashboard");

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
        <h1>
          <Link to="/">InventorHub</Link>
        </h1>
      </div>
      {/* Drawer */}
      <div className=" h-[calc(100vh-48px)]  bg-gray-700 w-[20%]">
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
  );
};

export default DashboardNav;
