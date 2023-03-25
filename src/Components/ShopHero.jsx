import React from "react";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import ProductContainer from "./ProductContainer";
import { NavLink } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";

const ShopHero = () => {
  //fetching the data from the json file
  const [data, setData] = useState([]);
  const [filterData, setfilterData] = useState(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data.json");
        const jsonData = await response.json();
        // console.log(jsonData)
        setData(jsonData);
      } catch (error) {
        console.log(error, "error");
      }
    };
    fetchData();
    // console.log(data);
  }, []);

  //end of fetching the data from the json file

  // the pagination function
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(8);
  const indexOfLastPage = currentPage * perPage;
  const indexOfFirstPage = indexOfLastPage - perPage;
  const currentView =
    data.length > 0 ? data.slice(indexOfFirstPage, indexOfLastPage) : [];

  const nPages = Math.ceil(data.length / perPage);
  // end of the pagination function

  return (
    <div className="flex flex-row justify-center mx-auto my-10 max-w-[89%] ">
      {/* ///////////////// left nav ///////////////////// */}

      <div className="left w-1/5 static pt-5 flex-1 hidden lg:flex ">
        <div className="">
          <h2 className="text-md font-medium"> Filter Products</h2>
          <ul className="mt-4 flex flex-col ">
            <li className="text-[13px] lg:max-w-[180px] flex border-b-2  border-gray-800 items-center  justify-between text-center">
              <p>Low Price </p>
              <span>
                {" "}
                <BsChevronDown />{" "}
              </span>
            </li>
            <li className="text-[13px] min-w-[180px] max-w-[180px] flex border-b-2  border-gray-800 items-center  justify-between text-center">
              <p>High Price</p>
              <span>
                {" "}
                <BsChevronDown />{" "}
              </span>
            </li>
            <li className="text-[13px] min-w-[180px] max-w-[180px] flex border-b-2  border-gray-800 items-center  justify-between text-center">
              <label >Male</label>
              <span>
                {" "}
                <BsChevronDown />{" "}
              </span>
            </li>
            <li className="text-[13px] min-w-[180px] max-w-[180px] flex border-b-2  border-gray-800 items-center  justify-between text-center">
              <p >Female</p>
              <span>
                {" "}
                <BsChevronDown />{" "}
              </span>
            </li>
            <li className="text-[13px] min-w-[180px] max-w-[180px] flex border-b-2  border-gray-800 items-center  justify-between text-center">
              <p >Available</p>
              <span>
                {" "}
                <BsChevronDown />{" "}
              </span>
            </li>
            <li className="text-[13px] min-w-[180px] max-w-[180px] flex border-b-2  border-gray-800 items-center  justify-between text-center">
              <p >Fast Delivery</p>
              <span>
                {" "}
                <BsChevronDown />{" "}
              </span>
            </li>
            <li className="text-[13px] min-w-[180px] max-w-[180px] flex border-b-2  border-gray-800 items-center  justify-between text-center">
              <p >Pre-Order</p>
              <span>
                {" "}
                <BsChevronDown />{" "}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* ///////////////// end of left nav ///////////////////// */}

      <div className="right w-4/5">
        <div className="grid md:grid-cols-4 w-[100%] gap-5">
          <ProductContainer filterData={currentView} />
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
