import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import Image1 from "../assets/reviews/reviews/Ellipse 1 (1).png";
import Image2 from "../assets/reviews/reviews/Ellipse 1 (2).png";
import Image3 from "../assets/reviews/reviews/Ellipse 1 (3).png";

const Reviews = () => {
  return (
    <div className="mx-auto flex  flex-col  mb-8">
      <div className=" flex flex-col justify-center items-center text-center md:my-5">
        <div className="text-3xl font-mono gap-y-2 flex-col flex text-black">
          <span>5.98</span>
          <span className=" text-[19px] flex">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </span>
          <span className="text-[13px] text-slate-600">in reviews</span>
        </div>
      </div>

      {/* // second part  */}

      <div className="  w-screen pt-5">
        <div className="justify-between items-center text-gray-500 min-w-max mx-5 flex border-b-zinc-300 border-b-2 pb-2 ">
          <span className=" pl-3">reviews</span>
          <span className="border border-1 border-black p-2">write a review</span>
        </div>

        <div className="justify-between min-w-max mx-5 flex py-3 text-gray-500">
          <p className="pl-3">16 reviews</p>
        </div>
      </div>

        {/* details */}
      <div className="justify-between pt-5 flex mx-5">
        <span className="pl-3 flex flex-row gap-x-5">
        <div className="hidden lg:max-h-[70px] max-w-[80px] md:flex">
            {" "}
            <img src={Image1} alt="" />{" "}
          </div>

          <div className="flex flex-col space-y-3 max-w-[602px]">
            <p>Kelvin Kent</p>
            <span className=" text-[19px] flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </span>{" "}
            <p className="text-gray-800 text-[15px]">
              contemporary muller clothing
            </p>
            <p className=" text-gray-500 text-[13px]">
              contemporary sweatshirt mulberry brown Lorem ipsum dolor sit amet
              consectetur. Habitant id tortor sollicitudin egestas proin lacus.
              Aliquam odio netus in in quam. Sem consectetur dignissim sit ante
              arcu nec elit ultricies maecenas. Proin placerat tincidunt at id
              aliquam et. Aliquam eget elementum lectus sed bibendum etiam
              aliquet eu volutpat. Ut vestibulum sit viverra sagittis fermentum
              dignissim lorem. Laoreet amet massa sed tellus cras elementum eget
              eu egestas. Turpis arcu sit.
            </p>
          </div>
        </span>

        {/* date */}
        <span className="text-sm hidden md:flex text-gray-500 pr-3">06 Oct, 2022</span>
      </div>
        {/* details */}
      <div className="justify-between pt-5 flex mx-5">
        <span className="pl-3 flex flex-row gap-x-5">
          <div className="hidden lg:max-h-[70px] max-w-[80px] md:flex">
            {" "}
            <img src={Image2} alt="" />{" "}
          </div>

          <div className="flex flex-col space-y-3 max-w-[602px]">
            <p>Raynold Kent</p>
            <span className=" text-[19px] flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </span>{" "}
            <p className="text-gray-800 text-[15px]">
              contemporary Kevin clothing
            </p>
            <p className=" text-gray-500 text-[13px]">
              contemporary sweatshirt mulberry brown Lorem ipsum dolor sit amet
              consectetur. Habitant id tortor sollicitudin egestas proin lacus.
              Aliquam odio netus in in quam. Sem consectetur dignissim sit ante
              arcu nec elit ultricies maecenas. Proin placerat tincidunt at id
              aliquam et. Aliquam eget elementum lectus sed bibendum etiam
              aliquet eu volutpat. Ut vestibulum sit viverra sagittis fermentum
              dignissim lorem. Laoreet amet massa sed tellus cras elementum eget
              eu egestas. Turpis arcu sit.
            </p>
          </div>
        </span>

        {/* date */}
        <span className="text-sm hidden md:flex text-gray-500 pr-3">06 Oct, 2022</span>
      </div>
        {/* details */}
      <div className="justify-between pt-5 flex mx-5">
        <span className="pl-3 flex flex-row gap-x-5">
        <div className="hidden lg:max-h-[70px] max-w-[80px] md:flex">
            {" "}
            <img src={Image3} alt="" />{" "}
          </div>

          <div className="flex flex-col space-y-3 max-w-[602px]">
            <p>Muller Gray</p>
            <span className=" text-[19px] flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </span>{" "}
            <p className="text-gray-800 text-[15px]">
              contemporary muller clothing
            </p>
            <p className=" text-gray-500 text-[13px]">
              contemporary sweatshirt mulberry brown Lorem ipsum dolor sit amet
              consectetur. Habitant id tortor sollicitudin egestas proin lacus.
              Aliquam odio netus in in quam. Sem consectetur dignissim sit ante
              arcu nec elit ultricies maecenas. Proin placerat tincidunt at id
              aliquam et. Aliquam eget elementum lectus sed bibendum etiam
              aliquet eu volutpat. Ut vestibulum sit viverra sagittis fermentum
              dignissim lorem. Laoreet amet massa sed tellus cras elementum eget
              eu egestas. Turpis arcu sit.
            </p>
          </div>
        </span>

        {/* date */}
        <span className="text-sm hidden md:flex text-gray-500 pr-3">06 Oct, 2022</span>
      </div>
    </div>
  );
};

export default Reviews;
