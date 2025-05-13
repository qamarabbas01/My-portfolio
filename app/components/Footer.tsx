"use client";

import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t mt-16 py-6 px-5 lg:px-32 text-gray-700">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <BsInstagram
              size={28}
              className="hover:text-orange-500 transition-all cursor-pointer"
            />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook
              size={28}
              className="hover:text-orange-500 transition-all cursor-pointer"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/qamar-abbas-7a39902b6/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin
              size={28}
              className="hover:text-orange-500 transition-all cursor-pointer"
            />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube
              size={28}
              className="hover:text-orange-500 transition-all cursor-pointer"
            />
          </a>
        </div>

        <div className="text-sm text-center lg:text-right">
          © {currentYear} Qamar Abbas — Web & Mobile App Developer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
