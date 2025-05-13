"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const router = useRouter();

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <div className="fixed w-full z-10">
      <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-all duration-300">
        <div className="flex flex-row items-center cursor-pointer">
          <h1 className="text-3xl font-bold">Coder</h1>
        </div>

        <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
          {["#home", "#about", "#services", "#experience", "#portfolio"].map(
            (section) => (
              <Link
                key={section}
                href={section}
                className={`hover:text-orange-400 transition-all duration-200 cursor-pointer font-semibold ${isActive(section) ? "text-orange-400" : ""
                  }`}
              >
                {section.replace("#", "").replace(/^\w/, (c) => c.toUpperCase())}
              </Link>
            )
          )}
          <Link
            href="https://www.linkedin.com/in/qamar-abbas-7a39902b6/"
            className="rounded-full bg-gradient-to-r from-red-400 to-orange-400 p-3 hover:from-orange-400 hover:to-red-400 transition-all duration-300 cursor-pointer font-semibold w-40 text-center text-white shadow-lg"
          >
            Contact Us
          </Link>
        </nav>

        <div className="lg:hidden flex items-center">
          {menu ? (
            <AiOutlineClose
              size={28}
              onClick={handleChange}
              aria-label="Close menu"
              className="transition-transform duration-300"
            />
          ) : (
            <HiOutlineMenuAlt1
              size={28}
              onClick={handleChange}
              aria-label="Open menu"
              className="transition-transform duration-300"
            />
          )}
        </div>
      </div>

      <div
        className={`transform ${menu ? "translate-x-0" : "translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center z-10 pt-8 gap-8 w-full h-fit transition-transform duration-500 ease-in-out`}
      >
        {[
          "#home",
          "#about",
          "#services",
          "#education",
          "#experience",
          "#portfolio",
          "#contact",
        ].map((section) => (
          <Link
            key={section}
            href={section}
            className="hover:text-orange-400 transition-colors duration-200 cursor-pointer font-semibold"
            onClick={closeMenu}
          >
            {section.replace("#", "").replace(/^\w/, (c) => c.toUpperCase())}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
