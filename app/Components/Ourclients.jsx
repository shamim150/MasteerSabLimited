"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import BoltTag from "./Layer/BoltTag";

const OurClients = () => {
  const clients = [
    { name: "MGI", initials: "/Mgi.jpg.jpg", url: "https://www.mgi.org" },
    { name: "Akij", initials: "/AKIJ.jpg", url: "https://www.gulfood.com" },
    { name: "TK", initials: "/TK.jpg", url: "https://www.tkgroupbd.com" },
    { name: "Nabil", initials: "/Nabil.jpg", url: "	https://ngibd.com" },
    { name: "SB", initials: "/SB.jpg", url: "https://sbgroup.com.bd" },
    { name: "Desh Bondho", initials: "/DESHBondhu.jpg", url: "https://www.dbg.com.bd" },
    { name: "Edrish Group", initials: "/Edrish.jpg" },
  ];

  return (
    <div className=" py-28 max-w-7xl mx-auto">
      <BoltTag className="text-center mb-8 text-3xl font-bold text-gray-700" text="Our Corporate Clients" />

      <div className="relative">
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center text-xl font-bold text-white">
                <Image className="w-20 h-20 object-contain" src={client.initials} alt={client.name} width={80} height={80} />
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 text-center">{client.name}</h2>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <button className="swiper-prev absolute top-1/2 left-[-50px] transform -translate-y-1/2 bg-[#2CB0E1] text-white rounded-full w-10 h-10 text-lg cursor-pointer hover:bg-black/60">
          &larr;
        </button>
        <button className="swiper-next absolute top-1/2 right-[-50px] transform -translate-y-1/2 bg-[#2CB0E1] text-white rounded-full w-10 h-10 text-lg cursor-pointer hover:bg-black/60">
          &rarr;
        </button>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .swiper-slide {
            width: 35%; /* Adjust width for smaller screens */
          }

          h2 {
            font-size: 1rem; /* Adjust font size for smaller screens */
          }

          img {
            width: 50px; /* Adjust logo size for smaller screens */
            height: 50px;
          }
        }

        @media (min-width: 769px) {
          .swiper-slide {
            width: 150px; /* Set fixed width for larger screens */
          }

          h2 {
            font-size: 1.25rem; /* Adjust font size for larger screens */
          }

          img {
            width: 80px; /* Set fixed logo size for larger screens */
            height: 80px;
          }
        }
      `}</style>
    </div>
  );
};

export default OurClients;
