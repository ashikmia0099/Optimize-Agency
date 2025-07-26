import React from "react";
import { Barlow } from "next/font/google";
import { FaPaintBrush } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";

const barlow = Barlow({
  weight: "600",
  subsets: ["latin"],
});

function QuestionBanner() {
  return (
    <div className="bg-[#191919]">
      <div className="max-w-[1596px] mx-auto h-[330px] bg-[url(/images/heroimages/OurService.png)] bg-no-repeat bg-cover">
        <div className="  items-center justify-center py-24">
          <h3
            className={`text-[${barlow.className}] text-3xl lg:text-4xl xl:text-5xl font-semibold text-center text-white`}
          >
          Frequently Asked Questions
          </h3>
          <p
            className={`text-[${barlow.className}] text-[14px] lg:text-[16px] xl:text-lg font-semibold text-center text-[#E6E6E6] pt-6`}
          >
            Still you have any questions? Contact our Team via hello@squareup.com
          </p>
        </div>
      </div>
    </div>
  )
}

export default QuestionBanner