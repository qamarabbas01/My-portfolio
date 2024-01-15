"use client";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:flex-row items-center lg:px-32 px-5 ">
      <div className="flex flex-col text-center lg:text-start lg:items-start w-full lg:w-3/4 space-y-4 pt-56">
        <h1 className="text-6xl font-semibold ">
          I am Kumail Abbas <br />
          <span className="text-red-400">Front-end </span>
          Developer
        </h1>
        <p className="text-lg font-sans ">
          Hello there! I am Kumail Abbas, a passionate frontend developer
          dedicated to crafting immersive and user-friendly web experiences.
          Whether it is building pixel-perfect interfaces or bringing ideas to
          life through code, I thrive on turning concepts into captivating
          digital realities.
        </p>
        <div>
          <button className="flex flex-row justify-center items-center gap-3 bg-orange-400 hover:bg-black hover:text-white transition-all px-4 py-2 rounded-md cursor-pointer  ">
            Hire Me <BsArrowRightShort />
          </button>
        </div>
      </div>
      <Image
        className="rounded"
        src={"/Hero1.jpg"}
        width={670}
        height={100}
        alt="kumail"
      />
    </div>
  );
};

export default Hero;
