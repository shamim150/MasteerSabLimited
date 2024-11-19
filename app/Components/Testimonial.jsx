import React from "react";
import Heading from "./Layer/Heading";
import BoltTag from "./Layer/BoltTag";
import ClientSlider from "./ClientSlider";

const Testimonial = () => {
  return (
 <div className=" bg-[#F8F8F8] py-20">
       <div className="max-w-7xl mx-auto ">
      <div>
        <div className="flex flex-col items-center justify-center"> 
          <Heading className="" text="Testimonial" />
          <BoltTag className="my-4" text="What They Are Saying" />
          <p className="text-center">
            Get the most of reduction in your teams operating costs for the
            whole product which creates <br /> amazing UI/UX experiences
          </p>
        </div>

        <ClientSlider/>
      </div>
    </div>
 </div>
  );
};

export default Testimonial;
