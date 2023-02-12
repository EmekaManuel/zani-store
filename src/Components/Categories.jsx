import React from "react";
import Image from "../assets/Frame 7 (1).png";
import Image2 from "../assets/Frame 6 (1).png";
import Image3 from "../assets/Frame 9 (1).png";
import MiddleImage from "../assets/middle section.png";
import MiddleImage2 from '../assets/Rectangle 737.png'

const Categories = () => {
  return (

    // *************** title

    <div className="flex justify-center flex-col mx-auto mb-3 md:mb-0">
      <div className="categories-title flex justify-center text-center sm:mt-[70px] md:my-10">
        <h1>Major Categories</h1>
      </div>

      {/************ * categories section ****************/}

      <div className="row md:flex my-10 md:space-x-3 md:mt-0 md:justify-center md:mx-auto ">
        <div className="md:w-1/4 ">
          <div className="relative">
            <img src={Image2} className="w-full" alt="" srcset="" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white font-medium">Coats</p>
              <div className="absolute md:hidden bg-black top-[-10px] rounded left-5 flex items-center justify-center">
                <p className="text-white text-[15px] px-4 py-2 tracking-widest">
                  Take 3% Off
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/4 my-10 md:my-0">
          <div className="relative">
            <img src={Image} className="w-full" alt="" srcset="" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white font-medium">Pants</p>
            </div>
           
          </div>
        </div>

        <div className="md:w-1/4">
          <div className="relative">
            <img src={Image3} className="w-full" alt="" srcset="" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white font-medium">Women</p>
            </div>
        
          </div>
        </div>
      </div>

      {/************ * end of categories section ****************/}

      {/*************** middle span image for medium screens ***********************/}

      <div className="hidden row md:flex my-10 md:mt-0 md:justify-center md:mx-auto ">
        <div className="md:w-[78%]">
          <div className="relative">
            <img src={MiddleImage} className="w-full" alt="" srcset="" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-white text-[35px] md:text-[40px]">
                the zani lookbook
              </h1>
              <div className="flex mt-4 justify-center items-center mx-auto p-1 max-w-[400px] w-full">
                <button className=" px-[30px] py-1 bg-black text-white rounded">
                  shop now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/*************** middle span image for mobile screens ***********************/}

      <div className=" row md:hidden my-5 md:mt-0 md:justify-center md:mx-auto ">
        <div className="md:w-[77%]">
          <div className="relative">
            <img src={MiddleImage2} className="w-full" alt="" srcset="" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-white text-[35px] md:text-[40px]">
                the zani lookbook
              </h1>
              <div className="flex mt-4 justify-center items-center mx-auto p-1 max-w-[400px] w-full">
                <button className=" px-[50px] py-2 bg-black text-white rounded">
                  shop now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      
      {/***************end of middle span image ***********************/}

    </div>
  );
};

export default Categories;
