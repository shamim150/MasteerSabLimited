"use client";
import sliderr1 from "../../Assets/Slider_1.jpg";
import sliderr2 from "../../Assets/Slider_2.jpg";
import sliderr3 from "../../Assets/Slider_3.jpg";
import vector from "../../Assets/banner1-vector.png";
import spring1 from "../../Assets/banner-spring1.png";
import spring2 from "../../Assets/banner-spring2.png";
import spring3 from "../../Assets/banner-spring3.png";
import { ImFacebook2 } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import Image from "next/image";
import Button from "./Layer/Button";

export default function App() {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
      
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        loop
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-fit lg:h-[90vh]"
      >
        <SwiperSlide>
          <Image src={sliderr1} alt="slider1" layout="responsive" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={sliderr2} alt="slider2" layout="responsive" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sliderr3} alt="slider3" layout="responsive" />
        </SwiperSlide>
      </Swiper>

      <div className="bg-black/70 absolute inset-0   z-10 flex justify-center items-center h-full w-full">
        <Image
          className="absolute hidden md:block top-[10%] left-[30%] md:left-[25%]"
          src={spring1}
          alt="spring1"
        />
        <Image
          className="absolute hidden md:block bottom-[5%] left-[5%]"
          src={spring2}
          alt="spring2"
        />
        <div className="text-sky-50  flex items-center justify-between md:gap-10">
          <div className=" w-1/2 ">
            <div className="flex items-center gap-2"></div>
            <h1 className="text-xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 md:mb-10 text-center">
              Welcome to Master Sab Limited
            </h1>

            <Button className="" btntext={"Discover More"} />
          </div>

          <div className="w-1/2">
            <Image className="animate-spin w-[80%] max-md:mr-2 " src={vector} alt="ll" />
          </div>

          <Image
            className="absolute hidden md:block bottom-[15%] right-[8%] "
            src={spring3}
            alt="spring3"
          />
        </div>
      </div>

      <div className="absolute top-[50%] left-0 md:flex  hidden -translate-x-[30%] z-20 -rotate-90  gap-10 ">
        <div className="flex gap-3 items-center">
          <ImFacebook2 className="text-white hover:text-[#2CB0E1] transition-all duration-300 hover:scale-125" />
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#2CB0E1] transition-all duration-300 hover:scale-125"
          >
            Facebook
          </a>
        </div>

        <div className="flex gap-3 items-center">
          <ImLinkedin className="text-white hover:text-[#2CB0E1] transition-all duration-300 hover:scale-125" />
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#2CB0E1] transition-all duration-300 hover:scale-125"
          >
            Linkdin
          </a>
        </div>

        <div className="flex gap-3 items-center">
          <FaInstagramSquare className="text-white hover:text-[#2CB0E1] transition-all duration-300 hover:scale-125 text-lg" />

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#2CB0E1] transition-all duration-300 hover:scale-125"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}