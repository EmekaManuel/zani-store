import React, { useState, useEffect } from "react";

const NumberCounter = ({ quantity, updateQuantity }) => {

    const [userInput, setUserInput] = useState(quantity)

    useEffect(() => {
        updateQuantity(userInput)
    }, [userInput])



  return (
    <div className="w-32">
      <label
        htmlFor="custom-number-input"
        className="w-full text-black-700 text-sm font-semibold"
      >
        Quantity
      </label>
      <div className="flex flex-row h-10 w-full rounded-lg relative mt-1 bg-transparent">
        <button
          onClick={() => updateQuantity(quantity - 1)}
          className="bg-gray-300 text-gray-600 hover:bg-gray-400 h-full w-20 rounded-1 cursor-pointer"
        ></button>
        <span className="m-auto text-2xl font-thin">-</span>
      </div>

      <input
        type="number"
        className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md flex items-center text-gray-700 "
        name="custom-input-number"
        value={quantity}
        onChange={() => updateQuantity(event.target.value)}
      />

      <div className="flex flex-row h-10 w-full rounded-lg relative mt-1 bg-transparent">
        <button
          onClick={() => updateQuantity(quantity + 1)}
          className="bg-gray-300 text-gray-600 hover:bg-gray-400 h-full w-20 rounded-1 cursor-pointer"
        ></button>
        <span className="m-auto text-2xl font-thin">+</span>
      </div>
    </div>
  );
};

export default NumberCounter;
