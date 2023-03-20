import React from 'react'
import SignUpImage from '../assets/Rectangle 3.png'

import { Link } from 'react-router-dom'

const signUpHero = () => {
  return (
   //********************image**********************************//
   <div className="w-screen relative md:flex md:flex-row h-[screen] md:h-full xl:h-[700px] my-[70px] md:mt-[10px] ">
   <img
     src={SignUpImage}
     className="w-full hidden md:flex md:visible md:w-1/2 h-4/6 object-cover md:h-full"
     alt=""
     srcSet=""
   />
 
   <div className="absolute hidden md:visible bg-black bottom-[150px] md:bottom-[70px] rounded left-5 md:flex items-center justify-center">
     <p className="text-white text-[15px] px-4 py-2 tracking-widest">
       Take 3% Off
     </p>
   </div>
 
   {/*******************main hero *********************/}
   <div className="relative md:relative top-[10px] md:top-[10px] xl:top-[100px] w-full md:w-1/2 h-full flex flex-col text-center p-6 ">
     
     <div className='flex text-center justify-center'>create an account</div>
     
     <div className="flex mt-4  bg-white border-2 border-gray-700 mx-auto p-1 xl:max-w-[600px] w-full">
       <input
         type="text"
         className="bg-white relative my-3 pl-5 text-gray-900 text-sm rounded-sm focus:ring-black focus:outline-none focus:border-black md:w-[180px] block"
         placeholder="first name"
       />
     </div>
 
     <div className="flex mt-4  bg-white border-2 border-gray-700 mx-auto p-1 xl:max-w-[600px] w-full">
       <input
         type="text"
         className="bg-white relative my-3 pl-5 text-gray-900 text-sm rounded-sm focus:ring-black focus:outline-none focus:border-black md:w-[180px] block"
         placeholder="last name"
       />
     </div>

     <div className="flex mt-4  bg-white border-2 border-gray-700 mx-auto p-1 xl:max-w-[600px] w-full">
       <input
         type="text"
         className="bg-white relative my-3 pl-5 text-gray-900 text-sm rounded-sm focus:ring-black focus:outline-none focus:border-black md:w-[180px] block"
         placeholder="email"
       />
     </div>
     <div className="flex mt-4  bg-white border-2 border-gray-700 mx-auto p-1 xl:max-w-[600px] w-full">
       <input
         type="text"
         className="bg-white relative my-3 pl-5 text-gray-900 text-sm rounded-sm focus:ring-black focus:outline-none focus:border-black md:w-[180px] block"
         placeholder="password"
       />
     </div>
 
     <div className="flex mt-4 justify-center items-center bg-black mx-auto p-1 max-w-[600px] w-full">
       <button className=" px-[120px] py-3 text-white rounded">
         sign up
       </button>
     </div>
 
    
 
     <div className='flex text-center justify-center flex-col pt-[10px] space-y-[15px] xl:flex-row md:flex-row xl:space-x-[250px] md:space-x-[50px]'>
       <p> <Link to = '/'>return to store</Link> </p>
     </div>
 
 
   </div>
 </div>
  )
}

export default signUpHero