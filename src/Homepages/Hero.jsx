import React from "react";
import { Barlow } from "next/font/google";
import Link from "next/link";

const barlow = Barlow({
  weight: "600",
  subsets: ["latin"],
});

function Hero() {
  return (
    <div className={`bg-[#191919] text-[${barlow.className}]`}>
      <div className="max-w-[1596px] mx-auto h-full md:h-[800px] bg-[url(/images/heroimages/AbstractDesign.png)] bg-bottom bg-no-repeat">
        <div >
          <h1
            className={` text-4xl lg:text-5xl xl:text-7xl  text-white text-center px-4 md:px-[25%] leading-12 md:leading-20 pt-20 md:pt-28 ${barlow.className}`}
          >
            A Digital Product Studio that will Work
          </h1>
        </div>
        <div className=" px-4 lg:px-20 xl:px-[360px] mt-10">
          <div className=" h-24 bg-white/10 backdrop-brightness-50 backdrop-blur-sm rounded-[12px] flex items-center justify-center p-3 md:p-0">
          <p className={`flex items-center justify-center gap-1.5 text-white text-[22px] `}>
            <span className={`text-[22px] font-normal text-[#98989A] ${barlow.className}`}>For</span>,
            <span className={`w-28 h-12 rounded-[8px] bg-[#262626] btn text-white border-none shadow-2xs text-[22px] font-normal ${barlow.className}`}>Startups</span>,
            <span className={`w-56 h-12 rounded-[8px] bg-[#262626] btn text-white border-none shadow-2xs text-[22px] font-normal ${barlow.className}`}>Enterprise leaders</span>,
            <span className={`w-56 h-12 rounded-[8px] bg-[#262626] btn text-white border-none shadow-2xs text-[22px] font-normal ${barlow.className}`}>Media & Publishers</span>and
            <span className={`w-40 h-12 rounded-[8px] bg-[#262626] btn text-white border-none shadow-2xs text-[22px] font-normal ${barlow.className}`}>Social Good</span>
          </p>
          <p className={`  gap-1.5 text-white text-[16px] font-[400] block md:hidden text-center`}>
          For Startups, Enterprise leaders, Media & Publishers and Social Good
            
          </p>

          </div>
        </div>
        <div className=" flex justify-center items-center pt-10 gap-6 pb-16 lg:pb-0">
            <Link href={'/Work'}>
            <button className={`btn text-[18px] font-medium w-36 h-14 border-none bg-white/10 backdrop-blur-sm rounded-[12px] shadow-2xs text-white ${barlow.className}`}>Our Works</button>
            </Link>
            
             <Link href={'/ContactUs'}>
             <button className={`btn text-[18px] font-medium bg-[#9EFF00] hover:bg-[#9EFF00] w-32 h-14 border-none shadow-2xs text-black ${barlow.className}`}>Contact Us</button>
            </Link>
           
        </div>
      </div>
    </div>
  );
}

export default Hero;
