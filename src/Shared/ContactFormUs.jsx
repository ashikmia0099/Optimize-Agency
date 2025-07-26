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

function ContactFormUs() {
  return (
    <div  className="bg-[#191919]">
       <div className="max-w-[1596px] mx-auto px-4 lg:px-10 xl:px-64 py-20">
        <div className="border border-[#222222] p-3 lg:p-20">
          <form action="">
            <div className=" grid lg:grid-cols-2 gap-6">
              {/* name input */}
              <div className=" h-32 bg-[#1E1E1E] border border-[#222222] rounded-[12px] px-6 py-5">
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-white text-2xl font-semibold">
                    Name*
                  </legend>
                  <input
                    type="text"
                    className="input bg-[#222222] text-white border-none"
                    placeholder="Enter Your Name"
                  />
                </fieldset>
              </div>
              {/* email input */}
              <div className=" h-32 bg-[#1E1E1E] border border-[#222222] rounded-[12px] px-6 py-5">
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-white text-2xl font-semibold">
                    Email*
                  </legend>
                  <input
                    type="email"
                    className="input bg-[#222222] text-white border-none"
                    placeholder="Enter Your Email "
                  />
                </fieldset>
              </div>
            </div>

            {/* technology select */}

            <div className="bg-[#1E1E1E] py-10 border border-[#222222] p-5 lg:p-10 my-10 rounded-[12px]">
              <h3 className=" text-[16px] lg:text-2xl xl:text-3xl font-semibold text-white pb-10">
                Why are you contacting us?*
              </h3>
              <div className=" grid lg:grid-cols-2">
                <div>
                  <fieldset className="fieldset p-4  rounded-box w-64">
                    
                    <label className="fieldset-label text-[16px] xl:text-lg text-white font-normal">
                    <input type="checkbox" defaultChecked className="checkbox checkbox-neutral" />
                      Web Design
                    </label>
                  </fieldset>
                </div>
                <div>
                  <fieldset className="fieldset p-4  rounded-box w-64">
                    
                    <label className="fieldset-label text-[16px] xl:text-lg text-white font-normal">
                    <input type="checkbox" defaultChecked className="checkbox checkbox-neutral" />
                    Collaboration
                    </label>
                  </fieldset>
                </div>
                <div>
                  <fieldset className="fieldset p-4  rounded-box w-64">
                    
                    <label className="fieldset-label text-[16px] xl:text-lg text-white font-normal">
                    <input type="checkbox" defaultChecked className="checkbox checkbox-neutral" />
                    Mobile App Design
                    </label>
                  </fieldset>
                </div>
                <div>
                  <fieldset className="fieldset p-4  rounded-box w-64">
                    
                    <label className="fieldset-label text-[16px] xl:text-lg text-white font-normal">
                    <input type="checkbox" defaultChecked className="checkbox checkbox-neutral" />
                    Others
                    </label>
                  </fieldset>
                </div>
                
              </div>
            </div>

            {/* your budget  */}

            <div className="bg-[#1E1E1E] py-10 border border-[#222222] p-5 lg:p-10 my-10 rounded-[12px]">
              <h3 className=" text-[16px] lg:text-2xl xl:text-3xl font-semibold text-white pb-10">
              Your Budget*
              </h3>
              <p className=" text-[14px] lg:text-lg font-normal text-white pb-10">Slide to indicate your budget range</p>
              <div className=" ">
              <RangeSlider className="" />
              </div>
            </div>

            {/* description */}
            <div className="bg-[#1E1E1E] py-10 border border-[#222222] p-5 lg:p-10 my-10 rounded-[12px]">
              <h3 className="  text-[16px] lg:text-2xl xl:text-3xl font-semibold text-white pb-10">
              Your Message*
              </h3>
              
              <div className=" ">
              <textarea className="textarea w-full bg-[#222222] text-white border-none hover:border-none h-36" placeholder="Type Here"></textarea>
              </div>
            </div>

             {/* description */}
            <div className="bg-[#1E1E1E] py-10 border border-[#222222] p-5 lg:p-10 my-10 rounded-[12px]">
              <h3 className="  text-[16px] lg:text-2xl xl:text-3xl font-semibold text-white pb-10 capitalize">
              Project Pdf or Document*
              </h3>
              
              <div className=" ">
              {/* <textarea className="textarea w-full bg-[#222222] text-white border-none hover:border-none h-36" placeholder="Type Here"></textarea> */}
              <input type="file" className="file-input w-full bg-[#222222] text-white border-none hover:border-none" />
              </div>
            </div>
            <div className="flex items-center justify-center">
                <button className=" w-40 h-16 bg-[#9EFF00] rounded-xl font-semibold text-black border-none shadow-2xs  ">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
   
  )
}

export default ContactFormUs