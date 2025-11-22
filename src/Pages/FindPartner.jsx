import axios from "axios";
import React, { useEffect, useState } from "react";
import PartnerCard from "./PartnerCard";

const FindPartner = () => {
  const [findPartners, setFindPartners] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/partners`).then((res) => {
      const data = res.data;
      setFindPartners(data);
    });
  }, []);

  console.log(findPartners);

  return (
    <div>
      <h1 className="text-4xl text-center my-5 font-semibold text-[#d94f00] opacity-80 ">
        Find Now
      </h1>
      <h1 className="text-2xl text-center my-5 font-semibold text-[#2563EB] opacity-80 ">
        Explore StudyMate and Find Yours Partner
      </h1>

      <div className="filter w-10/12 mx-auto flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center  p-5">
        <div className="sort"> sort</div>
        <div className="search">search</div>
      </div>

      <div className="top-rated px-5 w-10/12 mx-auto grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-5 my-10">
        {findPartners.map((partner, index) => (
          <PartnerCard key={index} partner={partner}></PartnerCard>
        ))}
      </div>
    </div>
  );
};

export default FindPartner;
