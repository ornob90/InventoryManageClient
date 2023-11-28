import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import useUser from "../../../hooks/others/useUser";

const DashboardNav = () => {
  const [activeNav, setActiveNav] = useState("/dashboard");
  const [menuOpen, setMenuOpen] = useState(false);

  const { role } = useUser();

  const navItems = [
    {
      name: "Product Manage",
      slug: "/dashboard/product-manage",
      show: role === "manager",
    },
    {
      name: "Sales Collection",
      slug: "/dashboard/sales-collection",
      show: role === "manager",
    },
    {
      name: "Checkout",
      slug: "/dashboard/checkout",
      show: role === "manager",
    },
    {
      name: "Subscription",
      slug: "/dashboard/subscription",
      show: role === "manager",
    },
    {
      name: "Sales Summary",
      slug: "/dashboard/sales-summary",
      show: role === "manager",
    },
    {
      name: "Share Shop",
      slug: "/dashboard/share-shop",
      show: role === "manager",
    },
    {
      name: "Manage Shop",
      slug: "/dashboard/admin/manage-shop",
      show: role === "admin",
    },
    {
      name: "Sales Summary",
      slug: "/dashboard/admin/sales-summary",
      show: role === "admin",
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
            {navItems.map(({ name, slug, show }) => (
              <>
                {show && (
                  <NavLink
                    onClick={() => {
                      setActiveNav(slug);
                      setMenuOpen(false);
                    }}
                    to={slug}
                    key={slug}
                    className={
                      activeNav === slug ? "bg-primary pl-4 py-2" : "pl-4 py-2"
                    }
                  >
                    {name}
                  </NavLink>
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
