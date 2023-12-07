"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { NavList } from "./NavList";
import Hamburger from "./Hamburger";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavTop, setIsNavTop] = useState(true);

  const changeNavBg = () => setIsNavTop(window.scrollY < 75);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeNavBg);
    }
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  return (
    <div
      className={`navbar px-8 justify-between mx-auto pt-3 fixed top-0 transition-all duration-300  z-10 ${
        isNavTop ? "text-white " : "text-black bg-white  shadow-xl"
      } ${isOpen && isNavTop && "bg-black  shadow-xl"}`}
    >
      <Link className="" href="/">
        <Logo />
      </Link>

      <div className="hidden lg:block flex-none">
        <ul className="menu menu-horizontal px-1 text-lg">
          <NavList largeScreen={true} />
        </ul>
      </div>
      <div className="block lg:hidden">
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        <div
          className={` absolute top-full inset-x-0 transition-all duration-200 max-h-0 overflow-clip  p-0 shadow-xl ${
            isOpen && " max-h-screen"
          } ${isNavTop ? "bg-black" : "bg-white"}`}
        >
          <ul className="menu">
            <NavList setIsOpen={setIsOpen} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
