import React from "react";
import CartImage from "../assets/cart.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const NoItems = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <LazyLoadImage src={CartImage} alt="" srcset="" />
      <p>Your Cart Is Empty !</p>
    </div>
  );
};

export default NoItems;
