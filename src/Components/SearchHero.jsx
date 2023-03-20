import React from "react";
import SearchImage from "../assets/Rectangle 2.png";

import { Link } from "react-router-dom";
import { useState } from "react";

const SearchHero = () => {

  const [search, setSearch] = useState("")

  return (
    //********************image**********************************//
    <div className="w-screen relative md:flex md:flex-row h-[screen] mt-[50px] md:h-full xl:h-[700px] ">
      <img
        src={SearchImage}
        className="w-full md:w-1/2 h-4/6 object-cover md:h-full"
        alt=""
        srcSet=""
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <div className="absolute hidden md:visible bg-black bottom-[100px] rounded left-5 md:flex items-center justify-center">
        <p className="text-white text-[15px] px-4 py-2 tracking-widest">
          Take 3% Off
        </p>
      </div>

      {/*******************main hero *********************/}
      <div className="absolute md:relative top-[170px] md:top-[100px] w-full md:w-1/2 h-full flex flex-col text-center p-6 ">
        <div className="flex mt-4  bg-white border-2 border-zinc-800 mx-auto p-1 xl:max-w-[600px] w-full">
          <input
            type="text"
            className="bg-white relative my-3 pl-5 text-gray-900 text-[20px] rounded-sm focus:ring-black focus:outline-none focus:border-black w-full block"
            placeholder="search"
          />
        </div>

        <div className="flex mt-4 justify-center items-center bg-black mx-auto p-1 max-w-[600px] w-full">
         <Link to = '/shop'>
         <button className=" px-[120px] py-3 text-white rounded">
            search
          </button>
         </Link>
        </div>

      </div>

    </div>
  );
};

export default SearchHero;
