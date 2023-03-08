import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import ProductItem from "../Components/ProductItem";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Pagination from "../Components/Pagination";
import ProductContainer from "../Components/ProductContainer";

const Shop = () => {
  //fetching the data from json file

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
      } catch (error) {
        console.log(error, "error");
      }
    };
    fetchData();
  }, []);

  //end of fetching the data from json file

  // the pagination function

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(8);
  const indexOfLastPage = currentPage * perPage;
  const indexOfFirstPage = indexOfLastPage - perPage;
  const currentView = data.slice(indexOfFirstPage, indexOfLastPage);

  const nPages = Math.ceil(data.length / perPage);

  // the pagination function

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
              <Link to="/shop">
                <button className=" px-[120px] py-3 text-white rounded">
                  search
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/************************ search dropdown **************************************/}

        {/****************************** medium screens **********************************************/}
        <div
          className=" justify-center m-auto md:container md:grid-cols-12 
         md:justify-between gap-x-7 md:flex it"
        >
          {/*********************** *filters ****************************************/}

          <div className="md:col-span-2 hidden lg:flex">
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

          {/*********************** *main page ****************************************/}

          <div className="md:col-span-10 justify-center">

            <div className="grid md:grid-cols-4 grid-cols-2 justify-center  gap-6">
              <ProductContainer data={currentView} />
            </div>

            <div className="grid justify-center">
            <Pagination
              className=""
              nPages={nPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
