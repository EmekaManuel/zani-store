import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { PRODUCTS } from "../../data/products";
import ProductItem from "../Components/ProductItem";
import { Link } from "react-router-dom";

const Shop = () => {


  return (
    <div>
      <NavBar />
      <div className="h-full px-4 mt-5">
        <div className=" justify-center items-center flex">
          <p className="  mx-auto pb-5 ">shop at discounted prices</p>
        </div>
        {/************************ search dropdown **************************************/}
        <div>
        <div className="md:hidden md:relative top-[170px] md:top-[100px] w-full md:w-1/2 h-full flex flex-col text-center p-6 ">
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
      
      {/************************ search dropdown **************************************/}



        {/****************************** medium screens **********************************************/}
        <div className=" md:grid-cols-12 grid-cols-12 h-full md:gap-x-6 md:text-center
         md:justify-center md:flex text-center justify-center flex">
          {/*********************** *filters ****************************************/}

          <div className="hidden md:flex md:flex-col md:col-span-2">
            <h2 className="text-md font-medium"> Filter Products</h2>
            <ul className="mt-4 flex flex-col text-left ">
              <li className="text-[13px] flex border-b-2 px-auto border-gray-800 justify-between items-center ">
                <label htmlFor="category1">Low Price </label>
                <input
                  type="checkbox"
                  name="category"
                  id="category1"
                  className="mr-2"
                />
              </li>
              <li className="text-[13px] flex border-b-2 border-gray-800 justify-between  ">
                <label htmlFor="category1">High Price</label>
                <input
                  type="checkbox"
                  name="category"
                  id="category1"
                  className="mr-2"
                />
              </li>
              <li className="text-[13px] flex border-b-2 border-gray-800 justify-between  items-center ">
                <label htmlFor="category1">Male</label>
                <input
                  type="checkbox"
                  name="category"
                  id="category1"
                  className="mr-2"
                />
              </li>
              <li className="text-[13px] flex border-b-2 border-gray-800 justify-between  items-center ">
                <label htmlFor="category1">Female</label>
                <input
                  type="checkbox"
                  name="category"
                  id="category1"
                  className="mr-2"
                />
              </li>
              <li className="text-[13px] flex border-b-2 border-gray-800 justify-between  items-center ">
                <label htmlFor="category1">Available</label>
                <input
                  type="checkbox"
                  name="category"
                  id="category1"
                  className="mr-2"
                />
              </li>
              <li className="text-[13px] flex border-b-2 border-gray-800 justify-between  items-center ">
                <label htmlFor="category1">Fast Delivery</label>
                <input
                  type="checkbox"
                  name="category"
                  id="category1"
                  className="mr-2"
                />
              </li>
              <li className="text-[13px] flex border-b-2 border-gray-800 justify-between  items-center ">
                <label htmlFor="category1">Pre-Order</label>
                <input
                  type="checkbox"
                  name="category"
                  id="category1"
                  className="mr-2"
                />
              </li>
            </ul>
          </div>

          {/*********************** *main page ****************************************/}

          <div className="col-span-10">
              <div
                className="grid grid-cols-12 gap-4"
              >
                {PRODUCTS.map((product, index) => (
                  <div key={product.id} className="lg:col-span-3 md:col-span-6 col-span-6">
                      <ProductItem
                      key={index}
                      name={product.title}
                      imageUrl={product.imgUrl}
                      price={product.price}
                      
                    />
                  </div>
                  
                  )
                )}
              </div>
          
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
