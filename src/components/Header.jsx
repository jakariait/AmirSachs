import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 py-3">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-[#717680] font-semibold">Locations</span>
          <span className="text-[#A4A7AE]">
            <FaChevronRight />
          </span>

          <span className="text-[#717680] font-semibold">{`{state}`}</span>
          <span className="text-[#D5D7DA]">
            <FaChevronRight />
          </span>

          <span className="text-[#026AA2] font-semibold">{`{city}`}</span>
        </div>
      </div>

      {/* Title & Rating badges */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          {/* Heading */}
          <h1 className="text-xl md:text-[36px] leading-[44px] font-medium text-[#101828] tracking-[-0.02em]">
            Virtual office in{" "}
            <span className={"text-[#36BFFA]"}>{`{city}`}</span>
          </h1>

          {/* Subheading */}
          <p className="text-xs md:text-lg leading-[24px] text-[#475467]">
            {`{city}`} Virtual Business Address & Live Receptionist Answering
            Service
          </p>
        </div>

        <div className="flex mt-3 md:mt-0 items-center justify-end gap-2 md:gap-[32px] py-1 md:py-1 mr-4 overflow-x-auto">
          {/* BBB Logo */}
          <div className="w-24 md:w-[131px] h-9 md:h-[46px] relative flex-shrink-0">
            <Image
              src="/img.png"
              alt="BBB A+ Rating"
              fill
              className="object-contain"
            />
          </div>

          {/* Trust Pilot */}
          <div className="w-20 md:w-[97px] h-9 md:h-[46px] relative flex-shrink-0">
            <Image
              src="/img_1.png"
              alt="Trust Pilot Rating"
              fill
              className="object-contain"
            />
          </div>

          {/* BBB Logo 2 */}
          <div className="w-24 md:w-[128px] h-8 md:h-[40px] relative flex-shrink-0">
            <Image
              src="/img_2.png"
              alt="BBB A+ Rating"
              fill
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header;
