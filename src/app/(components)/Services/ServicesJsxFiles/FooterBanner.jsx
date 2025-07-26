import React from 'react'
import { Barlow } from "next/font/google";
import { FaPaintBrush } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import Link from 'next/link';

const barlow = Barlow({
  weight: "600",
  subsets: ["latin"],
});


function FooterBanner() {
  return (
    <div className='bg-[#191919]'>
          <div className='max-w-[1596px] mx-auto h-full lg:h-[624px] bg-[url(/images/heroimages/OurService.png)] bg-no-repeat bg-cover'>
           <div className='bg-[#0c0e0acb] h-full lg:h-[624px] '>
           <div className='  items-center justify-center py-24'>
            <div className=' flex items-center justify-center pb-14'>
              <Link href={'/ContactUs'}>
                <button className=' h-16 w-44 bg-[#9EFF00] rounded-[8px] shadow-2xs border-none text-lg font-medium text-black cursor-pointer'>Contact Us</button>
              </Link>
              </div>
              <h3 className={`text-[${barlow.className}] text-3xl  lg:text-5xl font-semibold text-center text-[#9EFF00] px-4`}>Let us Bring your Ideas to Life in the Digital World.</h3>
              <p className={`text-[${barlow.className}] text-[16px] lg:text-lg font-semibold text-center text-[#E6E6E6] pt-6 px-4 lg:px-[15%]`}>No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.</p>
              <div className=' flex items-center justify-center pt-12'>
                <Link href={'/Work'}>
                <button className=' h-16 w-44 bg-[#9EFF00] rounded-[8px] shadow-2xs border-none text-lg font-medium text-black cursor-pointer'>Works</button>
                </Link>
              </div>
            </div>
           </div>
            
          </div>
          
        </div>
  )
}

export default FooterBanner