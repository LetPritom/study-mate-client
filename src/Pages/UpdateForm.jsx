import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

const UpdateForm = () => {
  const { upId } = useParams();

  const [update, setUpdate] = useState([]);
  const navigate = useNavigate();

  // default value er jonne

  useEffect(() => {
    axios(`http://localhost:3000/partners/${upId}`).then((res) => {
      // console.log(res.data)
      const data = res.data.result;
      setUpdate(data);
    });
  }, [upId]);

  const handleUpdatePartner = (e) => {
    e.preventDefault();
    const name = e.target.name?.value;
    const profileimage = e.target.profile?.value;
    const subject = e.target.subject?.value;
    const rating = e.target.rating?.value;

    //  console.log({subject, user , profileimage, name,studyMode,availabilityTime,rating });

    const updateData = {
      name,
      profileimage,
      subject,
      rating,
    };

    axios
      .put(`http://localhost:3000/partners/${update._id} `, updateData) // ekhne ami (upId) use korlew  kaj korbe .
      .then((res) => {
        console.log(res);
        toast.success("Successfully Updated");
        navigate("/my-connection");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl text-[#f55a00] font-bold mb-5 text-center">
          Update Partner Info !
        </h2>

        <form className="space-y-4 p-10 border-2 border-[#f55a00]" onSubmit={handleUpdatePartner}>
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              defaultValue={update.name}
              type="text"
              name="name"
              className="w-full p-2 border rounded"
              placeholder="Enter full name"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Profile Image URL
            </label>
            <input
              defaultValue={update.profileimage}
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
              defaultValue={update.subject}
              type="text"
              name="subject"
              className="w-full p-2 border rounded"
              placeholder="Physics, Math, English..."
              required
            />
          </div>

          {/* <div>
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
        </div> */}

          {/* <div>
          <label className="block font-semibold mb-1">Availability Time</label>
          <input
            type="text"
            name="availabilityTime"
            className="w-full p-2 border rounded"
            placeholder="Evening"
            required
          />
        </div> */}

          {/* <div>
          <label className="block font-semibold mb-1">Location</label>
          <input
            type="text"
            name="location"
            className="w-full p-2 border rounded"
            placeholder="Dhaka, Bangladesh"
            required
          />
        </div> */}

          {/* <div>
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
        </div> */}

          <div>
            <label className="block font-semibold mb-1">Rating</label>
            <input
              defaultValue={update.rating}
              type="number"
              name="rating"
              className="w-full p-2 border rounded"
              placeholder="1 to 5"
              min="1"
              max="5"
              required
            />
          </div>

          <button
            className="group  relative inline-flex items-center gap-3 px-10 py-3
                        text-lg font-bold tracking-wide rounded-xl 
                        bg-linear-to-r from-purple-600 to-blue-600 
                        hover:from-purple-700 hover:to-blue-700
                        text-white shadow-2xl 
                        transform hover:scale-105 
                        transition-all duration-300 
                        overflow-hidden cursor-pointer"
          >
            <span className="relative z-10">Update Info</span>

            {/* Glow Effect */}
            <div
              className="absolute inset-0 rounded-lg bg-linear-to-r 
                            from-purple-500 to-blue-500 blur-xl 
                            opacity-60 group-hover:opacity-90 
                            scale-110 transition-all duration-500 -z-10"
            ></div>

            {/* Shine on Hover */}
            <div className="absolute inset-0 rounded-lg overflow-hidden -z-10">
              <div
                className="absolute inset-0 bg-white opacity-0 
                                group-hover:opacity-20 -translate-x-full 
                                group-hover:translate-x-full 
                                transition-transform duration-1000 skew-x-12"
              ></div>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
