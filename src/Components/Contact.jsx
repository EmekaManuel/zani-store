import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center flex-col mx-auto mb-3 md:mb-0">
      <div className="categories-title flex justify-center text-center md:my-5">
        <h1 className="text-[20px] md:text-[15px] px-8">
          Sign up to our mailing list to recieve exclusive early access on all
          drops. SMS sign ups are not compulsory but are recommended
        </h1>
      </div>

      <div className="flex justify-center flex-col md:space-x-3 md:flex-row mx-10 md:mx-0 my-6 md:my-0 mb-3 md:mb-0">
        <input
          type="text"
          className="bg-white border-2 my-3 border-gray-900 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:outline-none focus:border-blue-500 md:w-[300px] block p-2.5"
          placeholder="Enter your email"
        />
        <input
          type="number"
          className="bg-white border-2 my-3 border-gray-900 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:outline-none focus:border-blue-500 md:w-[300px] block p-2.5"
          placeholder="Mobile number"
        />


      </div>

      <div className="flex justify-center text-center">
        <p className="bg-black text-white xl:px-[265px] xl:py-[10px] px-[150px] py-[10px] md:py-[10px] md:px-[273px] hover:bg-gray-900 cursor-pointer">Subscribe</p>
      </div>
    </div>
  );
};

export default Contact;
