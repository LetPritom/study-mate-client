import axios from "axios";
import React, { useEffect, useState } from "react";
import PartnerCard from "./PartnerCard";
import { RingLoader } from "react-spinners";
import SkeletonLoader from "../Loader/SkeletonLoader";

const FindPartner = () => {
  const [findPartners, setFindPartners] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage , setCurrentPage] = useState(0)
  const limit = 10;
  const [loading, setLoading] = useState(true);

  const [levelFilter, setLevelFilter] = useState("none");
  console.log(findPartners);

  useEffect(() => {
    axios.get(`http://localhost:3000/partners?limit=${limit}&skip=${currentPage*limit}`).then((res) => {
      const data = res.data;
      const page = Math.ceil(data.total / limit);
      setTotalPage(page)
      setFindPartners(data?.result);
      
      setLoading(false);
      console.log(page);
    });
  }, [currentPage]);

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search?.value;
    console.log(search);
    setLoading(true);

    axios(
      `https://study-mate-server-fawn.vercel.app/search?search=${search}`
    ).then((res) => {
      setFindPartners(res.data);

      setLoading(false);

      console.log(res.data);
    });
  };

  const handleSort = () => {
    setLoading(true);
    axios(
      `https://study-mate-server-fawn.vercel.app/sort-partner?level=${levelFilter}`
    ).then((res) => {
      setFindPartners(res.data);
      setLoading(false);
    });
  };

  return (
    <div>
      <div className="title w-10/12 mx-auto my-10 py-10 ">
        <h1 className="text-4xl text-center my-5 font-semibold">Find Now</h1>
        <h1 className="text-2xl text-center my-5 font-semibold">
          Explore StudyMate and Find Yours Partner
        </h1>
      </div>

      <div className="filter py-5 w-10/12 mx-auto flex flex-col items-center gap-4 lg:flex-row lg:justify-between lg:items-center space-y-5 p-3">
        <div className="sort flex items-center gap-3">
          <label className="font-semibold   hidden sm:block">Filter By:</label>
          <select
            onClick={handleSort}
            onChange={(e) => setLevelFilter(e.target.value)}
            name="experience"
            className="px-5 py-3 bg-white border-2 border-gray-300 rounded-xl focus:border-[#f55a00] focus:outline-none cursor-pointer font-medium text-gray-800 shadow-sm hover:shadow-md transition-all"
            defaultValue=""
          >
            <option value="">All Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        <form onSubmit={handleSearch}>
          <div className="search flex gap-3 items-center">
            <label className="input input-bordered flex items-center gap-3 bg-white shadow-md  border-gray-300 rounded-xl">
              {/* Search Icon */}
              <svg
                className="w-3 h-3 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
                />
              </svg>

              {/* Search Input */}
              <input
                name="search"
                type="search"
                className="grow outline-none text-gray-800 placeholder-gray-500"
                placeholder="Search by subject..."
              />
            </label>
            <button className="group flex items-center gap-1 px-3 py-2 rounded-xl bg-linear-to-r from-blue-500 to-pink-500 text-white font-bold shadow-lg cursor-pointer hover:shadow-xl hover:shadow-purple-500/40 transform hover:scale-105 transition-all duration-200">
              <span className="relative z-10">Search</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
            </button>
          </div>
        </form>
      </div>

      {loading ? (
          <SkeletonLoader count={findPartners.length}></SkeletonLoader>
      ) : (
        <div className="top-rated px-5 w-10/12 mx-auto grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 space-y-5 my-10">
          {findPartners.map((partner, index) => (
            <PartnerCard key={index} partner={partner}></PartnerCard>
          ))}
        </div>
      )}

      <div className="flex justify-center flex-wrap gap-3 py-10">
        {
          currentPage > 0 && <button onClick={()=> setCurrentPage(currentPage-1)} className="btn"> {`<< Prev`}</button>
        }
        
        {
          [...Array(totalPage).keys()].map((i) => <button onClick={() => setCurrentPage(i)} className={`btn ${i === currentPage && `btn-primary`}`}>{i+1}</button>)
        }

        {
          currentPage < totalPage-1 && <button onClick={()=> setCurrentPage(currentPage+1)} className="btn"> {`Next >>`}</button>
        }
        
      </div>
    </div>
  );
};

export default FindPartner;
