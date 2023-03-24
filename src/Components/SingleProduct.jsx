import React from "react";
import Contact from "./Contact";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { FaStar } from "react-icons/fa";
import { BsArrowDown } from "react-icons/bs";
import productsData from "/src/data.json";
import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";

const SingleProduct = () => {
  const { id } = useParams();
  // console.log(id)
  const product = productsData.find((p) => p.id === parseInt(id));

  return (
    <>
      <NavBar />
      {/* //images */}
      <div className="flex md:flex-row flex-col px-5  justify-around py-10 ">
        <div className="md:w-1/2 ">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-5 md:grid-cols-2 ">
            <div className="bg-white flex justify-center items-center ">
              <img src={product.image} className="rounded-lg p-3 min-h-[200px] min-w-[200px] max-h-[350px]" alt="" />
            </div>
            <div className="bg-white flex justify-center items-center  ">
                <img src={product.subImage1} className=" flex p-3 justify-center items-center rounded-lg min-h-[200px] min-w-[200px]  max-h-[350px] " alt="" />
            </div>
            <div className="bg-white flex justify-center items-center  ">
             <img src={product.subImage2} className='rounded-lg p-3 min-h-[200px] min-w-[200px]  max-h-[350px] ' alt="" />
            </div>
            <div className="bg-white flex justify-center items-center ">
             <img src={product.subImage3} className='rounded-lg p-3 min-h-[200px] min-w-[200px]  max-h-[350px]' alt="" />
            </div>
          </div>
        </div>

        {/* //writings */}
        <div className="md:w-1/2 md:max-w-[290px] pt-5">
          <div className="flex flex-col">
            <div className="name space-y-5">
              <p className="text-2xl  font-black text">
                {product.name} <br /> Clothing
              </p>
              <p className="text-[13px] gap-7 flex ">
                {" "}
                <span className="flex flex-row gap-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>{" "}
                ... in reviews{" "}
              </p>
            </div>
            <div className="price py-3">
              <p className="font-mono text-xl">${product.price}</p>
            </div>
            <div className="color-select ">
              <p className="pb-3 text-sm font-extralight ">select your color</p>
              <span className="flex flex-row gap-6">
                <div className=" bg-red-800 font h-7 w-7"></div>
                <div className=" bg-blue-800 h-7 w-7"> </div>
                <div className=" bg-gray-800 h-7 w-7"></div>
                <div className=" bg-yellow-800 h-7 w-7"> </div>
                <div className=" bg-blue-200 h-7 w-7"> </div>
                <div className=" bg-yellow-400 h-7 w-7"> </div>
              </span>
            </div>
            <div className="size-select pt-5 ">
              <p className="pb-3 text-sm font-extralight ">select your size</p>
              <span className="flex flex-row gap-6">
                <div className=" border border-spacing-2 border-black items-center justify-center flex font-extralight font-mono h-7 w-7">
                  10
                </div>
                <div className=" border border-spacing-2 border-black items-center justify-center flex font-extralight font-mono h-7 w-7">
                  {" "}
                  20
                </div>
                <div className=" border border-spacing-2 border-black items-center justify-center flex font-extralight font-mono h-7 w-7">
                  30
                </div>
                <div className=" border border-spacing-2 border-black items-center justify-center flex font-extralight font-mono h-7 w-7">
                  {" "}
                  40
                </div>
                <div className=" border border-spacing-2 border-black items-center justify-center flex font-extralight font-mono h-7 w-7">
                  {" "}
                  50{" "}
                </div>
                <div className=" border border-spacing-2 border-black items-center justify-center flex font-extralight font-mono h-7 w-7">
                  {" "}
                  60{" "}
                </div>
              </span>
            </div>{" "}
            <div className="buttons flex gap-y-2 flex-col pt-5">
              <div className="">
                {" "}
                <button className="bg-gray-900 py-1 text-white w-full">
                  buy
                </button>{" "}
              </div>
              <div className="">
                {" "}
                <button className="bg-white py-1 border-black border text-gray-900 w-full">
                  add to cart
                </button>{" "}
              </div>
            </div>
            <div className="extras pt-5">
              <span className="text-[13px] py-4 flex border-b-2 border-gray-300 justify-between  ">
                <p>description</p>
                <p>
                  <BsArrowDown />
                </p>
              </span>
              <span className="text-[13px] py-4 flex border-b-2 border-gray-300 justify-between  ">
                <p>sizing</p>
                <p>
                  <BsArrowDown />
                </p>
              </span>
              <span className="text-[13px] py-4 flex border-b-2 border-gray-300 justify-between  ">
                <p>free shipping</p>
                <p>
                  <BsArrowDown />
                </p>
              </span>
              <span className="text-[13px] py-4 flex border-b-2 border-gray-300 justify-between  ">
                <p>return policy</p>
                <p>
                  <BsArrowDown />
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default SingleProduct;
