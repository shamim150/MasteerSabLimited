import React from "react";

const Button = ({ btntext, className }) => {
  return (
    <div className="md:flex md:justify-center">
      <button
        className={`w-[100px] sm:w-[140px] md:w-[160px] lg:w-[180px] py-2 text-xs sm:py-2.5 sm:text-sm md:py-3 md:text-base lg:py-4 lg:text-lg font-bold bg-[#2CB0E1] hover:bg-black text-white rounded-md transition-all duration-500 ${className}`}
      >
        <p className="hover:scale-105 transition-all duration-300">{btntext}</p>
      </button>
    </div>
  );
};

export default Button;
