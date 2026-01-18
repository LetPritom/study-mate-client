import React, { useContext, useEffect, useState, useRef } from "react";
import logo from "../assets/study.png";
import { NavLink } from "react-router";
import { AuthContext } from "../AuthContex/AuthContext";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { GoHomeFill } from "react-icons/go";
import { FaBookOpenReader, FaUsersViewfinder } from "react-icons/fa6";
import {
  MdOutlineCreateNewFolder,
  MdOutlineLogout,
  MdOutlineSpaceDashboard,
} from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const { user, logoutFunction, loading } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logoutFunction()
      .then(() => {
        return toast.success("Logout");
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const [dark, setDark] = useState("");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setDark(checked);
    setTheme(checked ? "dark" : "light");
  };

  const [show, setShow] = useState(true); // Scroll up/down visibility
  const [top, setTop] = useState(true); // Top position detection
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false); // Scroll down hide
      } else {
        setShow(true); // Scroll up show
      }

      setTop(window.scrollY < 50); // Detect top position
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <div
      className={`w-full fixed top-0 z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={`
          navbar w-9/12 lg:w-10/12 mx-auto py-4 rounded-2xl transition-colors duration-500
          ${top ? "bg-transparent" : "bg-white/2'0 backdrop-blur-2xl shadow-lg"}
        `}
      >
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className=" mx-2 p-2 btn lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavLink to="/">
                <li className="hover:text-[#f55a00] cursor-pointer">Home</li>
              </NavLink>
              <NavLink to="/find-partner">
                <li className="hover:text-[#f55a00] cursor-pointer">
                  Find Partner
                </li>
              </NavLink>

              {user && (
                <NavLink to="/create-partner">
                  <li className="hover:text-[#f55a00] cursor-pointer">
                    Create Partner Profile
                  </li>
                </NavLink>
              )}

              {user && (
                <NavLink to="my-connection">
                  <li className="hover:text-[#f55a00] cursor-pointer">
                    My Connections
                  </li>
                </NavLink>
              )}

              <NavLink to="/about">
                <li className="hover:text-[#f55a00] cursor-pointer">
                  About
                </li>
              </NavLink>
            </ul>
          </div>
          <div className="logo flex gap-2 items-center ">
            <img className="h-10 w-10 cursor-pointer" src={logo} alt="" />
            <a className="text-2xl text-[#f55a00] font-bold hidden md:block">
              <span className="text-[#2563EB]">Study</span>Mate
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul
            className={`menu menu-horizontal px-1 flex gap-5 font-semibold transition-all duration-300 text-[#2563EB] ${
              dark ? "text-white" : "text-[#2563EB]"
            }`}
          >
            <NavLink to="/">
              <div className="flex items-center gap-1 icon">
                <GoHomeFill className="text-md" />
                <li className="hover:text-[#f55a00] cursor-pointer flex gap-1 items-center">
                  Home
                </li>
              </div>
            </NavLink>
            <NavLink to="/find-partner">
              <div className="flex items-center gap-1 icon">
                <FaUsersViewfinder className="text-md" />
                <li className="hover:text-[#f55a00] cursor-pointer">
                  Find Partner
                </li>
              </div>
            </NavLink>

            {user && (
              <NavLink to="/create-partner">
                <div className="flex items-center gap-1 icon">
                  <MdOutlineCreateNewFolder className="text-md" />
                  <li className="hover:text-[#f55a00] cursor-pointer">
                    Create Partner Profile
                  </li>
                </div>
              </NavLink>
            )}

            {user && (
              <NavLink to="my-connection">
                <div className="flex items-center gap-1 icon">
                  <FaBookOpenReader className="text-md" />

                  <li className="hover:text-[#f55a00] cursor-pointer ">
                    My Connections
                  </li>
                </div>
              </NavLink>
            )}

            <NavLink to="/about">
                <li className="hover:text-[#f55a00] cursor-pointer">
                  About
                </li>
              </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          {/* <a
            className="border border-[#f55a00] bg-transparent text-[#2563EB]  
                         px-3 py-1.5 rounded-lg cursor-pointer font-semibold
                       hover:bg-white hover:text-[#f55a00] hover:border-[#2563EB]
                        transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
          >
            Log in
          </a> */}

          {/* theme toggle button */}

          <div className="theme flex gap-1 items-center mx-2  px-2 py-2 border border-[#f55a00] text-[#f55a00]  rounded-full">
            <p className="text-sm font-semibold sm:text-es">
              {dark ? "Dark" : "Light"}
            </p>
            <input
              onChange={(e) => handleTheme(e.target.checked)}
              type="checkbox"
              className="toggle"
            />
          </div>

          {user ? (
            <div
              className="relative z-50 hover:bg-[#f55a00]/20 p-1 rounded-full transition duration-400 "
              ref={dropdownRef}
            >
              {/* Avatar */}
              <button
                onClick={() => setOpen(!open)}
                className="focus:outline-none flex items-center  gap-2 p-1 cursor-pointer"
              >
                {!loading && user && (
                  <img
                    src={user?.photoURL}
                    alt="user"
                    className="h-8 w-8 rounded-full ring-2 ring-[#f55a00] 
                              hover:ring-purple-400 transition"
                  />
                )}

                {open ? (
                  <RiArrowDropDownLine className="text-2xl cursor-pointer -scale-100 transition duration-250" />
                ) : (
                  <RiArrowDropDownLine className="text-2xl cursor-pointer transition duration-250" />
                )}
              </button>

              {/* Dropdown */}
              <div
                className={`absolute right-0 mt-3 w-56 rounded-xl
                  bg-linear-to-b from-blue-900/40 to-blue-900/40
                text-white shadow-xl border border-[#f55a00]/40
                  transform transition-all duration-200 ease-out
                  ${
                    open
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-0 pointer-events-none"
                  }`}
              >
                {/* User info */}
                <div className="px-4 py-3 border-b border-[#f55a00]/40">
                  <p
                    className="text-sm font-semibold truncate"
                    title={user?.displayName}
                  >
                    {user.displayName}
                  </p>
                </div>

                {/* Menu */}
                <div className="flex flex-col px-2 py-2">
                  <NavLink
                    to="/dashboard"
                    className="px-3 py-2 rounded-lg text-sm font-medium cursor-pointer text-[#f55a00]
                    hover:bg-[#f55a00]/30 transition flex items-center gap-2"
                    onClick={() => setOpen(false)}
                  >
                    <MdOutlineSpaceDashboard />
                    Dashboard
                  </NavLink>
                  <button
                    onClick={handleLogOut}
                    className="px-3 py-2 rounded-lg text-sm font-medium text-red-500 hover:text-white
                    hover:bg-[#f55a00]/30 transition flex items-center gap-2 cursor-pointer"
                  >
                    <MdOutlineLogout />
                    Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <NavLink to="/login">
              <button
                className="
                    relative px-5 py-2 rounded-xl font-semibold text-md
                    text-[#f55a00]
                    bg-transparent
                    border border-[#f55a00]
                    cursor-pointer
"
              >
                Login
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
