import React from "react";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

import { PRODUCTS } from "../../data/products";
import ProductItem from "../Components/ProductItem";
const Shop = () => {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto px-4 mt-5">
        <div className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 gap-4 flex flex-col ">
            {PRODUCTS.map((product, index) => {
              return (
                <ProductItem
                  key={index}
                  name={product.title}
                  imageUrl={product.imgUrl}
                  price = {product.price}
                />
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
