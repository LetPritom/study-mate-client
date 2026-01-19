import React from "react";
import logo from "../assets/study.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaXTwitter,
} from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="h-auto  bg-linear-to-br from-slate-900 via-blue-950 to-black">
      <div className="w-10/12 mx-auto flex flex-col md:flex-row lg:flex-row justify-between gap-5 py-5 mt-10">
        <div className="img-title w-64">
          <img className="w-20 h-20" src={logo} alt="" />
          <h1 className="text-white font-bold text-3xl py-2">StudyMate</h1>
        </div>

        <div className="contact-info">
          <ul className="text-white flex flex-col gap-2">
            <li className="text-xl"> Contact Us</li>
            <li className="flex items-center gap-2 hover:underline cursor-pointer">
              <IoMdCall /> 01915375158
            </li>
            <li className="flex items-center gap-2 hover:underline cursor-pointer">
              <SiGmail /> letpritom.skr@gmail.com
            </li>
            <li className="flex items-center gap-2 hover:underline cursor-pointer">
              <IoLocationSharp />
              Jashore Khulna , Bangladesh
            </li>
          </ul>
        </div>

        <div className="info-links">
          <ul className="text-white flex flex-col gap-2">
            <li className="text-xl">Useful Link</li>
            <Link to="/about">
              <li className="hover:underline cursor-pointer">About</li>
            </Link>
            <Link to="/support">
              <li className="hover:underline cursor-pointer">Support</li>
            </Link>
            <Link to="/student-help">
              <li className="hover:underline cursor-pointer">Student Help</li>
            </Link>

            <Link to="/Privacy">
              <li className="hover:underline cursor-pointer">Privacy</li>
            </Link>

            {/* <li className='hover:underline cursor-pointer'>Legal</li> */}
          </ul>
        </div>

        <div className="social-links flex flex-col gap-4">
          <h1 className="text-white text-xl">Social Contacts</h1>
          <ul className="text-white flex flex-col  gap-2">
            <a
              target="_blank" // ← নতুন ট্যাবে খুলবে
              rel="noopener noreferrer"
              href="https://www.facebook.com/prithom.roy.94"
            >
              <li className="flex items-center gap-2 hover:underline cursor-pointer">
                <FaFacebook />
                Facebook
              </li>
            </a>

            <a
             target="_blank" // ← নতুন ট্যাবে খুলবে
              rel="noopener noreferrer"
             href="https://www.instagram.com/_pritom__roy_/">
                 <li className="flex items-center gap-2 hover:underline cursor-pointer">
              <FaInstagram />
              Instagram
            </li>
            </a>

           <a 
           target="_blank" // ← নতুন ট্যাবে খুলবে
              rel="noopener noreferrer"
           href="https://www.linkedin.com/in/pritom-roy-jess/">
            <li className="flex items-center gap-2 hover:underline cursor-pointer">
              <FaLinkedin />
              Linkedin
            </li>
           </a>
            
            {/* <li className="flex items-center gap-2 hover:underline cursor-pointer">
              twitter
             
            </li>
            <li className="flex items-center gap-2 hover:underline cursor-pointer">
              <FaWhatsappSquare />
              Whatsapp
            </li> */}
          </ul>
        </div>
      </div>
      <div className="des text-center w-9/12 mx-auto">
        <div className="describe flex flex-col py-5">
          <h1 className="text-center text-gray-200 ">Description</h1>
          <p className=" w-auto text-sm text-gray-400 ">
            StudyMate – Your personal study dashboard. Create dynamic study
            carts, add study buddies, track progress, and stay focused. All data
            securely saved & fetched from database. Private routes | Real-time
            search & sort | Built for future rankers. Made with 💙 by a beginner
            grinding daily.{" "}
          </p>
          {/* <p className=' w-auto text-sm text-gray-400'>  </p> */}
        </div>
      </div>
      <hr className="border border-white w-10/12 mx-auto my-5" />
      <div className="copyright text-center py-5 w-7/12 mx-auto">
        <p className="text-white text-sm">
          Copyright © 2025 StudyMate, Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
