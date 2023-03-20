import React from "react";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import ProductContainer from "./ProductContainer";

const ShopHero = () => {
  //fetching the data from the json file
  const [data, setData] = useState([]);
  const [filterData, setfilterData] = useState(data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./data.json');
        const jsonData = await response.json();
        console.log(jsonData)
        setData(jsonData)
      } catch (error) {
        console.log(error, 'error')
      }
    };
    fetchData()
    console.log(data)
  },[])

  //end of fetching the data from the json file

  // the pagination function
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(8);
  const indexOfLastPage = currentPage * perPage;
  const indexOfFirstPage = indexOfLastPage - perPage;
  const currentView = data.length > 0 ? data.slice(indexOfFirstPage, indexOfLastPage): [];

  const nPages = Math.ceil(data.length / perPage);
  // end of the pagination function

  return (
    <div className="flex flex-row justify-center mx-auto my-10 max-w-[89%] ">
      {/* ///////////////// left nav ///////////////////// */}

      <div className="left w-1/5 static pt-5 flex-1 hidden md:flex ">
        <div className="">
          <h2 className="text-md font-medium"> Filter Products</h2>
          <ul className="mt-4 flex flex-col text-left ">
            <li className="text-[13px] flex border-b-2 px-auto border-gray-800 gap-x-10 text-center">
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
      </div>

      {/* ///////////////// end of left nav ///////////////////// */}

      <div className="right w-4/5">
        <div className="grid md:grid-cols-4 w-[100%] gap-5">
          <ProductContainer filterData = {currentView} />
        
        </div>
        <div className="grid w justify-center">
            <Pagination
              className=""
              nPages={nPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            </div>
      </div>
    </div>
  );
};

export default ShopHero;
