import React from "react";
import Contact from "./Contact";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { FaStar } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import productsData from "/src/data.json";
import { useParams } from "react-router-dom";
import { useState } from "react";

// redux part
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import Reviews from "./Reviews";

const SingleProduct = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));

  const [description, setDescription] = useState(false);
  const [showSizing, setShowSizing] = useState(false);
  const [returnPolicy, setReturnPolicy] = useState(false);
  const [showShipping, setShowShipping] = useState(false);

  const showDDescription = () => {
    setDescription(!description);
  };

  const showSize = () => {
    setShowSizing(!showSizing);
  };

  const showReturnPolicy = () => {
    setReturnPolicy(!returnPolicy);
  };

  const showShippingInfo = () => {
    setShowShipping(!showShipping);
  };
  //redux functions
  const dispatch = useDispatch();

  return (
    <>
      <NavBar />
      {/* //images */}
      <div className="flex md:flex-row flex-col px-5  justify-around py-10 ">
        <div className="md:w-1/2 ">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-5 md:grid-cols-2 ">
            <div className="bg-white flex justify-center items-center ">
              <img
                src={product.image}
                className="rounded-lg p-3 min-h-[200px] min-w-[200px] max-h-[350px]"
                alt=""
              />
            </div>
            <div className="bg-white flex justify-center items-center  ">
              <img
                src={product.subImage1}
                className=" flex p-3 justify-center items-center rounded-lg min-h-[200px] min-w-[200px]  max-h-[350px] "
                alt=""
              />
            </div>
            <div className="bg-white flex justify-center items-center  ">
              <img
                src={product.subImage2}
                className="rounded-lg p-3 min-h-[200px] min-w-[200px]  max-h-[350px] "
                alt=""
              />
            </div>
            <div className="bg-white flex justify-center items-center ">
              <img
                src={product.subImage3}
                className="rounded-lg p-3 min-h-[200px] min-w-[200px]  max-h-[350px]"
                alt=""
              />
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
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="bg-white py-1 border-black border text-gray-900 w-full"
                >
                  add to cart
                </button>{" "}
              </div>
            </div>
            <div className="extras pt-5">
              <span className="text-[13px] py-4 flex flex-col border-b-2 border-gray-300  ">
                <span className="flex justify-between">
                  <p>description</p>
                  <p>
                  { 
                      description ? <BsChevronDown onClick={showDDescription}/> : <BsChevronRight onClick={showDDescription} />
                    }                  </p>
                </span>
                <span>
                  {description && (
                    <p className=" pt-2 px-2 text-slate-500 ">
                      {product.description}
                    </p>
                  )}
                </span>
              </span>

              <span className="text-[13px] py-4 flex flex-col border-b-2 border-gray-300 justify-between  ">
                <span className="flex justify-between">
                  <p>sizing</p>
                  <p>
                  { 
                      showSizing ? <BsChevronDown onClick={showSize}/> : <BsChevronRight onClick={showSize} />
                    }                  </p>
                </span>
                <span>
                  {showSizing && (
                    <p className=" pt-2 px-2 text-slate-500 ">
                      {product.sizing}
                    </p>
                  )}
                </span>
              </span>

              <span className="text-[13px] py-4 flex flex-col border-b-2 border-gray-300 justify-between  ">
                <span className="flex justify-between">
                  <p>free shipping</p>
                  <p>
                  { 
                      showShipping ? <BsChevronDown onClick={showShippingInfo}/> : <BsChevronRight onClick={showShippingInfo} />
                    }                  </p>
                </span>
                <span>
                  {showShipping && (
                    <p className=" pt-2 px-2 text-slate-500 ">
                      {product.freeShipping
                        ? "free shipping is available "
                        : "free shipping is not available for this product"}
                    </p>
                  )}
                </span>
              </span>

              <span className="text-[13px] py-4 flex flex-col border-b-2 border-gray-300 justify-between  ">
                <span className="flex justify-between">
                  <p>return policy</p>
                  <p>
                     { 
                      returnPolicy ? <BsChevronDown onClick={showReturnPolicy}/> : <BsChevronRight onClick={showReturnPolicy} />
                    }
                  </p>
                </span>
                <span>
                  {returnPolicy && (
                    <p className=" pt-2 px-2 text-slate-500 ">
                      This product and all products are returnable within the first 2 weeks after purchase.
                    </p>
                  )}
                </span>
              </span>


            </div>
          </div>
        </div>
      </div>

      <Reviews/>
      <Contact />
      <Footer />
    </>
  );
};

export default SingleProduct;
