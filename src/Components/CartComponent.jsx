import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import NoItems from "./NoItems";

//redux implementation

import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
  clearCart,
} from "../Redux/cartSlice";

const CartComponent = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const totalAmount = useSelector((state) => state.cartTotalAmount);
  const dispatch = useDispatch();

  let dollarUSlocale = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    useGrouping: true,
  });

  return (
    <>
      <div className="flex flex-col max-w-screen pb-5  mx-10">
        <div className="flex items-center border-b-2 border-b-sky-300 py-6 justify-between">
          <p className="pl-5">my cart</p>
          <p className="pr-5">
            {" "}
            <Link to="/shop">
              <AiOutlineClose />
            </Link>{" "}
          </p>
        </div>

        {/* //main */}

        {cartItems.length <= 0 ? (
          <NoItems />
        ) : (
          <>
            {cartItems.map((cartItem) => (
              <div className="flex border-b-2 py-6 border-b-sky-300  justify-between ">
                <div className="pl-5 flex space-x-5 md:flex-row ">
                  <div className=" md:max-w-[200px] max-w-[50px] ">
                    {" "}
                    <img
                      src={cartItem.subImage2}
                      className=""
                      alt=""
                    />{" "}
                  </div>
                  <div className="min-w-[270px] space-y-4 ">
                    <p className="text-2xl font-medium">{cartItem.name} </p>

                    <div className="flex items-center w-2/3 justify-between">
                      <div className="flex flex-row  items-center">
                        <div className="text-md font-mono">color:</div>
                        
                        <div className='bg-gray-400 h-5 w-5' > </div>
                      </div>
                      <div className="text-md font-mono">size: 32</div>
                    </div>

                    <div className="max-w-[100px] border-black border items-center flex justify-around">
                      <button
                        onClick={() => dispatch(incrementQuantity(cartItem))}
                        className=" "
                      >
                        +
                      </button>
                      <span className="border-r-black border border-l-black px-3">
                        {" "}
                        {cartItem.quantity}
                      </span>
                      <button
                        onClick={() => dispatch(decrementQuantity(cartItem))}
                        className=""
                      >
                        -
                      </button>
                    </div>

                    <p className="text-[20px] font-mono">
                      {" "}
                      ${cartItem.price} X {cartItem.quantity} ={" "}
                      <span>
                        {dollarUSlocale.format(
                          cartItem.quantity * cartItem.price
                        )}
                      </span>{" "}
                    </p>
                  </div>
                </div>

                <div className="pr-5 justify-start ">
                  {" "}
                  <Link    onClick={() => dispatch(removeItem(cartItem))}>
                    {" "}
                    <AiOutlineDelete />{" "}
                  </Link>{" "}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      {/* //last part */}

      {cartItems.length > 0 && 
                <>

        
            <div className="flex flex-col max-w-screen py-9 bg-gray-200 ">
            <div className="flex justify-center items-center">
              <p className="font-mono text-2xl">Payment Summary</p>
            </div>

            <div className="flex flex-col max-w-screen pb-5  mx-10">
              <div className="flex items-center  py-6 justify-between">
                <p className="pl-5 font-mono">subtotal</p>
                <p className="pr-5"> {dollarUSlocale.format(totalAmount)} </p>
                {
                  console.log(totalAmount)
                }
              </div>
            </div>
            <div className="flex flex-col max-w-screen pb-5  mx-10">
              <div className="flex items-center  py-6 justify-between">
                <p className="pl-5 font-mono">delivery fee</p>
                <p className="pr-5"> $50.00</p>
              </div>
            </div>
            <div className="flex flex-col max-w-screen pb-5  mx-10">
              <div className="flex items-center  py-6 justify-between">
                <p className="pl-5 font-mono">total</p>
                <p className="pr-5"> 
                {dollarUSlocale.format(
                          totalAmount + 50
                        )}
                 </p>
              </div>
            </div>

            <div className="flex justify-center min-w-[200px] items-center">
              <button className="bg-gray-900 min-w-[300px] px-9 py-3 text-white">
                checkout
              </button>
            </div>
          </div>
        </>
      }
    </>
  );
};

export default CartComponent;
