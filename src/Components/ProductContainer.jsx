import React from "react";
import ProductItem from "./ProductItem";

const ProductContainer = ({data}) => {
  return (
    <>
      {data.map((product, index) => (
        <div
          key={product.id}
          className=""
        >
          <ProductItem
            key={index}
            name={product.title}
            imageUrl={product.imgUrl}
            price={product.price}
          />
        </div>
      ))}
    </>
  );
};

export default ProductContainer;
