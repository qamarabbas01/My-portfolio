import React from "react";
import { AiOutlineCodepen } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { BsAndroid, BsWordpress } from "react-icons/bs";
import { GrApple } from "react-icons/gr";
import { PiGameControllerFill } from "react-icons/pi";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center  lg:px-32 px-5 bg-white">
      <h1 className="text-center font-semibold text-4xl  lg:mt-14 lg:mb-4">
        My Services
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-5 mt-4 mb-32">
        <div className="bg-orange-400 flex flex-col items-center  hover:bg-black hover:text-white transition-all hover:-translate-y-2 w-full lg:w-1/4 py-5 gap-4 cursor-pointer rounded-md">
          <div>
            <span>
              <BiCodeAlt size={55} />
            </span>
          </div>
          <h2 className=" text-xl font-semibold">Web Devlopment</h2>
          <p>blog, e-commerce</p>
        </div>

        <div className="bg-orange-400 flex flex-col items-center  hover:bg-black hover:text-white transition-all hover:-translate-y-2 w-full lg:w-1/4 py-5 gap-4 cursor-pointer rounded-md">
          <div>
            <span>
              <BsAndroid size={55} />
            </span>
          </div>
          <h2 className=" text-xl font-semibold">Mobile Devlopment</h2>
          <p>blog, e-commerce</p>
        </div>

        <div className="bg-orange-400 flex flex-col items-center  hover:bg-black hover:text-white transition-all hover:-translate-y-2 w-full lg:w-1/4 py-5 gap-4 cursor-pointer rounded-md">
          <div>
            <span>
              <GrApple size={55} />
            </span>
          </div>
          <h2 className=" text-xl font-semibold">Ios development</h2>
          <p>blog, e-commerce</p>
        </div>

        <div className="bg-orange-400 flex flex-col items-center  hover:bg-black hover:text-white transition-all hover:-translate-y-2 w-full lg:w-1/4 py-5 gap-4 cursor-pointer rounded-md">
          <div>
            <span>
              <AiOutlineCodepen size={55} />
            </span>
          </div>
          <h2 className=" text-xl font-semibold">Freelancing</h2>
          <p>blog, e-commerce</p>
        </div>

        <div className="bg-orange-400 flex flex-col items-center  hover:bg-black hover:text-white transition-all hover:-translate-y-2 w-full lg:w-1/4 py-5 gap-4 cursor-pointer rounded-md">
          <div>
            <span>
              <PiGameControllerFill size={55} />
            </span>
          </div>
          <h2 className=" text-xl font-semibold">Game Devlopment</h2>
          <p>blog, e-commerce</p>
        </div>

        <div className="bg-orange-400 flex flex-col items-center  hover:bg-black hover:text-white transition-all hover:-translate-y-2 w-full lg:w-1/4 py-5 gap-4 cursor-pointer rounded-md">
          <div>
            <span>
              <BsWordpress size={55} />
            </span>
          </div>
          <h2 className=" text-xl font-semibold">WordPress</h2>
          <p>blog, e-commerce</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
