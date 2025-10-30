"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#portfolio", label: "Portfolio" },
];

const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenu(false);
  }, [pathname]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu(false);
    };
    if (menu) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [menu]);

  const toggleMenu = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);

  const isActive = (href: string) => {
    if (href === "#home") return pathname === "/";
    return false;
  };

  return (
    <>
      {menu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <header className="fixed w-full z-50 top-0">
        <div
          className={`flex flex-row justify-between items-center px-5 md:px-32 py-4 bg-white transition-all duration-300 ${
            scrolled ? "shadow-lg py-3" : "shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          }`}
        >
          <Link href="/" className="flex items-center group">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-300">
              QA<span className="text-gray-900">.</span>
            </h1>
          </Link>

          <nav className="hidden lg:flex flex-row items-center text-base font-medium gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative hover:text-orange-500 transition-colors duration-200 font-semibold group ${
                  isActive(item.href) ? "text-orange-500" : "text-gray-700"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-red-400 to-orange-400 px-6 py-2.5 hover:from-orange-400 hover:to-red-400 hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-white shadow-md"
            >
              Contact Me
            </Link>
          </nav>

          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
          >
            {menu ? (
              <AiOutlineClose
                size={28}
                className="text-gray-900 transition-transform duration-300 rotate-90"
              />
            ) : (
              <HiOutlineMenuAlt1
                size={28}
                className="text-gray-900 transition-transform duration-300"
              />
            )}
          </button>
        </div>

        <nav
          className={`fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-gray-900 to-black text-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
            menu ? "translate-x-0" : "translate-x-full"
          }`}
          aria-hidden={!menu}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Menu
              </h2>
              <button
                onClick={closeMenu}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <AiOutlineClose size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-2 p-6 flex-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="text-lg font-semibold py-3 px-4 rounded-lg hover:bg-gray-800 hover:text-orange-400 transition-all duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="p-6 border-t border-gray-700">
              <Link
                href="/contact"
                onClick={closeMenu}
                className="block w-full text-center rounded-full bg-gradient-to-r from-red-400 to-orange-400 px-6 py-3 hover:from-orange-400 hover:to-red-400 transition-all duration-300 font-semibold text-white shadow-lg"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
