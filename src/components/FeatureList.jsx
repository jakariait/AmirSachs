"use client"
import React, { useState } from "react";
import { LuChevronsDown } from "react-icons/lu";
import { FaCheck } from "react-icons/fa";


const features = [
  "Prestigious Business Address",
  "Professional Live Call Answering",
  "Personalized Call Transferring",
  "Business Phone/Fax Number",
  "Professional Mail Receipt",
  "Voicemail/Fax Converted to Email",
  "Digital Mail Notifications by Mail X",
];

const FeatureList = () => {
  const [showAll, setShowAll] = useState(false);

  const mobileVisibleFeatures = showAll ? features : features.slice(0, 4);

  return (
    <div className="flex flex-col justify-between">
      <div>
        <p className=" text-gray-700 mb-2">
          When We Say <span className={"font-semibold"}>All-Inclusive,</span>{" "}
          <br /> We Mean <span className={"font-semibold"}>ALL-INCLUSIVE:</span>
        </p>

        {/* List for Desktop */}
        <ul className="hidden md:block space-y-3">
          {features.map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-700">
              <div className="relative w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-[#36BFFA] text-xl">✔</span>
              </div>
              <span className="ml-2">{item}</span>
            </li>
          ))}
        </ul>

        {/* List for Mobile */}
        <ul className="md:hidden space-y-3">
          {mobileVisibleFeatures.map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-700">
              <div className="relative w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-[#36BFFA] text-xl"><FaCheck />
</span>
              </div>
              <span className="ml-2">{item}</span>
            </li>
          ))}
        </ul>

        {!showAll && features.length > 4 && (
          <button
            onClick={() => setShowAll(true)}
            className="md:hidden mt-4 cursor-pointer flex items-center justify-center gap-4 "
          >
              <LuChevronsDown width={4} height={ 10}/>
              See All Features


          </button>
        )}

        <p className="hidden md:block mt-10 text-gray-700">
          All for only <span className="font-semibold text-[#36BFFA]">$99</span>
          /month
        </p>
      </div>

      <button className="hidden md:block mt-6 bg-[#36BFFA] text-white py-3 rounded-lg text-center text-lg font-semibold">
        Select This Location
      </button>
    </div>
  );
};

export default FeatureList;
