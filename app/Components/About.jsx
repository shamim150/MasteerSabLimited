import React from "react";
import Button from "./Layer/Button";
import Image from "next/image";
import about1 from "../../Assets/about1.png";
import about2 from "../../Assets/about2.png";
import about3 from "../../Assets/about3.png";
import Heading from "./Layer/Heading";
import BoltTag from "./Layer/BoltTag";

const About = () => {
  return (
    <div id="about" className=" md:flex px-2 md:px-0 md:items-center md:justify-center md:gap-5 mt-24 mb-40 max-w-7xl mx-auto">
      <div className="md:max-w-[50%]">

        <Heading text="About Our Company"/>
      
       <BoltTag className="py-4" text="We are committed to providing our customers with exceptional."/>
        <p className="mb-4">
          Lorem Ipsum is simply dummy text of free available in market the way
          printing and typesetting industry has been the industry's standard
          dummy text ever.
        </p>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-[#2CB0E1]  "></div>
          <p>Price of additional materials or parts (if needed)</p>
        </div>
        <div className="flex items-center gap-2 my-4">
          <div className="h-4 w-4 rounded-full bg-[#2CB0E1]  "></div>
          <p>Price of additional materials or parts (if needed)</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-[#2CB0E1]  "></div>
          <p>Price of additional materials or parts (if needed)</p>
        </div>
        <Button className="my-2 md:mt-32 " btntext={"know More"} />
      </div>



      <div className=" w-full md:max-w-[50%] relative md:block hidden">
        <div className="flex ">
          <Image src={about1} alt="about1"/>
          <Image className=" md:h-fit " src={about2} alt="about2"/>
        </div>
        <div className="absolute right-0 bottom-0 translate-x-[3%] translate-y-[34%]">
        <Image src={about3} alt="about3"/>
        </div>
        <p className="absolute bottom-0 left-0 translate-y-20 font-bold -skew-y-[25deg] rotate-[25deg] p-4 border border-red-500 ">10+ Years Experience</p>

      
       <Image width={100} height={100} className="absolute left-0 bottom-0 translate-y-[165%] translate-x-[210%]" src="/sun.svg" alt="sun"/>
       
      </div>


      
      <div className=" w-full md:max-w-[50%] relative block md:hidden">
        <div className="flex ">
          <Image height={351} width={315} className="md:w-full md:h-auto w-36" src={about1} alt="about1"/>
          <Image height={152} width={310} className="md:w-full md:h-auto w-36  " src={about2} alt="about2"/>
        </div>
        <div className="absolute right-0 bottom-0 md:translate-x-[3%] -translate-x-0 md:translate-y-[34%] translate-y-[44%]">
        <Image className="md:w-full md:h-auto w-36" height={371} width={378} src={about3} alt="about3"/>
        </div>
        <p className="absolute bottom-0 left-0 translate-y-20 font-bold -skew-y-[25deg] rotate-[25deg] p-4 border border-red-500 ">10+ Years Experience</p>

      
       <Image width={100} height={100} className="absolute left-0 bottom-0  translate-y-[165%] translate-x-[210%]" src="/sun.svg" alt="sun"/>
       
      </div>







    </div>
  );
};

export default About;
