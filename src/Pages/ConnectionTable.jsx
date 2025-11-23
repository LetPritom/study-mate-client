import React from "react";
import { NavLink } from "react-router";

const ConnectionTable = ({ res }) => {
  return (
    <div>
      <div className="w-11/12 max-w-7xl mx-auto my-10">
        {/* Mobile e Card View, Desktop e Table View */}
        <div className="block lg:hidden">
          {/* Mobile Card View */}
          <div className="bg-white rounded-2xl shadow-2xl border-2 border-[#f55a00] p-6 space-y-6">
            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="mask mask-squircle w-20 h-20 ring-4 ring-[#f55a00] ring-offset-2">
                  <img
                    src={res.profileimage}
                    alt={res.name}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl text-gray-800">{res.name}</h3>
                <p className="text-sm text-gray-600">{res.location}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-semibold text-gray-700">Subject:</span>
                <span className="ml-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 font-bold rounded-full">
                  {res.subject}
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Status:</span>
                <span
                  className={`ml-2 px-4 py-2 rounded-full font-bold flex items-center gap-2 w-fit ${
                    res.studyMode === "Online"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  <span
                    className={`w-3 h-3 rounded-full ${
                      res.studyMode === "Online"
                        ? "bg-green-500 animate-pulse"
                        : "bg-red-500"
                    }`}
                  ></span>
                  {res.studyMode}
                </span>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button className="flex-1 btn btn-sm bg-[#f55a00] hover:bg-orange-600 text-white border-none shadow-md">
                Update
              </button>
              <button className="flex-1 btn btn-sm bg-red-500 hover:bg-red-600 text-white border-none shadow-md">
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Table View - Tor Original Design */}
        <div className="hidden lg:block overflow-x-auto rounded-2xl shadow-2xl border-2 border-[#f55a00] bg-white">
          <table className="table table-zebra w-full">
            <thead className="bg-[#f55a00] text-white text-lg">
              <tr>
                <th className="py-5 rounded-tl-2xl">Name</th>
                <th className="py-5">Subject</th>
                <th className="py-5">Study Mood</th>
                <th className="py-5 rounded-tr-2xl text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-orange-50 transition-all duration-300">
                <td className="py-6">
                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="mask mask-squircle w-16 h-16 ring-4 ring-[#f55a00] ring-offset-2">
                        <img
                          src={res.profileimage}
                          alt={res.name}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-xl text-gray-800">
                        {res.name}
                      </div>
                      <div className="text-sm opacity-70 text-gray-600">
                        {res.location}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="px-5 py-2 bg-linear-to-r from-purple-100 to-pink-100 text-purple-800 font-bold rounded-full text-sm shadow-sm">
                    {res.subject}
                  </span>
                </td>
                <td>
                  <span
                    className={`px-5 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-sm ${
                      res.studyMode === "Online"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    <span
                      className={`w-3 h-3 rounded-full ${
                        res.studyMode === "Online"
                          ? "bg-green-500 animate-pulse"
                          : "bg-red-500"
                      }`}
                    ></span>
                    {res.studyMode}
                  </span>
                </td>
                <td className="text-center space-x-3">
                  <NavLink to={`/update/${res._id}`}>
                    <button className="btn btn-sm bg-[#f55a00] hover:bg-orange-600 text-white border-none shadow-md hover:shadow-xl transform hover:scale-105 transition-all">
                      Update
                    </button>
                  </NavLink>

                  <NavLink to={``}>
                    <button className="btn btn-sm bg-red-500 hover:bg-red-600 text-white border-none shadow-md hover:shadow-xl transform hover:scale-105 transition-all">
                      Delete
                    </button>
                  </NavLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ConnectionTable;
