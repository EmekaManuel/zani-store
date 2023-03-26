import React from "react";
import LoginImage from "../assets/Rectangle 3.png";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
const loginPage = () => {
  return (
    //********************image**********************************//
    <div className="w-screen relative md:flex md:flex-row h-[screen] md:h-screen xl:h-[700px] my-[70px] md:mt-[10px] ">
      <LazyLoadImage
        src={LoginImage}
        className="w-full hidden md:flex md:visible md:w-1/2 h-4/6 object-cover md:h-4/5"
        alt="login"
      />

      <div className="absolute hidden md:visible bg-black bottom-[150px] rounded left-5 md:flex items-center justify-center">
        <Link to = '/newsletter'>
          <p className="text-white text-[15px] px-4 py-2 tracking-widest">
            Take 3% Off
          </p>
        </Link>
      </div>

      {/*******************main hero *********************/}
      <div className="relative md:relative top-[10px] md:top-[30px] xl:top-[100px] w-full md:w-1/2 h-full flex flex-col text-center p-6 ">
        <div className="flex text-center justify-center">login</div>

        <div className="flex mt-4  bg-white border-2 border-gray-700 mx-auto p-1 xl:max-w-[600px] w-full">
          <input
            type="text"
            className="bg-white relative my-3 pl-5 text-gray-900 text-sm rounded-sm focus:ring-black focus:outline-none focus:border-black md:w-[180px] block"
            placeholder="email"
          />
        </div>

        <div className="flex mt-4  bg-white border-2 border-gray-700 mx-auto p-1 xl:max-w-[600px] w-full">
          <input
            type="text"
            className="bg-white relative my-3 pl-5 text-gray-900 text-sm rounded-sm focus:ring-black focus:outline-none focus:border-black md:w-[180px] block"
            placeholder="password"
          />
        </div>

        <div className="flex mt-4 justify-center items-center bg-black mx-auto p-1 max-w-[600px] w-full">
          <button className=" px-[120px] py-3 text-white rounded">
            search
          </button>
        </div>

        <div className="flex text-center justify-center pt-[10px] pb-[10px] md:pt-5 xl:pt-7">
          <p>
            {" "}
            <Link to="/forgottenPassword">forgot password ?</Link>{" "}
          </p>
        </div>

        <div className="flex col-span-6 justify-between">
          <p>
            {" "}
            <Link to="/signUp">create an account</Link>{" "}
          </p>
          <p>
            {" "}
            <Link to="/store">return to store</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default loginPage;
