import React from 'react'
import CartImage from "../assets/cart.png"
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'


const CartComponent = () => {
  return (
    <div className='flex flex-col max-w-screen h-screen space-y-40 mx-10'>
      <div className='flex items-center border-b-2 border-b-sky-300 py-6 justify-between'>
        <p className='pl-5'>my cart</p>
        <p className='pr-5'> <Link to = "/shop"><AiOutlineClose/></Link> </p>
      </div>

      <div className='flex flex-col items-center justify-center '>
        <img src={CartImage} alt="" srcset="" />
        <p>Your Cart Is Empty !</p>
      </div>
    </div>
  )
}

export default CartComponent