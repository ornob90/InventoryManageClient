import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/html/Button";
import { useContext, useEffect, useState } from "react";
import useAuth from "../../hooks/auth/useAuth";
import AuthContext from "../../contexts/AuthContext";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import toast from "react-hot-toast";

// import useGet from "../../hooks/useGet";
// import useAdmin from "../../hooks/useAdmin";
// import logo from "../../assets/logo/logo.png";
// import useTheme from "../../Hooks/useTheme";

const Navbar = () => {
  const { pathname } = useLocation();

  const [render, setRender] = useState("");

  // const { loading } = useAuth();

  // useEffect(() => {
  //   setRender(loading);
  // }, [loading]);

  const loading = false;
  const user = false;

  const [theme, setTheme] = useState("light");
  const html = document.documentElement;

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";

    if (theme) {
      setTheme(theme);
      html.classList.add(theme);
    }
  }, []);

  const updateBook = pathname.split("/")[1];

  // console.log(pathname.split("/")[1], updateBook);

  const [hidden, setHidden] = useState(false);

  const navigate = useNavigate();
  // const { user, signOutMethod } = useAuth();
  // console.log(user?.photoURL);

  //   const { validAdmin } = useAdmin();
  const isDark = false;
  //   const { data: adminData, isLoading } = useGet(["AdminInfoNav"], "/admin");

  const navLinks = (
    <>
      <li>
        <NavLink
          onClick={() => setHidden(!hidden)}
          to="/"
          className={({ isActive }) =>
            isActive
              ? "dark:text-dark-mode dark:bg-dark-text font-medium bg-primary text-white py-2 px-4 rounded-sm"
              : "font-medium dark:text-dark-text"
          }
        >
          <span
            className={`${
              pathname === "/login" || pathname === "/signup"
                ? "text-black dark:text-dark-text"
                : ""
            }`}
          >
            H
          </span>
          ome
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => setHidden(!hidden)}
          to="/create-shop"
          className={({ isActive }) =>
            isActive
              ? "dark:text-dark-mode dark:bg-dark-text font-medium bg-primary text-white py-2 px-3 rounded-sm"
              : "font-medium dark:text-dark-text"
          }
        >
          Create Shop
        </NavLink>
      </li>

      <li>
        <NavLink
          onClick={() => setHidden(!hidden)}
          to="/all-books"
          className={({ isActive }) =>
            isActive
              ? "dark:text-dark-mode dark:bg-dark-text font-medium bg-primary text-white py-2 px-3 rounded-sm"
              : "font-medium dark:text-dark-text"
          }
        >
          All Books
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => setHidden(!hidden)}
          to="/borrowed"
          className={({ isActive }) =>
            isActive
              ? "dark:text-dark-mode dark:bg-dark-text font-medium bg-primary text-white py-2 px-3 rounded-sm"
              : "font-medium dark:text-dark-text"
          }
        >
          Borrowed
        </NavLink>
      </li>
    </>
  );

  // console.log(user);

  const handleTheme = () => {
    // console.log("clicked");

    if (theme === "light") {
      html.classList.remove("light");
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  const handleSignOut = () => {
    signOutMethod()
      .then(() => {
        // console.log("Signed Out");

        toast.success("You have been logged out!!");
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <nav
      className={`${
        pathname === "/add-book" ||
        pathname === "/login" ||
        pathname === "/signup"
          ? "absolute"
          : updateBook === "update-book"
          ? "absolute"
          : "fixed"
      } top-0 left-0 drop-shadow-[0_0px_5px_rgba(0,0,0,0.12)]   w-full dark:bg-dark-mode dark:text-dark-text ${
        pathname === "/login" || pathname === "/signup"
          ? "bg-transparent text-white"
          : "bg-gray-100  text-black"
      }  ${loading ? "" : "z-10"}`}
    >
      <div
        className={`z-[100] navbar w-[95%] mx-auto max-w-[1440px] flex justify-between items-center  py-4 `}
      >
        <div className="">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => setHidden(false)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content  mt-3 p-2 shadow rounded-box w-52 z-[10] bg-black text-white hove:bg-none ${
                hidden ? "hidden" : "block"
              } z-10`}
            >
              <li className="flex flex-row items-center justify-center mb-4">
                <div className="rounded-full md:hidden">
                  <img
                    // src={user && user.photoURL}
                    alt=""
                    className=" rounded-full object-cover h-[35px] w-[35px]"
                  />
                </div>

                <div className="flex w-[50%] items-center  h-full flex-row justify-between">
                  <p className="md:hidden w-max">
                    {/* {user && user.displayName } */}
                  </p>
                  <div className="w-[30px] md:w-[50px] flex justify-end">
                    {theme === "dark" ? (
                      <BsFillSunFill
                        className="text-xl text-white"
                        // onClick={handleTheme}
                      />
                    ) : (
                      <BsFillMoonStarsFill
                        className="text-lg"
                        // onClick={handleTheme}
                      />
                    )}
                  </div>
                </div>
              </li>
              {navLinks}
            </ul>
          </div>

          <NavLink
            to="/"
            className="flex items-center gap-2 font-bold normal-case text-md sm:text-lg md:text-2xl w-max"
          >
            <div className=" w-[25px] h-[25px] md:w-[45px] md:h-[45px] ">
              <img
                // src={logo}
                alt=""
                className="object-contain h-full rounded-sm"
              />
            </div>
            <p
              className={`${
                pathname === "/login" || pathname === "/signup"
                  ? "text-black"
                  : ""
              } dark:text-dark-text`}
            >
              InventoHub
            </p>
          </NavLink>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex justify-between gap-4 px-1">{navLinks}</ul>
        </div>
        {user ? (
          <div className="flex items-center justify-end gap-4">
            <p className="hidden md:block dark:text-dark-text">
              {/* {user && user.displayName} */}
            </p>
            <div className="hidden md:block h-[40px] w-[40px] rounded-full border border-black">
              {user && (
                <img
                  // src={user && user.photoURL}
                  alt=""
                  className="object-cover w-full h-full rounded-full"
                />
              )}
            </div>

            <Button
              //   onClick={handleSignOut}
              className="px-2 py-1 text-sm text-white rounded-sm bg-primary md:py-2 md:px-5 md:text-base dark:bg-dark-text dark:text-dark-mode"
            >
              Sign Out
            </Button>
            <div className="w-[20px] md:w-[50px] hidden md:block">
              {theme === "dark" ? (
                <BsFillSunFill
                  className="text-xl text-white sm:text-2xl md:text-3xl"
                  //   onClick={handleTheme}
                />
              ) : (
                <BsFillMoonStarsFill
                  className="text-lg sm:text-xl md:text-2xl"
                  //   onClick={handleTheme}
                />
              )}
            </div>
          </div>
        ) : (
          <div className="flex gap-4">
            <Button
              onClick={() => navigate("/login")}
              className="px-2 py-1 text-sm text-white rounded-sm bg-primary md:py-2 md:px-5 md:text-base dark:bg-dark-text dark:text-dark-mode"
            >
              Login
            </Button>
            <div className="w-[30px] md:w-[50px] hidden md:block">
              {theme === "dark" ? (
                <BsFillSunFill
                  className="text-xl text-white sm:text-2xl md:text-3xl"
                  //   onClick={handleTheme}
                />
              ) : (
                <BsFillMoonStarsFill
                  className="text-lg sm:text-xl md:text-2xl"
                  //   onClick={handleTheme}
                />
              )}
            </div>
          </div>
        )}

        {/* <div className="navbar-end">
          <Button
            // onClick={() => navigate("/login")}
            className="text-sm md:text-base py-[5px] px-3 bg-orange-500 text-white rounded-lg"
          >
            Login
          </Button>{" "}
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
