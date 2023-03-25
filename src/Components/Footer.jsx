import React from "react";
import { BsFacebook, BsGoogle, BsInstagram, BsPinterest, BsSpotify, BsTwitch, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <>
    <div className="flex justify-center flex-col md:flex-row mx-5 mb-3 md:mb-0">
      {/******************** our story *****************/}
      <div className=" flex pl-5 flex-col text-left md:w-1/4 md:my-10">
        <h1 className="text-[12px] text-2xl md:text-[25px] my-5">Our Story</h1>
        <p className="md:text-[14px]">
          <p className="py-[7px]">
            Our origin story is more of an origin statement. We wanted to design
            what we wanted to wear, so we did.
          </p>

          <p className="py-[7px]">
            Since then, that philosophy has become more about the guy we design
            for and the impact he is looking to make. Our signature pieces like
            the sureshot joggers and the flintlock tee have come to stand for
            ingenuity, creativity and a constant drive to move forward and
            beyond expectations.
          </p>
          <p className="py-[7px]">
            We keep our impact on the environment low and out standards of
            craftsmanship and customer service high.
          </p>
          <p className="py-[7px]">
            We're for good times and even greater design and we create what you
            want to wear because we wear it too.
          </p>
          <p className="py-[7px]">We are Zani.</p>
        </p>
      </div>
      {/******************** our story ends *****************/}

      {/******************** online store *****************/}

      <div className=" flex pl-5 flex-col md:w-1/4 text-left md:my-10">
        <h1 className="text-[12px] text-2xl md:text-[25px] my-5">
          Online Store
        </h1>
        <ul className="md:text-[14px]">
          <a href="">
            <p className="pb-[5px]">Sureshot Jogger</p>
          </a>

          <a href="">
            <p className="pb-[5px]">Flintlock Tees</p>
          </a>

          <a href="">
            <p className="pb-[5px]">Sustainable Products</p>
          </a>

          <a href="">
            <p className="pb-[5px]">Zani Pants</p>
          </a>

          <a href="">
            <p className="pb-[5px]">Zani Jogger</p>
          </a>

          <a href="">
            <p className="pb-[5px]">Zani Shorts</p>
          </a>

          <a href="">
            <p className="pb-[5px]">Zani Tee-shirts</p>

          </a>

          <a href="">
            <p className="pb-[5px]">Zani Sale</p>

          </a>

          <a href="">
            <p className="pb-[5px]">Chinos</p>

          </a>

          <a href="">
            <p className="pb-[5px]">Denim</p>

          </a>

          <a href="">
            <p className="pb-[5px]">Joggers</p>

          </a>

          <a href="">
            <p className="pb-[5px]">Cargo Pants</p>

          </a>

          <a href="">
            <p className="pb-[5px]">Hoodies</p>

          </a>

          <a href="">
            <p className="pb-[5px]">Ree Grn</p>

          </a>

          <a href="">
            <p className="pb-[5px]">Gill Cards</p>
          </a>
        </ul>
      </div>

      {/******************** online store ends *****************/}

      {/******************** more info starts *****************/}

      <div className=" flex pl-5 flex-col md:w-1/4 text-left md:my-10">
        <h1 className="text-[12px] text-2xl md:text-[25px] my-5">More Info</h1>
        <ul className="md:text-[14px]">
          <a href="">
            <p className="pb-[5px]">About</p>
          </a>

          <a href="">
            <p className="pb-[5px]">Contact Us </p>
          </a>

          <a href="">
            <p className="pb-[5px]">Return Policy</p>
          </a>

          <a href="">
            <p className="pb-[5px]">Submit a Return Request</p>
          </a>

          <a href="">
            <p className="pb-[5px]">Frequently AskedQuestions</p>
          </a>

          <a href="">
            <p className="pb-[5px]">Shipping Info</p>
          </a>

          <a href="">
            <p className="pb-[5px]">Technical & Privacy</p>
          </a>

          <a href="">
            <p className="pb-[5px]">Sales & Distribution</p>
          </a>

          <a href="">
            <p className="pb-[5px]">Sustainability</p>
          </a>

          <a href="">
            <p className="pb-[5px]">Site Reviews</p>
          </a>

          <a href="">
            <p className="pb-[5px]">Promotions</p>
          </a>

          <a href="">
            <p className="pb-[5px]">Zani Loyalty</p>
          </a>

          <a href="">
            <p className="pb-[5px]">Refer a Friend</p>
          </a>

          <a href="">
            <p className="pb-[5px]">Ambassador Program</p>
          </a>

          <a href="">
            <p className="pb-[5px]">Those Who Wear</p>
          </a>
        </ul>
      </div>

      {/******************** more info starts *****************/}

      <div className=" flex pl-5 flex-col md:w-1/4 text-left md:my-10">
        <h1 className="text-[12px] text-2xl md:text-[25px] my-5">
          Stay Up to Date
        </h1>
        <p className="md:text-[14px]">
          Take 10% off your order when you sign up to our newsletter. Plus, be the
          first to hear about new drops plus get VIP access to exclusive
          releases, restocks, sales and more.
        </p>
        <input
          type="email"
          className="bg-white relative border-2 my-3 ml-[-3px] mr-3 border-gray-900 text-gray-900 text-sm rounded only:odd:md:w-[180px] block p-2.5"
          placeholder="Enter your email"
        />
        <p className="bg-black p-2 text-center my-3 ml-[-3px] mr-3 justify-center  rounded only:odd:md:w-[180px] block text-white">send</p>
      </div>


    </div>
      <div className="flex justify-start flex-col md:flex-row mx-5 pb-5 md:mb-0">
        <span className="pl-5 gap-x-5 pb-4 flex">

        <BsGoogle/>
        <BsFacebook/>
        <BsInstagram/>
        <BsTwitter/>
        <BsSpotify/>
        <BsPinterest/>
        <BsTwitch/>
        </span>


      </div>
    </>
  );
};

export default Footer;
