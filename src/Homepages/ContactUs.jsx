"use client";
import React from "react";
import { Barlow } from "next/font/google";
import { FaPaintBrush } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';


const barlow = Barlow({
  weight: "600",
  subsets: ["latin"],
});

function ContactUs() {
  return (
    <div className="bg-[#191919]">
      <div className="max-w-[1596px] mx-auto h-[330px] bg-[url(/images/heroimages/OurService.png)] bg-no-repeat bg-cover">
        <div className='bg-[#0c0e0acb] h-[330px] '>
        <div className="  items-center justify-center py-24">
          <h3
            className={`text-[${barlow.className}] text-3xl lg:text-4xl xl:text-5xl font-semibold text-center text-white`}
          >
            Thank you for your Interest in SquareUp.
          </h3>
          <p
            className={`text-[${barlow.className}] text-[14px] lg:text-[16px] xl:text-lg font-semibold text-center text-[#E6E6E6] pt-6`}
          >
            We would love to hear from you and discuss how we can help bring
            your digital ideas to life. Here are the different ways you can get
            in touch with us.
          </p>
        </div>
        </div>
       
      </div>
      
      
    </div>
  );
}

export default ContactUs;
