import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/study.png";
import { NavLink } from "react-router";
import { AuthContext } from "../AuthContex/AuthContext";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { GoHomeFill } from "react-icons/go";
import { FaBookOpenReader, FaUsersViewfinder } from "react-icons/fa6";
import { MdOutlineCreateNewFolder } from "react-icons/md";

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
  const [top, setTop] = useState(true);   // Top position detection
  const [lastScrollY, setLastScrollY] = useState(0);

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
    <div className={`w-full fixed top-0 z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}>
      <div  className={`
          navbar w-9/12 lg:w-10/12 mx-auto py-4 rounded-2xl transition-colors duration-500
          ${top ? "bg-transparent" : "bg-white/20 backdrop-blur-2xl shadow-lg"}
        `}>
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
            <p className="text-sm font-semibold sm:text-es">{dark ? "Dark" : "Light"}</p>
            <input
              onChange={(e) => handleTheme(e.target.checked)}
              type="checkbox"
              className="toggle"
            />
          </div>

          {loading ? (
            <ClipLoader color="#f55a00" />
          ) : user ? (
            <div className="img">
              <button
                className="cursor-pointer"
                popoverTarget="popover-1"
                style={
                  { anchorName: "--anchor-1" } 
                }
              >
                <img
                  className="h-10 w-10 rounded-full"
                  src={user.photoURL}
                  alt="user-image"
                />
              </button>

              <ul
                className="dropdown menu w-32 flex flex-col justify-center rounded-lg bg-white shadow-sm"
                popover="auto"
                id="popover-1"
                style={
                  { positionAnchor: "--anchor-1" } 
                }
              >
                <div className="down flex flex-col justify-center">
                  <NavLink to="/profile">
                    <p className="text-sm font-semibold my-2">Profile</p>
                  </NavLink>
                </div>

                <div className="button">
                  <button
                    onClick={handleLogOut}
                    className="border border-[#f55a00] bg-transparent text-[#2563EB]  
                         px-3 py-1.5 rounded-lg cursor-pointer font-semibold
                        hover:text-[#f55a00] hover:border-[#2563EB]
                        transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
                  >
                    Log Out
                  </button>
                </div>
              </ul>
            </div>
          ) : (
            <NavLink to="/login">
              <button
                className="border border-[#f55a00] bg-transparent text-[#2563EB]  
                         px-3 py-1.5 rounded-lg cursor-pointer font-semibold
                        hover:text-[#f55a00] hover:border-[#2563EB]
                        transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
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
