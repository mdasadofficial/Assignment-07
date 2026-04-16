// "use client";
import Image from "next/image";
import React from "react";

const CardInfo = ({ friend }) => {
  console.log(friend);
  const { name, status, tags, days_since_contact, picture } = friend;
  //   const res = await fetch (friend);
  return (
    <div className="container mx-auto px-4">
      {/* Grid Container */}
      <div>
        {/* David Kim Card */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
          {/* Image placeholder */}
          <Image
            src={picture}
            height={30}
            width={30}
            alt={name}
            className="w-20 h-20 bg-gray-100 rounded-full mb-4 border border-gray-50 flex items-center justify-center text-2xl"
          ></Image>
          <h3 className="text-lg font-bold text-[#1A2E35] mb-1">{name}</h3>
          <p className="text-gray-400 text-xs mb-3">
            {days_since_contact} Days Ago
          </p>
          <div className="flex gap-4 mb-4">
            {tags.map((tag, index) => (
            <div key={index} className="flex gap-1.5 flex-wrap justify-center">
              <span className="px-3 py-1 bg-[#E8FAF0] text-[#1D996D] text-xs font-medium rounded-full uppercase">
                {tag}
              </span>
            </div>
          ))}
          </div>
          <div className="px-3 py-1 bg-[#FFFBEB] text-[#B45309] text-xs font-medium rounded-full capitalize">
            {status}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
