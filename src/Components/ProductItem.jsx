import React from "react";

const ProductItem = ({ name, imageUrl, price }) => {
  return (
    <div className="max-w-[250px] relative border border-gray-200 rounded-lg shadow  ">
      <div className="p-8 h-[270px] ">
        <img
          src={imageUrl}
          alt=""
          srcset=""
          
          className="object-fit-contain h-full rounded-t-lg w-full"
          objectFit="cover" />
      </div>
      <div>
        <p className="absolute top-2 px-4 text-[13px] left-2 font-mono bg-gray-900 text-white">new</p>
      </div>
      <div className=" px-2 pb-5 flex flex-row justify-between">
        <p className="font-sm text-[15px] font-mono tracking-tight text-gray-900 ">{name}</p>
        <span className="text-[15px] font-bold text-gray-900">${price}</span>
      </div>
      <div className="px-5  py-3 text-center text-white w-full rounded-b-lg 
      hover:bg-gray-700 font-thin text-sm focus:ring-4 focus:outline-none bg-gray-700">
        <button className="">Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
