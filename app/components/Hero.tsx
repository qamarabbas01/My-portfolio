"use client";

import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-5 lg:px-28 bg-white">
      <div className="w-full lg:w-3/4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 pt-20 lg:pt-0">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
          I’m Qamar Abbas <br />
          <span className="text-red-500">Web & Mobile App Developer</span>
        </h1>

        <p className="text-lg text-gray-700 max-w-2xl leading-relaxed">
          Transforming ideas into exceptional digital experiences with{" "}
          <strong>3+ years of expertise</strong> in front-end development. 
          I craft intuitive, high-performance web and mobile applications
          using cutting-edge technologies like <strong>React</strong>,{" "}
          <strong>Next.js</strong>, <strong>React Native</strong>, and{" "}
          <strong>Expo</strong> — delivering scalable solutions that users love
          and businesses trust.
        </p>

        <button
          onClick={() => window.location.href = "https://www.linkedin.com/in/qamar-abbas-7a39902b6/"}
          className="inline-flex items-center gap-2 bg-orange-500 text-white hover:bg-black hover:text-white transition-all px-6 py-3 rounded-md text-base font-medium shadow-md">
          Hire Me <BsArrowRightShort size={24} />
        </button>
      </div>

      <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
        <Image
          src={require("../assets/mypic.jpg")}
          width={500}
          height={500}
          alt="Qamar Abbas portrait"
          className="rounded-full object-cover shadow-lg"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
