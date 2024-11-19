import React from "react";
import Heading from "./Layer/Heading";
import BoltTag from "./Layer/BoltTag";
import Image from "next/image";
import black from "../../public/black.png";
import people from "../../public/people.png";
import Link from "next/link";
import svg from "../../public/svg.gif"

const OurVideos = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 px-4 sm:px-6 lg:px-8">
      <div>
        <Heading className="mx-auto" text="Our Videos" />
        <BoltTag className="my-2 text-center" text="Our Company Activities" />
        <p className="text-center mb-10">
          Get the most of reduction in your teams operating costs for the whole
          product which creates <br /> amazing UI/UX experiences.
        </p>

        <div className="relative flex flex-col items-center mt-12 sm:mt-20 lg:mt-52">
          <div>
            <Image width={1280} height={380} src={black} alt="black" />

            <div className="absolute bottom-[15%] flex justify-center items-center w-full gap-x-48 ">
              <div>
                <h2 className="text-white text-5xl mb-3 font-bold">450+</h2>
                <p className="text-white text-nowrap ">Happy Customer</p>
              </div>
              <div>
                <h2 className="text-white text-5xl mb-3 font-bold">450+</h2>
                <p className="text-white text-nowrap ">Happy Customer</p>
              </div>
              <div>
                <h2 className="text-white text-5xl mb-3 font-bold">450+</h2>
                <p className="text-white text-nowrap ">Happy Customer</p>
              </div>
              <div>
                <h2 className="text-white text-5xl mb-3 font-bold">450+</h2>
                <p className="text-white  text-nowrap">Happy Customer</p>
              </div>
            </div>
          </div>

          <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[770px] sm:w-[600px] lg:w-[770px] h-[300px] sm:h-[250px] lg:h-[300px]">
            <Image width={870} height={500} src={people} alt="people" />
            <div className="absolute top-[50%] md:top-[75%] left-1/2 transform -translate-x-1/2 -translate-y-[200%]">
              <Link
                target="_blank"
                href="https://www.youtube.com/watch?v=8DnoQnyQm4U&list=RD8DnoQnyQm4U&start_radio=1&ab_channel=HolyTune"
              >
                <Image className="size-20" src={svg} alt="svg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVideos;
