import Image from "next/image";
import React from "react";
import Logo from "../../public/logo.png";
import { SiMinutemailer } from "react-icons/si";
import BoltTag from "./Layer/BoltTag";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineAddIcCall } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-red-400 to-[#7FD9FF] py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        
        {/* Logo and Description */}
        <div className="flex flex-col items-center sm:items-start">
          <div className="flex flex-row gap-3 mb-4">
            <Image className="w-16" src={Logo} alt="Logo" />
            <h1 className="text-[22px] font-bold text-white">Master Sab Limited</h1>
          </div>
          <p className="text-center sm:text-left text-white py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
          
          {/* Email Subscription */}
          <div className="relative w-full sm:w-auto">
            <input
              className="w-full py-3 px-4 rounded-lg border border-emerald-500 outline-none"
              type="text"
              placeholder="Enter your email"
            />
            <button className="w-10 h-10 bg-[#7FD9FF] text-red-800 absolute right-2 top-1/2 transform -translate-y-1/2 rounded-lg flex items-center justify-center">
              <SiMinutemailer className="hover:animate-spin-slow" />
            </button>
          </div>
          <p className="mt-4 text-white">Please select at least one list.</p>
        </div>

        {/* Our Services */}
        <div>
          <BoltTag className="text-[22px]" text="Our Services" />
          <div className="flex flex-col gap-3 mt-4">
            {['Content Writing', 'SEO Optimization', 'Marketing Strategies', 'Design Services', 'Consulting'].map((service, index) => (
              <div key={index} className="group flex items-center">
                <FaArrowRightLong className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 text-red-800 transition-all duration-1000" />
                <p className="hover:pl-4 transition-all duration-300 cursor-pointer hover:text-red-800">{service}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <BoltTag className="text-[22px]" text="Company" />
          <div className="flex flex-col gap-3 mt-4">
            {['About Us', 'Careers', 'Privacy Policy', 'Terms & Conditions', 'FAQ'].map((item, index) => (
              <div key={index} className="group flex items-center">
                <FaArrowRightLong className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 text-red-800 transition-all duration-1000" />
                <p className="hover:pl-4 transition-all duration-300 cursor-pointer hover:text-red-800">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <BoltTag className="text-[22px]" text="Contact Us" />
          <div className="flex items-center gap-4 mt-4">
            <FaMapMarkerAlt className="text-2xl text-red-800" />
            <p className="hover:text-red-800">House No-06, Road No-11, Shekertak, Mohammadpur, Dhaka</p>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <MdOutlineAddIcCall className="text-2xl text-red-800" />
            <a href="tel:+8801761456456" className="hover:text-red-800">+8801761456456</a>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <FaRegMessage className="text-2xl text-red-800" />
            <a href="mailto:mastersabplc.com" className="hover:text-red-800">Info@mastersabplc.com</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
