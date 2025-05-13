import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" flex flex-col lg:flex-row justify-between lg:px-32 px-5 bg-white p-5">
      <div className=" flex gap-10">
        <a href="https://www.linkedin.com/in/qamar-abbas-7a39902b6/">
          <BsInstagram
            size={32}
            className=" hover:text-brightColor transition-all cursor-pointer"
          />
        </a>

        <a href="https://www.linkedin.com/in/qamar-abbas-7a39902b6/">
          <FaFacebook
            size={32}
            className=" hover:text-brightColor transition-all cursor-pointer"
          />
        </a>

        <a href="https://www.linkedin.com/in/qamar-abbas-7a39902b6/">
          <FaLinkedin
            size={32}
            className=" hover:text-brightColor transition-all cursor-pointer"
          />
        </a>

        <a href="https://www.linkedin.com/in/qamar-abbas-7a39902b6/">
          <FaYoutube
            size={32}
            className=" hover:text-brightColor transition-all cursor-pointer"
          />
        </a>
      </div>
      <div className=" flex flex-row items-center cursor-pointer mt-5 lg:mt-0">
        <h1 className=" text-3xl font-semibold">End...</h1>
      </div>
    </div>
  );
};

export default Footer;
