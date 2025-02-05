import Image from "next/image";
import React from "react";

export default function About02(){
  return (
    <div className="max-w-screen-xl mx-auto mt-32 px-6">
      <h2 className="text-[32px] text-[#272343] font-semibold text-left mb-12">
        Our Popular Products
      </h2>
      <div className="flex flex-col sm:flex-row lg:flex-row justify-between gap-8">
        <div className="text-center">
          <Image
            src="/green.jpeg"
            alt="1"
            width={590}
            height={375}
            className="object-cover mx-auto"
          />
          <p className="pt-5 text-[20px] text-left font-sans font-medium text-[#2A254B]">The Poplar Suede Sofa</p>
          <p className="pt-2 text-[18px] mb-32 text-left font-sans font-medium text-[#2A254B]">$99.00</p>
        </div>
        <div className="text-center">
          <Image
            src="/Product Card.png"
            alt="2"
            width={305}
            height={375}
            className="object-cover mx-auto"
          />
          <p className="pt-5 text-[20px] text-left font-sans font-medium text-[#2A254B]">The Dandy Chair</p>
          <p className="pt-2 text-[18px] mb-32 text-left font-sans font-medium text-[#2A254B]">$99.00</p>
        </div>
        <div className="text-center">
          <Image
            src="/black.jpeg"
            alt="3"
            width={305}
            height={375}
            className="object-cover mx-auto"
          />
          <p className="pt-5 text-[20px] text-left font-sans font-medium text-[#2A254B]">The Dandy Chair</p>
          <p className="pt-2 text-[18px] mb-32 text-left font-sans font-medium text-[#2A254B]">$99.00</p>
        </div>
      </div>
    </div>
  );
};
