import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight, FaStar } from "react-icons/fa6";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative flex flex-row items-start  rounded-2xl overflow-hidden md:w-full md:h-auto md:flex-col md:rounded-none">
      {/* Image Container */}
      <div
        className={
          "relative flex flex-col w-[150px] h-[214px] md:w-full md:h-auto"
        }
      >
        {/* Slider arrows */}
        <button className="absolute invisible md:visible left-4 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 z-10">
          <FaChevronLeft />
        </button>
        <button className="absolute invisible md:visible right-4 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 z-10">
          <FaChevronRight />
        </button>

        <Image
          src="/hero.png"
          width={400}
          height={400}
          alt="Location Image"
          className="w-full h-full object-cover md:h-auto md:rounded-t-lg"
        />

        {/* Pagination dot group */}
        <div className="absolute w-16 h-6 left-1/2 -translate-x-1/2 bottom-4 bg-white/90 backdrop-blur-sm rounded-full flex justify-center items-center gap-3">
          <div className="w-2 h-2 bg-[#0086C9] rounded-full"></div>
          <div className="w-2 h-2 bg-[#E9EAEB] rounded-full"></div>
          <div className="w-2 h-2 bg-[#E9EAEB] rounded-full"></div>
        </div>
      </div>

      {/* Attribution Card */}
      <div className="box-border bg-[#36BFFA] border-t border-white/30 p-3 flex flex-col w-[208px] h-[214px] flex-grow md:w-full md:h-auto md:rounded-b-2xl">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-white text-sm md:text-[36px] font-semibold">
            {`{city}, {STATE}`}
          </h2>
          <div className="hidden md:flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-[20px] h-[20px]">
                <FaStar className={"text-white w-full h-full"} />
              </div>
            ))}
          </div>
        </div>

        <div
          className={
            "flex flex-col md:flex-row justify-between items-center w-full"
          }
        >
          <div className="text-white text-xs md:text-[18px] mt-3 mr-10">
            <p>200 E Robinson Street, Suite 1120</p>
            <p>{`{city}, {STATE}`} 32801</p>
            <p>(407) 559 - 20000</p>
          </div>

          <div
            className={
              " flex md:hidden gap-2 justify-between items-center w-full mt-1 mb-2 md:mt-10"
            }
          >
            <div className="flex md:hidden gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="w-[8px] md:w-[20px] h-[8px] md:h-[20px]"
                >
                  <FaStar className={"text-white w-full h-full"} />
                </div>
              ))}
            </div>
            <span className="font-bold text-xl md:text-[48px] text-white">
              $99/mo
            </span>
          </div>
          <span className="hidden md:block font-bold text-xl md:text-[48px] text-white">
            $99/mo
          </span>
        </div>
        <button className="md:hidden bg-white text-black px-3  py-3 rounded-lg text-center text-lg font-semibold">
          Select This Location
        </button>
      </div>
    </div>
  );
};

export default Hero;
