import React from "react";
import { Link } from "react-router-dom";


const ProductContainer = ({ filterData }) => {
  return (
    <>
      {filterData.map((product) => {
        return (
          <Link to = {`/shop/${product.id}`} key={product.id}>

          <div
            className='"max-w-[250px] pb-5 relative rounded-lg shadow-sm '
            key={product.id}
          >
            <div>
              <div className="flex flex-col">
                <div className="h-[350px] lg:h-[350px] md:h-[270px]">
                  <img
                    src={product.image}
                    alt=""
                    srcset=""
                    className="object-fit-contain h-full rounded-t-lg w-full"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div>
                <p className="absolute top-2 px-4 text-[13px] left-2 bg-black font-mono text-white">
                  new
                </p>
                <div className=" px-2 pt-5 flex flex-col space-y-2">
                  <p className="font-sm text-[15px] font-mono tracking-tight text-gray-900 ">
                    {product.name}
                  </p>
                  <span className="text-[15px] font-bold text-gray-900">
                    ${product.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
          </Link>

        );
      })}
    </>
  );
};

export default ProductContainer;
