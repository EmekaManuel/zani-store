import React from 'react'
import CartComponent from '../Components/CartComponent'
import { Toaster } from 'react-hot-toast'
const cartPage = () => {
  return (
    <>
   <div>
    <Toaster/>
    <CartComponent/>
   </div>
    </>
  )
}

export default cartPage