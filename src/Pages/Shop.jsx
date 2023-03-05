import React from "react";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

import { PRODUCTS } from "../../data/products";

import ProductItem from "../Components/ProductItem";

const Shop = () => {
  return (
    <div>
      <NavBar />
      <div className="h-full px-4 mt-5 ">
        <div className=" justify-center  items-center flex">
          <p className="  mx-auto ">shop at discounted prices</p>
        </div>
        {/****************************** medium screens **********************************************/}
        <div className="md:flex  mt-3 ">
          {/*********************** *filters ****************************************/}

          <div className="md:w-1/4  mr-5 ">
            <h2 className="text-md font-medium"> Filter Products</h2>
            <ul className="mt-4 flex flex-col space-y-2">
              <li className="text-sm flex border-b-2 border-gray-800 justify-between  items-center ">
                <label htmlFor="category1">Ascending (Price) </label>
                <input
                  type="checkbox"
                  name="category"
                  id="category1"
                  className="mr-2"
                />
              </li>
              <li className="text-sm flex border-b-2 border-gray-800 justify-between  items-center ">
                <label htmlFor="category1">Descending (Price)</label>
                <input
                  type="checkbox"
                  name="category"
                  id="category1"
                  className="mr-2"
                />
              </li>
              <li className="text-sm flex border-b-2 border-gray-800 justify-between  items-center ">
                <label htmlFor="category1">Male</label>
                <input
                  type="checkbox"
                  name="category"
                  id="category1"
                  className="mr-2"
                />
              </li>
              <li className="text-sm flex border-b-2 border-gray-800 justify-between  items-center ">
                <label htmlFor="category1">Female</label>
                <input
                  type="checkbox"
                  name="category"
                  id="category1"
                  className="mr-2"
                />
              </li>
              <li className="text-sm flex border-b-2 border-gray-800 justify-between  items-center ">
                <label htmlFor="category1">Available</label>
                <input
                  type="checkbox"
                  name="category"
                  id="category1"
                  className="mr-2"
                />
              </li>
              <li className="text-sm flex border-b-2 border-gray-800 justify-between  items-center ">
                <label htmlFor="category1">Fast Delivery</label>
                <input
                  type="checkbox"
                  name="category"
                  id="category1"
                  className="mr-2"
                />
              </li>
              <li className="text-sm flex border-b-2 border-gray-800 justify-between  items-center ">
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

          <div className="md:w-3/4 w-full">
            <div className="flex">
              <div
                className="container mx-auto space-y-2 lg:space-y-0 lg:gap-5 lg:grid lg:grid-cols-4 grid-cols-2"
              >
                {PRODUCTS.map((product, index) => {
                  return (
                    <ProductItem
                      key={index}
                      name={product.title}
                      imageUrl={product.imgUrl}
                      price={product.price}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
