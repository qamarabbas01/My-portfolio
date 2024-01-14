"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed w-full z-10">
      <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="flex flex-row items-center cursor-pointer">
          <h1 className="text-3xl font-bold font-mono">Kumail Bahi.</h1>
        </div>

        <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
          <a
            href="#home"
            className="hover:text-orange-400 transition-all  cursor-pointer font-semibold"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-orange-400  transition-all cursor-pointer  font-semibold"
          >
            About Me
          </a>
          <a
            href="#services"
            className="hover:text-orange-400  transition-all cursor-pointer  font-semibold"
          >
            Services
          </a>

          <a
            href="#experience"
            className="hover:text-orange-400  transition-all cursor-pointer  font-semibold"
          >
            Experience
          </a>
          <a
            href="#portfolio"
            className="hover:text-orange-400  transition-all cursor-pointer  font-semibold"
          >
            Portfolio
          </a>
          <a
            href="https://www.instagram.com/qamarabbas_14/"
            className="rounded-lg bg-red-400 p-3 hover:bg-orange-400  transition-all cursor-pointer  font-semibold w-40 text-center"
          >
            Contact US
          </a>
        </nav>

        <div className="lg:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={28} onClick={handleChange} />
          ) : (
            <HiOutlineMenuAlt1 size={28} onClick={handleChange} />
          )}
        </div>
      </div>
      <div
        className={`${
          menu ? "translate-x-0" : "translate-x-full"
        } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center z-10 pt-8 gap-8 w-full h-fit transition-transform duration-300 `}
      >
        <a
          href="#home"
          className="hover:text-orange-400 transition-all  cursor-pointer font-semibold"
          onClick={closeMenu}
        >
          Home
        </a>
        <a
          href="#about"
          className="hover:text-orange-400  transition-all cursor-pointer  font-semibold"
          onClick={closeMenu}
        >
          About Me
        </a>
        <a
          href="#services"
          className="hover:text-orange-400  transition-all cursor-pointer  font-semibold"
          onClick={closeMenu}
        >
          Services
        </a>
        <a
          href="#education"
          className="hover:text-orange-400  transition-all cursor-pointer  font-semibold"
          onClick={closeMenu}
        >
          Eduaction
        </a>
        <a
          href="#experience"
          className="hover:text-orange-400  transition-all cursor-pointer  font-semibold"
          onClick={closeMenu}
        >
          Experience
        </a>
        <a
          href="#portfolio"
          className="hover:text-orange-400  transition-all cursor-pointer  font-semibold"
          onClick={closeMenu}
        >
          Portfolio
        </a>
        <a
          href="#contact"
          className="rounded-lg bg-red-400 p-3 hover:bg-orange-400  transition-all cursor-pointer  font-semibold w-40 text-center"
          onClick={closeMenu}
        >
          Contact US
        </a>
      </div>
    </div>
  );
};

export default Navbar;
