import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-slate-50 pb-5">
        <div className="mt-16">
          <h1 className="text-4xl font-semibold text-center lg:mt-2 mb-24">
            About me
          </h1>
        </div>

        <div className="-mb-10 flex gap-8 lg:flex-row items-center  ">
          <div className="mt-32 ">
            <h2 className="text-5xl font-semibold ">
              Hi there I am Kumail abbas <br />{" "}
              <span className="text-red-500">frontend</span> devloper
            </h2>
            <p className="mt-4 lg:mt-2 font-sans">
              Welcome to my personal portfolio. I am kumail abbas, a frontend
              developer with a passion <br /> for transforming digital
              landscapes. My journey into the world of web development began{" "}
              <br />
              with a curiosity to build website that not only look great but
              also function seamlessly.
            </p>{" "}
            <br />
            <a
              href=""
              className="w-32 p-3 rounded-sm bg-orange-400 hover:bg-gray-950 hover:text-white mt-4 flex  gap-2 "
            >
              Hire me <FaArrowRight className="mt-1" />
            </a>
            <br />
            <br />
          </div>
          <div>
            <Image
              className="rounded-lg ml-20"
              src={"/Kumail.jpg"}
              width={570}
              height={50}
              alt="kumail"
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-rose-800">My Skills</h2>
        </div>
        <div>
          <h3 className="mt-3 text-xl font-bold">HTML</h3>
          <div>
            <h3 className="text-end">90%</h3>
            <div className="w-full h-2 bg-slate-300 rounded-full">
              <div className={`w-[90%] h-2 bg-orange-500 rounded-full `}></div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="mt-3 text-xl font-bold">CSS</h3>
          <div>
            <h3 className="text-end">80%</h3>
            <div className="w-full h-2 bg-slate-300 rounded-full">
              <div className={`w-[80%] h-2 bg-orange-500 rounded-full `}></div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="mt-3 text-xl font-bold">JavaScript</h3>
          <div>
            <h3 className="text-end">95%</h3>
            <div className="w-full h-2 bg-slate-300 rounded-full">
              <div className={`w-[95%] h-2 bg-orange-500 rounded-full `}></div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mt-3 text-xl font-bold">TypeScript</h3>
          <div>
            <h3 className="text-end">75%</h3>
            <div className="w-full h-2 bg-slate-300 rounded-full">
              <div className={`w-[75%] h-2 bg-orange-500 rounded-full `}></div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mt-3 text-xl font-bold">React JS/TS</h3>
          <div>
            <h3 className="text-end">80%</h3>
            <div className="w-full h-2 bg-slate-300 rounded-full">
              <div className={`w-[80%] h-2 bg-orange-500 rounded-full `}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
