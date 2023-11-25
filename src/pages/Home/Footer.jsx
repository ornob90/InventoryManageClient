import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  const isDark = false; // Assuming this variable is used for dark mode

  return (
    <div className="dark:bg-dark-mode">
      <footer
        className={`footer pt-24 p-10 text-base-content w-full max-w-[1440px] mx-auto ${
          pathname === "/login" || pathname === "/signup" ? "hidden" : ""
        } dark:text-dark-text`}
      >
        <aside className="">
          <NavLink className="text-lg md:text-2xl">InventoHub</NavLink>
          <p>
            123 Main Street,
            <br />
            Cityville, State, 12345
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Product Management</a>
          <a className="link link-hover">Discount and Coupon Management</a>
          <a className="link link-hover">Sales and Invoice Generation</a>
          <a className="link link-hover">User and Shop Management</a>
        </nav>
        <nav>
          <header className="footer-title">Copyright</header>
          <a href="#" className="link link-hover">
            Facebook
          </a>
          <a href="#" className="link link-hover">
            Youtube
          </a>
          <a href="#" className="link link-hover">
            Twitter
          </a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
