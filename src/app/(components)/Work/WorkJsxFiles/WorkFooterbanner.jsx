import React from "react";
import { Barlow } from "next/font/google";
import { FaPaintBrush } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";

const barlow = Barlow({
    weight: "600",
    subsets: ["latin"],
  });

function WorkFooterbanner() {
  return (
    <div className="bg-[#191919]">
      <div className="max-w-[1596px] mx-auto h-[624px] bg-[url(/images/heroimages/OurService.png)] bg-no-repeat bg-cover">
        <div className="  items-center justify-center py-24">
          <div className=" flex items-center justify-center pb-14">
            <button className=" h-16 w-44 bg-[#9EFF00] rounded-[8px] shadow-2xs border-none text-lg font-medium">
              Start Project
            </button>
          </div>
          <h3
            className={`text-[${barlow.className}] text-5xl font-semibold text-center text-white`}
          >
            Let us Bring your Ideas to Life in the Digital World.
          </h3>
          <p
            className={`text-[${barlow.className}] text-lg font-semibold text-center text-[#E6E6E6] pt-6 px-[15%]`}
          >
            No matter which services you choose, we are committed to delivering
            exceptional results that exceed your expectations. Our
            multidisciplinary team works closely together to ensure seamless
            collaboration and a unified vision for your digital product.
          </p>
          <div className=" flex items-center justify-center pt-12">
            <button className=" h-16 w-44 bg-[#9EFF00] rounded-[8px] shadow-2xs border-none text-lg font-medium">
              Start Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkFooterbanner;
