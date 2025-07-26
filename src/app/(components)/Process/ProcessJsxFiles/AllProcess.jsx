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

function AllProcess() {



  const { processtitletext, setprocesstitletext, processData, setprocessData, } = useAuth()


  // fetch process text and title  api 

  useEffect(() => {

    fetch("http://localhost:3000/api/processapi/AllProcessTitleTextapi")
      .then(res => res.json())
      .then(data => {
        setprocesstitletext(data)

      })


  }, [])

  console.log("process text", processtitletext)

  // fetch process data  api 

  useEffect(() => {

    fetch("http://localhost:3000/api/processapi/AllProcessDataapi")
      .then(res => res.json())
      .then(data => {
        setprocessData(data)

      })


  }, [])

  console.log("process data", processData)

  return (
    <div className="bg-[#191919]">
      <div className="max-w-[1596px] mx-auto pt-10 xl:pt-32 border border-[#222222]  ">
        {
          processtitletext.map((text, index) =>
            index === processtitletext.length - 1 && (
              <div key={index} className="border-b border-[#222222] pb-12 px-4 lg:px-12">
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#9EFF00] pb-3.5 uppercase">
                  {text.Title}
                </h3>
                <p className="text-[16px] xl:text-lg font-normal pb-12 text-[#E6E6E6]">
                  {text.Description}
                </p>
                <button className="btn text-[16px] xl:text-xl font-normal bg-[#262626] hover:bg-[#9EFF00] hover:text-black rounded-[12px] border border-[#222222] text-white h-14 shadow-2xs">
                  {text.ButtonText} :
                </button>
              </div>
            )
          )
        }


        {/* ux design */}
        <div className=" grid lg:grid-cols-2 ">
          {
            processData.map((data, index) =>

              <div className=" border border-[#222222] h-full lg:h-[380px] xl:h-[463px] py-10 lg:py-12 px-6 lg:-px-10 xl:px-24">
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
                      <div className=" -mt-16 lg:-mt-28 border-b-2 border-[#222222] pb-4">
                        <h4 className=" text-[#98989A] text-[20px] lg:text-2xl xl:text-3xl font-normal ">
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

            )
          }
         


        </div>
      </div>
    </div>
  );
}

export default AllProcess;
