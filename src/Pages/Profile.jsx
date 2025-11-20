/* eslint-disable no-unused-vars */
import React, { use } from "react";
import { AuthContext } from "../AuthContex/AuthContext";

const Profile = () => {

   

  const { updateProfileFunc, setLoading, user } = use(AuthContext);

//   const handleProfileUpdate = (e) => {
//     e.preventDefault();
//     const displayName = e.target.name?.value;
//     const photoURL = e.target.photo?.value;

//     if(!displayName  || !photoURL) {
//       return toast.info('Please fill in both input fields, otherwise the update will not be saved ❌')
//     }
    
//     updateProfileFunc(displayName, photoURL)
//       .then(() => {
//         setLoading(false);
//         toast.success("Profile is Update");
//       })
//       .catch((err) => {
//         toast.error(err);
//       });
//     console.log(`button was clicked`);
//   };

  return (
    <div className="hero bg-white min-h-[90vh] ">
       <div className="info flex flex-col justify-center items-center">
              <div className="img w-42 h-42 mt-4 flex justify-center items-center"><img className="object-cover rounded-lg" src={user.photoURL} alt="update" /></div>
              <p className="text-xl font-bold">{user.displayName}</p>
              <p className="text-xl font-bold">{user.email}</p>
            </div>
    </div>
  );
};

export default Profile;
