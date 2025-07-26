'use client'

import React, { useEffect } from "react";
import { Barlow } from "next/font/google";
import { FaPaintBrush } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { useAuth } from "../../../../../context/AuthContext";

const barlow = Barlow({
  weight: "600",
  subsets: ["latin"],
});

function ContactUsMedium() {

  const { contactUsMeium, setcontactUsMeium } = useAuth();


  // fetch contact us medium  api 

  useEffect(() => {

    fetch("http://localhost:3000/api/contactusapi/phoneEamilForm")
      .then(res => res.json())
      .then(data => {
        setcontactUsMeium(data)

      })


  }, [])

  console.log("contact us medium data", contactUsMeium)



  return (
    <div className="bg-[#191919]">
      <div className="max-w-[1596px] mx-auto  border border-[#222222]  ">
        <div className="border-b border-[#222222] py-12 px-4 lg:px-12">
          {
            contactUsMeium.map((contactdata, map) => (
              <div className=" lg:flex items-center justify-center gap-6">
                <div className="mt-2 ">
                  <button className="btn text-xl lg:text-[16px] xl:text-xl font-normal bg-[#262626] rounded-[12px]  border border-[#222222] text-white w-[280px] lg:w-80 h-14 shadow-2xs">
                    <span>
                      <MdEmail className=" text-[#9EFF00] mr-3" />
                    </span>
                    <span>{contactdata.Email}</span>
                  </button>
                </div>
                <div className="mt-2">
                  <button className="btn text-xl lg:text-[16px] xl:text-xl font-normal bg-[#262626] rounded-[12px]  border border-[#222222]  w-[280px] lg:w-80 text-white h-14 shadow-2xs">
                    <span>
                      <IoLogoWhatsapp className=" text-[#9EFF00] mr-3" />
                    </span>
                    <span>{contactdata.Phone_Number}</span>
                  </button>
                </div>
                <div className="mt-2">
                  <button className="btn text-xl lg:text-[16px] xl:text-xl font-normal bg-[#262626] rounded-[12px]  border border-[#222222]  w-[280px] lg:w-80 text-white h-14 shadow-2xs">
                    <span>
                      <IoLocationSharp className=" text-[#9EFF00] mr-3" />
                    </span>
                    <span>Get Location</span>
                  </button>
                </div>
              </div>
            ))
          }

        </div>
        {/* ux design */}
      </div>
    </div>
  );
}

export default ContactUsMedium;
