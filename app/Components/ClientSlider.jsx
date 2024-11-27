"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import Client1 from "../../public/client1.png";

const ClientSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div
      style={{
        position: "relative",
        marginTop: "40px",
        padding: "20px",
        maxWidth: "1280px",
        margin: "auto",
      }}
    >
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={10}
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
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
      
          <SwiperSlide className="border hover:border-[#2CB0E1] transition-all border-transparent duration-300 rounded-xl p-4 cursor-pointer ">
            <Image
              className=" h-28 w-28 object-cover"
              src={Client1}
              alt="Client1"
              style={{
                clipPath:
                  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            />
            <h3 className="font-semibold text-xl mt-3 ">Ronald Richards</h3>
            <p className="font-semibold text-black/60 my-2 text-lg ">Co Founder</p>
            <p className="text-black/60 ">The Pacific Grove Chamber of Commerce would like to thank eLab Communications and Mr. Will Elkadi for all the efforts and suggestions that assisted.</p>
          </SwiperSlide>


          
          <SwiperSlide className="border hover:border-[#2CB0E1] transition-all border-transparent duration-300 rounded-xl p-4 cursor-pointer">
            <Image
              className=" h-28 w-28 object-cover"
              src={Client1}
              alt="Client1"
              style={{
                clipPath:
                  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            />
            <h3 className="font-semibold text-xl mt-3 ">Ronald Richards</h3>
            <p className="font-semibold text-black/60 my-2 text-lg ">Co Founder</p>
            <p className="text-black/60 ">The Pacific Grove Chamber of Commerce would like to thank eLab Communications and Mr. Will Elkadi for all the efforts and suggestions that assisted.</p>
          </SwiperSlide>


          <SwiperSlide className="border hover:border-[#2CB0E1] transition-all border-transparent duration-300 rounded-xl p-4 cursor-pointer">
            <Image
              className=" h-28 w-28 object-cover"
              src={Client1}
              alt="Client1"
              style={{
                clipPath:
                  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            />
            <h3 className="font-semibold text-xl mt-3 ">Ronald Richards</h3>
            <p className="font-semibold text-black/60 my-2 text-lg ">Co Founder</p>
            <p className="text-black/60 ">The Pacific Grove Chamber of Commerce would like to thank eLab Communications and Mr. Will Elkadi for all the efforts and suggestions that assisted.</p>
          </SwiperSlide>


          <SwiperSlide className="border hover:border-[#2CB0E1] transition-all border-transparent duration-300 rounded-xl p-4 cursor-pointer">
            <Image
              className=" h-28 w-28 object-cover"
              src={Client1}
              alt="Client1"
              style={{
                clipPath:
                  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            />
            <h3 className="font-semibold text-xl mt-3 ">Ronald Richards</h3>
            <p className="font-semibold text-black/60 my-2 text-lg ">Co Founder</p>
            <p className="text-black/60 ">The Pacific Grove Chamber of Commerce would like to thank eLab Communications and Mr. Will Elkadi for all the efforts and suggestions that assisted.</p>
          </SwiperSlide>




      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        className="absolute top-1/2 left-[-30px] transform -translate-y-1/2 bg-[#2CB0E1] text-white rounded-full w-10 h-10 text-lg cursor-pointer hover:bg-black/60"
        ref={prevRef}
      >
        &larr;
      </button>
      <button
        className="absolute top-1/2 right-[-30px] transform -translate-y-1/2 bg-[#2CB0E1] text-white rounded-full w-10 h-10 text-lg cursor-pointer hover:bg-black/60"
        ref={nextRef}
      >
        &rarr;
      </button>
    </div>
  );
};

export default ClientSlider;
