import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa6";
import { IoPersonAdd } from "react-icons/io5";
import { User } from "lucide-react";
import { AuthContext } from "../AuthContex/AuthContext";
import { toast } from "react-toastify";

const PartnerDetails = () => {
  const {user} = use(AuthContext);
  const { id } = useParams();
  // console.log(id)

  const [details, setDetails] = useState([]);
  const [ count , setCount] = useState(false)

  

  useEffect(() => {
    axios(`https://study-mate-server-fawn.vercel.app/partners/${id}`).then((res) => {
      // console.log(res.data)
      const data = res.data.result;
      setDetails(data);
    });
  }, [id , count]);

  const handleRequest = () => {

  const requestDetails = {
    name:details.name,
    profileimage:details.profileimage,
    rating:details.rating,
    subject: details.subject,
    studyMode:details.studyMode,
    availabilityTime: details.availabilityTime,
    email : details.email,
    experienceLevel: details.experienceLevel,
    location: details.location,
    request_by: user.email,

  }



    axios.post(`https://study-mate-server-fawn.vercel.app/request/${details._id}` , requestDetails).then((res) => {
      // console.log(res.data)
      const data = res.data;
      console.log(data)
      setCount(!count)
      toast.success('Data Will Be Saved on Database! Please Visit My Connection Page')
    });
  }

  console.log(details);

  return (
    <div>
  <div className="w-10/12 mx-auto my-5 py-5 px-2 h-auto">
    <div
      className="card card-side hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300 
                 active:scale-95 cursor-pointer flex flex-col md:flex-row lg:flex-row border border-[#f55a00]"
    >
      <figure className="w-full md:w-52 lg:w-72 rounded-sm">
        <img
          className="object-cover w-full"
          src={details.profileimage}
          alt="profile"
        />
      </figure>

      {/* BODY */}
      <div className="card-body flex flex-col gap-3">

        <h2 className="card-title font-bold text-2xl">
          Partner : {details.name}
        </h2>

        <h2 className="card-category font-bold text-lg">
          Sub : {details.subject}
        </h2>

        {/* FIRST BADGE ROW */}
        <div className="study flex flex-wrap gap-2 text-center font-semibold">
          <p className="w-fit px-3 py-2 border text-sm font-bold border-[#ff7f35]">
            {details.studyMode}
          </p>

          <p className="w-fit px-3 py-2 border text-sm font-bold border-[#ff7f35]">
            Exp:{details.experienceLevel}
          </p>

          <p className="w-fit flex items-center justify-center gap-1 px-3 py-2 border text-sm font-bold border-[#ff7f35]">
            <FaStar color="#ff7f35" />
            {details.rating}
          </p>
        </div>

        {/* SECOND BADGE ROW */}
        <div className="study flex flex-wrap gap-2 text-center font-semibold">
          <p className="w-fit px-3 py-2 text-sm font-bold border border-[#ff7f35]">
            {details.location}
          </p>

          <p className="w-fit px-3 py-2 border text-sm font-bold border-[#ff7f35]">
            {details.availabilityTime}
          </p>

          <p className="w-fit flex items-center justify-center gap-1 px-3 py-2 border text-sm font-bold border-[#ff7f35]">Partner Count
            <IoPersonAdd color="#2563EB" />
            {details.partnerCount}
          </p>
        </div>

        {/* STUDY MOOD */}
        <p className="font-semibold my-2">
          Study Mood :
          <span
            className={`ml-2 px-3 py-1 rounded-full text-sm font-bold ${
              details.studyMode === "Online"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {details.studyMode}
          </span>
        </p>

        {/* BUTTON */}
        <button
          onClick={handleRequest}
          className="w-52 py-3 px-3 bg-linear-to-r from-[#2563EB] to-pink-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-md cursor-pointer"
        >
          Sent Partner Request
        </button>

      </div>
    </div>
  </div>
</div>

  );
};

export default PartnerDetails;
