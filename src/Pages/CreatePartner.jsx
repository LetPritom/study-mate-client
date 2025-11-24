import React, { use,  } from "react";
import { AuthContext } from "../AuthContex/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const CreatePartner = () => {

  const { user } = use(AuthContext);
  const navigate = useNavigate();



const handleCreatePartner = (e) => {
  e.preventDefault();
   const name = e.target.name?.value;
   const profileimage = e.target.profile?.value;
   const subject= e.target.subject?.value;
   const studyMode = e.target.studyMode?.value;
   const availabilityTime = e.target.availabilityTime?.value;
   const location = e.target.location?.value;
   const experienceLevel = e.target.experienceLevel?.value;
   const rating = e.target.rating?.value;
   const partnerSendRequest = 0 ;
   const email = user.email;
   
  //  console.log({subject, user , profileimage, name,studyMode,availabilityTime,rating });

   const data = {
    name,
    profileimage,
    subject , 
    studyMode,
    availabilityTime,
    location,
    experienceLevel,
    rating,
    partnerSendRequest,
    email

   }

   axios.post('http://localhost:3000/partners' , data)
   .then((res) => {
     toast.success('Create Successfully')
     navigate('/find-partner');
     console.log(res)
   })
   .catch((err) => {
    console.log(err)
   })

   console.log(data);
}



  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl text-[#f55a00] font-bold mb-5 text-center">
        Create New Partner
      </h2>

      <form className="space-y-4 text-black"
      onSubmit={handleCreatePartner}>
        <div>
          <label className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 border rounded"
            placeholder="Enter full name"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Profile Image URL</label>
          <input
            type="text"
            name="profile"
            className="w-full p-2 border rounded"
            placeholder="https://..."
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Subject</label>
          <input
            type="text"
            name="subject"
            className="w-full p-2 border rounded"
            placeholder="Physics, Math, English..."
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Study Mode</label>
          <select
            name="studyMode"
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Mode</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-1">Availability Time</label>
          <input
            type="text"
            name="availabilityTime"
            className="w-full p-2 border rounded"
            placeholder="Evening"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Location</label>
          <input
            type="text"
            name="location"
            className="w-full p-2 border rounded"
            placeholder="Dhaka, Bangladesh"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Experience Level</label>
          <select
            name="experienceLevel"
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-1">Rating</label>
          <input
            type="number"
            name="rating"
            className="w-full p-2 border rounded"
            placeholder="1 to 5"
            min="1"
            max="5"
            required
          />
        </div>

        <button className="group  relative inline-flex items-center gap-3 px-10 py-3
                        text-lg font-bold tracking-wide rounded-xl 
                        bg-linear-to-r from-purple-600 to-blue-600 
                        hover:from-purple-700 hover:to-blue-700
                        text-white shadow-2xl 
                        transform hover:scale-105 
                        transition-all duration-300 
                        overflow-hidden cursor-pointer">

                        <span className="relative z-10">Create Partner</span>

                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-lg bg-linear-to-r 
                            from-purple-500 to-blue-500 blur-xl 
                            opacity-60 group-hover:opacity-90 
                            scale-110 transition-all duration-500 -z-10"></div>

                        {/* Shine on Hover */}
                        <div className="absolute inset-0 rounded-lg overflow-hidden -z-10">
                            <div className="absolute inset-0 bg-white opacity-0 
                                group-hover:opacity-20 -translate-x-full 
                                group-hover:translate-x-full 
                                transition-transform duration-1000 skew-x-12"></div>
                        </div>
                    </button>
      </form>
    </div>
  );
};

export default CreatePartner;
