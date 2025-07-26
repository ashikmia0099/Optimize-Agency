import React from 'react'
import { Barlow } from "next/font/google";

import { GiTargetPrize } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import { FaChessQueen } from "react-icons/fa";



const barlow = Barlow({
  weight: "600",
  subsets: ["latin"],
});


function WhyChoose() {
  return (
    <div>
      <div className="bg-[#191919]">
        <div className="max-w-[1596px] mx-auto h-[330px] bg-[url(/images/heroimages/OurService.png)] bg-no-repeat bg-cover">
          <div className='bg-[#0c0e0acb] h-[330px] '>
          <div className="  items-center justify-center py-24">
            <h3
              className={`text-[${barlow.className}] text-3xl lg:text-4xl xl:text-5xl font-semibold text-center text-white`}
            >
              Why Choose SquareUp?
            </h3>
            <p
              className={`text-[${barlow.className}] text-[14px] lg:text-[16px] xl:text-lg font-semibold text-center text-[#E6E6E6] pt-6`}
            >
              Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.
            </p>
          </div>
          </div>
          
        </div>
        <div className="max-w-[1596px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className=" h-full lg:h-[378px] p-7 lg:p-12 bg-[#191919] flex flex-col border border-[#222222]">
              <div>
              <div className=' flex items-center lg:block gap-3'>
                <div className=" h-20 w-20 rounded-[10px] text-[#9EFF00] text-[40px] bg-[#222222] flex items-center justify-center">
                  <GiTargetPrize />
                </div>
                <div>
                <h3
                  className={`text-xl lg:text-xl xl:text-[30px] font-semibold text-white text-[${barlow.className}] pt-10`}
                >
                  Expertise
                </h3>
                </div>
                </div>
                <p
                  className={`text-[14px] lg:[16px] xl:text-lg font-normal leading-6 text-[${barlow.className}] text-white pt-5`}
                >
                 Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.
                </p>
              </div>
            
            </div>
            <div className=" h-full lg:h-[378px] p-7 lg:p-12 bg-[#191919] flex flex-col border border-[#222222]">
              <div>
              <div className=' flex items-center lg:block gap-3'>
                <div className=" h-20 w-20 rounded-[10px] text-[#9EFF00] text-[40px] bg-[#222222] flex items-center justify-center">
                  <GiTargetPrize />
                </div>
                <div>
                <h3
                  className={`text-xl lg:text-xl xl:text-[30px] font-semibold text-white text-[${barlow.className}] pt-10`}
                >
                  Expertise
                </h3>
                </div>
                </div>
                <p
                  className={`text-[14px] lg:[16px] xl:text-lg font-normal leading-6 text-[${barlow.className}] text-white pt-5`}
                >
                 Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.
                </p>
              </div>
            
            </div>
            <div className=" h-full lg:h-[378px] p-7 lg:p-12 bg-[#191919] flex flex-col border border-[#222222]">
              <div>
              <div className=' flex items-center lg:block gap-3'>
                <div className=" h-20 w-20 rounded-[10px] text-[#9EFF00] text-[40px] bg-[#222222] flex items-center justify-center">
                  <GiTargetPrize />
                </div>
                <div>
                <h3
                  className={`text-xl lg:text-xl xl:text-[30px] font-semibold text-white text-[${barlow.className}] pt-10`}
                >
                  Expertise
                </h3>
                </div>
                </div>
                <p
                  className={`text-[14px] lg:[16px] xl:text-lg font-normal leading-6 text-[${barlow.className}] text-white pt-5`}
                >
                 Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.
                </p>
              </div>
            
            </div>
            <div className=" h-full lg:h-[378px] p-7 lg:p-12 bg-[#191919] flex flex-col border border-[#222222]">
              <div>
              <div className=' flex items-center lg:block gap-3'>
                <div className=" h-20 w-20 rounded-[10px] text-[#9EFF00] text-[40px] bg-[#222222] flex items-center justify-center">
                  <GiTargetPrize />
                </div>
                <div>
                <h3
                  className={`text-xl lg:text-xl xl:text-[30px] font-semibold text-white text-[${barlow.className}] pt-10`}
                >
                  Expertise
                </h3>
                </div>
                </div>
                <p
                  className={`text-[14px] lg:[16px] xl:text-lg font-normal leading-6 text-[${barlow.className}] text-white pt-5`}
                >
                 Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.
                </p>
              </div>
            
            </div>
           
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
