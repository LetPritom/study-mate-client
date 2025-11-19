import React from "react";
import logo from "../assets/study.png";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="shadow-sm ">
      <div className="navbar w-11/12 lg:w-10/12 mx-auto py-4">
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
              <li className="hover:text-[#2563EB] cursor-pointer">Home</li>
              <li className="hover:text-[#2563EB] cursor-pointer">
                Find Partner
              </li>
              <li className="hover:text-[#2563EB] cursor-pointer">
                Create Partner Profile
              </li>
              <li className="hover:text-[#2563EB] cursor-pointer">
                My Connections
              </li>
            </ul>
          </div>
          <div className="logo flex gap-2 items-center ">
            <img className="h-10 w-10 cursor-pointer" src={logo} alt="" />
            <a className="text-2xl text-[#f55a00] font-bold">
              <span className="text-[#2563EB]">Study</span>Mate
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-5 font-semibold text-[#2563EB] ">
            <NavLink to="/">
              <li className="hover:text-[#f55a00] cursor-pointer">Home</li>
            </NavLink>
            <NavLink to='/find-partner'>
              <li className="hover:text-[#f55a00] cursor-pointer">
                Find Partner
              </li>
            </NavLink>
            <NavLink to='/create-partner'>
              <li className="hover:text-[#f55a00] cursor-pointer">
                Create Partner Profile
              </li>
            </NavLink>
            <NavLink to='my-connection'>
              <li className="hover:text-[#f55a00] cursor-pointer">
                My Connections
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            className="border border-[#f55a00] bg-transparent text-[#2563EB]  
                         px-3 py-1.5 rounded-lg cursor-pointer font-semibold
                       hover:bg-white hover:text-[#f55a00] hover:border-[#2563EB]
                        transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
