'use client'

import { BsCopy } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { LuSquareDashedMousePointer } from "react-icons/lu";
import { GiStarsStack } from "react-icons/gi";
import Image from "next/image";
import { Barlow } from "next/font/google";
import { useAuth } from "../../../../../context/AuthContext";
import { useEffect } from "react";

const barlow = Barlow({
  weight: "600",
  subsets: ["latin"],
});

function AllAboutUs() {


  const { aboutData, setaboutData } = useAuth()




  // fetch data api 

  useEffect(() => {

    fetch("https://optimize-agency.vercel.app/api/aboutapi/aboutdataapi")
      .then(res => res.json())
      .then(data => {
        setaboutData(data)

      })


  }, [])

  console.log("about data", aboutData)

  return (
    <div className="bg-[#191919]">
      <div className="max-w-[1596px] mx-auto  border border-[#222222]  ">
        <div className="border-b border-[#222222] py-7 lg:py-12 px-4 lg:px-12">
          <h3 className=" text-4xl xl:text-5xl font-semibold text-white ">
            Our Story
          </h3>

        </div>
        {/* ux design */}
        <div className=" grid lg:grid-cols-2 ">
          {
            aboutData.map((data, index) => (
              <div className=" border border-[#222222] h-full lg:h-[450px] xl:h-[463px] py-10 lg:py-12 px-6 lg:-px-10 xl:px-24">
                <div>
                  <div className=" flex gap-6">
                    <div>
                      <h1
                        className={` text-[70px] lg:text-[120px] xl:text-[150px]  font-medium  text-[#D8FF99] text-[${barlow.className}]`}
                      >
                        {index + 1}
                      </h1>
                    </div>
                    <div className="  w-full mt-auto ">
                      <div className=" -mt-16 lg:-mt-24 border-b-2 border-[#222222] pb-4">
                        <h4 className=" text-[#98989A] text-[20px] lg:text-2xl xl:text-3xl font-normal uppercase">
                          {data.Title}
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className=" ">
                    <div className=" ">
                      <p className=" text-sm xl:text-lg font-normal text-[#98989A] pt-3 xl:pt-7">
                       {data.Description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }

          
        </div>
      </div>
    </div>
  )
}

export default AllAboutUs