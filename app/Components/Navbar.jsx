"use client";
import { useState } from "react";
import Li from "./Li";
import logo from "../../Assets/logo.png";
import Container from "./Container";
import Image from "next/image";
import { LuMessageCircle } from "react-icons/lu";
import Button from "./Layer/Button";
import { FaWhatsappSquare } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="z-[999] fixed w-full top-0 bg-[#0B0F14]/50 backdrop:blur-md backdrop-blur-sm opacity-90">
      <Container className="flex  items-center justify-between gap-5 p-1 md:p-3">
        {/* Logo */}
        <div className="flex justify-between items-center w-full lg:w-auto">
          <a href="#">
            <Image
              width={60}
              height={80}
              className="h-auto"
              src={logo}
              alt="logo"
            />
          </a>
          {/* Hamburger Icon */}
          <button
            className="sm:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Menu Items */}
        <ul
          className={`text-center   justify-between transition-transform duration-300 ease-in-out flex md:flex-row flex-col bg-black/60 md:bg-transparent absolute top-[99%] left-0 md:gap-3 text-nowrap md:static w-full md:w-auto p-2 md:p-1 transform ${
            isMenuOpen ? "translate-x-0 z-40" : "translate-x-full"
          } md:transform-none md:flex md:z-auto`}
        >
          {/* Menu items go here */}

          <Li href={"/"} className="text-primary" liText="Home" />
          <Li href={"/#about"} liText="About Us" />
          <Li href={"/#ourproduct"} liText="Services" />
          <Li href={"/contact"} liText="Contact" />
        </ul>

      

        {/* Contact & Button */}
        <div className="hidden lg:flex justify-center items-center gap-3">
          <div className="text-4xl">
            <LuMessageCircle className="text-white hover:text-[#2CB0E1] transition-all duration-300 cursor-pointer" />
          </div>
          <div className="font-bold text-sm text-white hover:text-[#2CB0E1] transition-all duration-300 cursor-pointer">
            <p>Message Us</p>
            <a className="text-lg py-2" href="mailto:Info@mastersabplc.com">
              Info@mastersabplc.com
            </a>
          </div>
        </div>

        {/* Mobile Button */}
        <div className="hidden md:flex justify-end items-center gap-3">
  <a
    href="https://wa.me/8801711652303"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#2CB0E1] text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 hover:text-violet-700  transition-all duration-300 flex items-center gap-2"
    
  >
    <FaWhatsappSquare className="size-6 " />

    Let&apos;s Talk
  </a>
</div>
      </Container>
    </nav>
  );
};

export default Navbar;
