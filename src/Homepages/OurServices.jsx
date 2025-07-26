import React from 'react'
import { Barlow } from "next/font/google";
import { FaPaintBrush } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";

const barlow = Barlow({
  weight: "600",
  subsets: ["latin"],
});

function OurServices() {
  return (
    <div className='bg-[#191919]'>
      <div className='max-w-[1596px] mx-auto h-[330px] bg-[url(/images/heroimages/OurService.png)] bg-no-repeat bg-cover'>
        <div className='bg-[#0c0e0acb] h-[330px] '>
        <div className='  items-center justify-center py-24'>
          <h3 className={`text-[${barlow.className}] text-3xl lg:text-4xl xl:text-5xl font-semibold text-center text-white`}>Our Services</h3>
          <p className={`text-[${barlow.className}] text-[14px] font-[400] lg:text-lg lg:font-semibold text-center text-[#E6E6E6] pt-6 px-4 md:px-0`}>Transform your brand with our innovative digital solutions that captivate and engage your audience.</p>
        </div>
        </div>
        
        
      </div>
      <div className='max-w-[1596px] mx-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-3'>
          <div className='h-full lg:h-[510px] xl:h-[577px] p-7 xl:p-12 bg-[#191919] flex flex-col border border-[#222222]'>
              <div>
                <div className=' flex items-center lg:block gap-3'>
                <div className=' h-20 w-20 rounded-[10px] text-[#9EFF00] text-[40px] bg-[#222222] flex items-center justify-center'>
                  <FaPaintBrush/>
                </div>
                <div>
                <h3 className={`text-xl lg:text-2xl xl:text-[30px]  font-semibold text-white text-[${barlow.className}] pt-10`}>Design</h3>
                </div>
                </div>
                <p className={` text-sm lg:[16px] xl:text-lg font-normal leading-6 text-[${barlow.className}] text-white pt-5`}>At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.</p>
              </div>
              <div className=' mt-auto pt-5 lg:pt-0'>
                <button className={` btn bg-[#262626] hover:bg-[#9EFF00] font-medium rounded-[8px] text-lg hover:text-black text-[${barlow.className}] border-none text-white shadow-2xs h-14 w-full`}>Learn More</button>
              </div>
          </div>
          <div className='h-full lg:h-[510px] xl:h-[577px] p-7 xl:p-12 bg-[#191919] flex flex-col border border-[#222222]'>
              <div>
                <div className=' flex items-center lg:block gap-3'>
                <div className=' h-20 w-20 rounded-[10px] text-[#9EFF00] text-[40px] bg-[#222222] flex items-center justify-center'>
                  <FaPaintBrush/>
                </div>
                <div>
                <h3 className={`text-xl lg:text-2xl xl:text-[30px]  font-semibold text-white text-[${barlow.className}] pt-10`}>Design</h3>
                </div>
                </div>
                <p className={` text-sm lg:[16px] xl:text-lg font-normal leading-6 text-[${barlow.className}] text-white pt-5`}>At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.</p>
              </div>
              <div className=' mt-auto pt-5 lg:pt-0'>
                <button className={` btn bg-[#262626] hover:bg-[#9EFF00] font-medium rounded-[8px] text-lg hover:text-black text-[${barlow.className}] border-none text-white shadow-2xs h-14 w-full`}>Learn More</button>
              </div>
          </div>
          <div className='h-full lg:h-[510px] xl:h-[577px] p-7 xl:p-12 bg-[#191919] flex flex-col border border-[#222222]'>
              <div>
                <div className=' flex items-center lg:block gap-3'>
                <div className=' h-20 w-20 rounded-[10px] text-[#9EFF00] text-[40px] bg-[#222222] flex items-center justify-center'>
                  <FaPaintBrush/>
                </div>
                <div>
                <h3 className={`text-xl lg:text-2xl xl:text-[30px]  font-semibold text-white text-[${barlow.className}] pt-10`}>Design</h3>
                </div>
                </div>
                <p className={` text-sm lg:[16px] xl:text-lg font-normal leading-6 text-[${barlow.className}] text-white pt-5`}>At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.</p>
              </div>
              <div className=' mt-auto pt-5 lg:pt-0'>
                <button className={` btn bg-[#262626] hover:bg-[#9EFF00] font-medium rounded-[8px] text-lg hover:text-black text-[${barlow.className}] border-none text-white shadow-2xs h-14 w-full`}>Learn More</button>
              </div>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default OurServices