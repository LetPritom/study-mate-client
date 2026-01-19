import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router';
import Menu from '../Pages/Menu/Menu';
import { GoHomeFill } from "react-icons/go";
import { MdPerson } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import UserSidebar from '../Pages/UserSidebar/UserSidebar';
import { AuthContext } from '../AuthContex/AuthContext';
import { toast } from 'react-toastify';

const Sidebar = () => {

    const {logoutFunction} = useContext(AuthContext)
      const handleLogOut = () => {
        logoutFunction()
          .then(() => {
            return toast.success("Logout");
          })
          .catch((err) => {
            toast.error(err);
          });
      };
    return (
         <div className="min-h-screen overflow-x-hidden">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        {/* ================= MAIN CONTENT ================= */}
        <div className="drawer-content flex flex-col">
          {/* ===== NAVBAR ===== */}
          <nav
            className="navbar w-full
              lg:sticky lg:top-0 z-50 "
          >
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="size-5"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>

            <h1
              className="px-4 text-xl md:text-2xl font-bold text-gray-800"
            >
             Dashboard
            </h1>
          </nav>

          {/* ===== PAGE CONTENT ===== */}
          <div className="flex-1 p-4 md:p-8">
            <Outlet />
          </div>
        </div>

        {/* ================= SIDEBAR ================= */}
        <div className="mt-15 sm:mt-0 drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <div
            className="flex min-h-full flex-col items-start py-5
           
            backdrop-blur-2xl border-r border-purple-400/20
            is-drawer-close:w-16 is-drawer-open:w-56 transition-all duration-300"
          >
            {/* ===== SIDEBAR MENU ===== */}
            <ul className="menu w-full grow flex flex-col gap-2 p-4 text-white">
              {/* existing role-based sidebars (UNCHANGED) */}
              {/* home link */}
              <NavLink to="/">
                {" "}
                <Menu title={"Home"} icon={<GoHomeFill />}>
                  Home
                </Menu>
              </NavLink>

             <UserSidebar />



              <NavLink to="/dashboard/profile">
                <Menu title={"My-profile"} icon={<MdPerson />}>
                  My profile
                </Menu>
              </NavLink>

              <hr className="border-purple-400/20 my-3" />

              {/* ===== LOGOUT ===== */}
              <li>


                <button
                  onClick={handleLogOut}
                  className="
                  flex items-center gap-3 px-3 py-2 rounded-xl transition-all
                  hover:bg-red-500/20
                  is-drawer-close:tooltip is-drawer-close:tooltip-right
              "
                  data-tip="Logout"
                >
                  <IoIosLogOut className="text-xl text-red-400" />
                  <span className="is-drawer-close:hidden text-red-400 font-semibold">
                    Logout
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Sidebar;