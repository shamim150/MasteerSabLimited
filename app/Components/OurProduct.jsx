import React from "react";
import Heading from "./Layer/Heading";
import BoltTag from "./Layer/BoltTag";
import Slider from "./Slider";

const OurProduct = () => {
  return (
    <div id="ourproduct" className="bg-[#F8F8F8] pt-[1px] ">
      <div className="mt-28 mx-auto max-w-7xl py-24 ">
        <Heading className="mx-auto " text="What We Offer" />

        <BoltTag className="my-4 text-center" text="Our Best Solution" />

        <p className="text-center text-black/50 mb-10 md:mb-16 lg:mb-20 text-sm md:text-base lg:text-lg leading-relaxed">
          Get the most of reduction in your teams operating costs for the whole
          product which creates
          <br /> amazing UI/UX experiences.
        </p>
        <Slider />
      </div>
    </div>
  );
};

export default OurProduct;
