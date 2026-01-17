import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../AuthContex/AuthContext";
import ConnectionTable from "./connectionTable";
import { RingLoader } from "react-spinners";

const Myconnection = () => {
  const { user } = use(AuthContext);
  const [request, setRequest] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://study-mate-server-fawn.vercel.app/request?email=${user.email}`
      )
      .then((res) => {
        const data = res.data;
        setRequest(data);
        setLoading(false);
      });
  }, [user.email]);

  // useEffect(() => {
  //     axios.get(`https://study-mate-server-fawn.vercel.app/partners`)
  //     .then((res) => {
  //         const data = res.data;
  //         setRequest(data);
  //     })
  // } , [user.email])

  const handleDeleteFromUi = (id) => {
    const updatedRequest = request.filter((item) => item._id !== id); //dynamic ui
    setRequest(updatedRequest);
  };

  console.log(request);
  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-5 text-[#f55a00]">
        My Connection
      </h1>

      {loading ? (
        <div className="loading h-screen w-full flex justify-center items-center bg-transparent ">
          <RingLoader color="#ff9c07d7" />
        </div>
      ) : (
        <div className="px-5 my-5 w-10/12 mx-auto">
          {request?.map((res, index) => (
            <ConnectionTable
              onDelete={handleDeleteFromUi}
              key={index}
              res={res}
            ></ConnectionTable>
          ))}
        </div>
      )}
    </div>
  );
};

export default Myconnection;
