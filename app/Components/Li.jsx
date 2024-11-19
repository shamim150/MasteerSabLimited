"use client"
import Link from "next/link";
import React from "react";



const Li = ({ liText, className, href, children, onclick, iconName }) => {
  return (
    <li onClick={onclick} className=" flex items-center  md:p-1  ">
      <Link
        href={href}
        className={`text-sm font-bold text-white  hover:text-[#2CB0E1] transition-all duration-300
          
          ${className} `}
      >
        {liText} {" "} 
      </Link>

      {children}
    </li>
  );
};

export default Li;
