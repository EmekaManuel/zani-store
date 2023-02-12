import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center flex-col md:flex-row mx-5 mb-3 md:mb-0">
      {/******************** our story *****************/}
      <div className=" flex pl-5 flex-col text-left md:w-1/4 md:my-10">
        <h1 className="text-[12px] text-2xl md:text-[25px] my-5">Our Story</h1>
        <p className="md:text-[13px]">
          <p className="py-[7px]">
            our origin story is more of an origin statement. we wanted to design
            what we wanted to wear, so we did.
          </p>

          <p className="py-[7px]">
            since then, that philosophy has become more about the guy we design
            for and the impact he is looking to make. our signature pieces like
            the sureshot joggers and the flintlock tee have come to stand for
            ingenuity, creativity and a constant drive to move forward and
            beyond expectations.
          </p>
          <p className="py-[7px]">
            we keep our impact on the environment low and out standards of
            craftsmanship and customer service high.
          </p>
          <p className="py-[7px]">
            we're for good times and even greater design and we create what you
            want to wear because we wear it too.
          </p>
          <p className="py-[7px]">we are zani</p>
        </p>
      </div>
      {/******************** our story ends *****************/}

      {/******************** online store *****************/}

      <div className=" flex pl-5 flex-col md:w-1/4 text-left md:my-10">
        <h1 className="text-[12px] text-2xl md:text-[25px] my-5">
          Online Store
        </h1>
        <ul className="md:text-[13px]">
          <p className="pb-[5px]">sureshot jogger</p>
          <p className="pb-[5px]">flintlock tees</p>
          <p className="pb-[5px]">sustainable products</p>
          <p className="pb-[5px]">zani pants</p>
          <p className="pb-[5px]">zani jogger</p>
          <p className="pb-[5px]">zani shorts</p>
          <p className="pb-[5px]">zani tee-shirts</p>
          <p className="pb-[5px]">zani sale</p>
          <p className="pb-[5px]">chinos</p>
          <p className="pb-[5px]">denim</p>
          <p className="pb-[5px]">joggers</p>
          <p className="pb-[5px]">cargo pants</p>
          <p className="pb-[5px]">hoodies</p>
          <p className="pb-[5px]">ree grn</p>
          <p className="pb-[5px]">gill cards</p>
        </ul>
      </div>

      {/******************** online store ends *****************/}

      {/******************** more info starts *****************/}

      <div className=" flex pl-5 flex-col md:w-1/4 text-left md:my-10">
        <h1 className="text-[12px] text-2xl md:text-[25px] my-5">More Info</h1>
        <ul className="md:text-[13px]">
          <p className="pb-[5px]">about</p>
          <p className="pb-[5px]"> contact us </p>
          <p className="pb-[5px]">return policy</p>
          <p className="pb-[5px]">submit a return request</p>
          <p className="pb-[5px]">frequently asked questions</p>
          <p className="pb-[5px]">shipping info</p>
          <p className="pb-[5px]">{"technical & privacy"}</p>
          <p className="pb-[5px]">{"sales & distribution"}</p>
          <p className="pb-[5px]">sustainability</p>
          <p className="pb-[5px]">site reviews</p>
          <p className="pb-[5px]">promotions</p>
          <p className="pb-[5px]">zani loyalty</p>
          <p className="pb-[5px]">refer a friend</p>
          <p className="pb-[5px]">ambassador program</p>
          <p className="pb-[5px]">those who wear</p>
        </ul>
      </div>

      {/******************** more info starts *****************/}

      <div className=" flex pl-5 flex-col md:w-1/4 text-left md:my-10">
        <h1 className="text-[12px] text-2xl md:text-[25px] my-5">
          Stay Up to Date
        </h1>
        <p className="md:text-[13px]">
          take 10% off your order when you sign up to our newsletter plus be the
          first to hear about new drops plus get VIP access to exclusive
          releases, restocks, sales and more.
        </p>
        <input
          type="number"
          className="bg-white relative border-2 my-3 ml-[-3px] mr-3 border-gray-900 text-gray-900 text-sm rounded only:odd:md:w-[180px] block p-2.5"
          placeholder="enter your email"
        />
      </div>
    </div>
  );
};

export default Footer;
