import React from "react";
import HeroImage from "../assets/Rectangle 1.png";

const Hero = () => {
  return (

    //********************image**********************************//
    <div className="relative h-screen md:h-full">
      <img
        src={HeroImage}
        className="w-full h-5/6 object-cover md:h-full"
        alt="hero"
      />
    
    {/*******************main hero *********************/}
      <div className="absolute top-[10px] md:top-[100px] w-full h-full flex flex-col text-center text-white p-6">
        
        <h1 className="text-[35px] md:text-[60px] heroTopic p-5 md:p-2">new season arrivals</h1>
        <h1 className=" hero-paragraph opacity-75 text-[20px]">
          Lorem ipsum dolor sit amet consectetur 
          <br />
          Lorem ipsum dolor sit amet consec
          <br />
          Lorem ipsum dolor sit amet 
        </h1>

        <div className="flex mt-4 justify-center items-center mx-auto p-1 max-w-[700px] w-full"
        >
          <button className="shop-now px-[70px] py-3 bg-white text-black rounded hover:bg-gray-100">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
