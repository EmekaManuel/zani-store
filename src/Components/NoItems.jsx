import React from "react";
import CartImage from "../assets/cart.png";

const NoItems = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <img src={CartImage} alt="" srcset="" />
      <p>Your Cart Is Empty !</p>
    </div>
  );
};

export default NoItems;
