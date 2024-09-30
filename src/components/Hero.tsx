"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="md:min-h-screen min-h-[500px]">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="wavemain md:min-h-screen min-h-[500px] w-full">
            <div className="bg-black/20 text-white h-full md:min-h-screen min-h-[500px] w-full flex-col gap-8 flex justify-center items-center text-center">
              <div className="hidden md:block">
                <br />
                <br /> <br />
                <br />
              </div>
              <h4 className="uppercase text-xl md:text-2xl font-bold lg:text-5xl">
                join the 2024-25 <br /> Runway academy
              </h4>
              <p className="uppercase text-base md:text-xl lg:text-2xl font-semibold">
                A first of its kind accelerator for aspiring <br /> black hair
                stylists in australia
              </p>
              <Link
                href={"/contact"}
                className="uppercase border bg-black tracking-widest px-4 border-white rounded-3xl text-xs p-2"
              >
                Sign me up!
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wave md:min-h-screen min-h-[500px] w-full">
            <div className="bg-black/20 text-white h-full pt-20 md:min-h-screen min-h-[500px] w-full flex-col gap-8 flex justify-center items-center text-center">
              <div className="hidden md:block">
                <br />
                <br /> <br />
                <br />
                <br />
                <br /> <br />
                <br />
              </div>
              <h4 className="uppercase text-xl md:text-2xl font-bold lg:text-5xl ">
                join the 2024-25 <br /> Runway academy
              </h4>
              <p className="uppercase text-base md:text-xl lg:text-2xl font-semibold">
                A first of its kind accelerator for aspiring <br /> black hair
                stylists in australia
              </p>
              <Link
                href={"/contact"}
                className="uppercase border bg-black tracking-widest px-4 border-white rounded-3xl text-xs p-2"
              >
                Sign me up!
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wave2 md:min-h-screen min-h-[500px] w-full">
            <div className="bg-black/20 text-white h-full pt-20 md:min-h-screen min-h-[500px] w-full flex-col gap-8 flex justify-center items-center text-center">
              <div className="hidden md:block">
                <br />
                <br /> <br />
                <br />
                <br />
                <br />{" "}
              </div>

              <h4 className="uppercase text-xl md:text-2xl font-bold lg:text-5xl">
                join the 2024-25 <br /> Runway academy
              </h4>
              <p className="uppercase text-base md:text-xl lg:text-2xl font-semibold">
                A first of its kind accelerator for aspiring <br /> black hair
                stylists in australia
              </p>
              <Link
                href={"/contact"}
                className="uppercase border bg-black tracking-widest px-4 border-white rounded-3xl text-xs p-2"
              >
                Sign me up!
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wave3 md:min-h-screen min-h-[500px] w-full">
            <div className="bg-black/20 text-white h-full pt-20 md:min-h-screen min-h-[500px] w-full flex-col gap-8 flex justify-center items-center text-center">
              <br />

              <h4 className="uppercase text-xl md:text-2xl font-bold lg:text-5xl ">
                join the 2024-25 <br /> Runway academy
              </h4>
              <p className="uppercase text-base md:text-xl lg:text-2xl font-semibold">
                A first of its kind accelerator for aspiring <br /> black hair
                stylists in australia
              </p>
              <Link
                href={"/contact"}
                className="uppercase border bg-black tracking-widest px-4 border-white rounded-3xl text-xs p-2"
              >
                Sign me up!
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="bg-[#F8F8DC] flex justify-center uppercase text-xs font-bold lg:text-base p-4">
        <p>on a mission to empower black stylists</p>
      </div>
    </div>
  );
};

export default Hero;
