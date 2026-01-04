import React from "react";
import rating from "../assets/icon-ratings.png";
import { NavLink } from "react-router";

const PartnerCard = ({ partner }) => {
  const { _id } = partner;
  return (
    <div>
      <div className="group relative bg-gray-400/20 backdrop-blur-xl rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all hover:-translate-y-2 duration-500 border border-white/50 min-w-52 min-h-62">
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 bg-linear-to-br from-[#2564ebb9] via-pink-200 to- opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10 scale-105"></div>

        {/* Profile Image zoom  kora hoiche jokhon over korbo */}
        <div className="relative overflow-hidden">
          <img
            src={partner.profileimage}
            alt={partner.name}
            className="w-full h-52 sm:h-42 object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* demo badge for active status */}

          {/* Online Badge */}
          {/* <div
            className={`absolute top-4 right-4 w-4 h-4 ${
              partner.studyMode === "Online" ? "bg-green-500" : "bg-red-500"
            } rounded-full ring-4 ring-white shadow-lg animate-pulse`}
          ></div> */}


          {/* active bar status online badge */}



          <div className="flex items-center gap-2 absolute top-4 right-4">
              <span
                className={`inline-flex items-center gap-2 px-1 py-1 rounded-full text-xs font-bold shadow-sm transition-all duration-500 ${
                  partner.studyMode === "Online"
                    ? "bg-green-100 text-green-800 ring-1 ring-green-500/30"
                    : "bg-red-100 text-red-800 ring-2 ring-red-500/30"
                }`}
              >
                {/* Dot */}
                <span
                  className={`w-2 h-2 rounded-full animate-pulse ${
                    partner.studyMode === "Online"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                ></span>

                {/* Text */}
              </span>
            </div>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-5">
          <div className="flex flex-col gap-1">
            <h2 className="text-md font-bold text-gray-800">{partner.name}</h2>
            <h2 className="text-xs font-bold text-gray-800">
              Exp: {partner.experienceLevel}
            </h2>

            
          </div>

          {/* Subject and Rating */}

          <div className="flex justify-between items-center">
            <span className="px-2 py-1 border border-[#f55a00] font-semibold rounded-sm text-xs">
              {partner.subject}
            </span>
            <div className="flex items-center">
              <span className="text-yellow-500 text-xl">
                <img className="w-3 h-3" src={rating} alt="rating" />
              </span>
              <span className="font-bold text-xs text-gray-700 ml-1">
                {partner.rating}
              </span>
            </div>
          </div>

          {/* create partner profile button */}
          <NavLink to={`/partnersDetails/${_id}`}>
            <button className="w-full mt-4 py-2 bg-linear-to-r text-md from-[#2563EB] to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-md cursor-pointer">
              View Profile
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;
