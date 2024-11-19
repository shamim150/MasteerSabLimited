"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import erp from "../../public/erp.jpg"
import tracking from "../../public/trackking.jpg"
import smartboard from "../../public/smartboard.jpg"
import mastersab from "../../public/mastersab.jpg"

const Slider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div  style={{ position: "relative", padding: "20px", maxWidth: "1280px", margin: "auto" }}>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            // Assign refs to Swiper navigation
            if (prevRef.current && nextRef.current) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          });
        }}
        modules={[Navigation,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><Image className="h-[300px] w-[420px]" src={tracking} alt="tracking"/></SwiperSlide>
        <SwiperSlide><Image className="h-[300px] w-[420px]" src={erp} alt="erp"/></SwiperSlide>
        <SwiperSlide><Image className="h-[300px] w-[420px]" src={smartboard} alt="smartboard"/></SwiperSlide>
        <SwiperSlide><Image className="h-[300px] w-[420px]" src={mastersab} alt="mastersab"/></SwiperSlide>
     

      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="absolute top-1/2 left-[-30px] transform -translate-y-1/2 bg-[#2CB0E1]  text-white rounded-full w-10 h-10 text-lg cursor-pointer hover:bg-black/70"
        ref={prevRef}
       
      >
        &larr;
      </button>
      <button className="absolute top-1/2 right-[-30px] transform -translate-y-1/2 bg-[#2CB0E1]  text-white rounded-full w-10 h-10 text-lg cursor-pointer hover:bg-black/70"
        ref={nextRef}
      
      >
        &rarr;
      </button>
    </div>
  );
};

export default Slider;
