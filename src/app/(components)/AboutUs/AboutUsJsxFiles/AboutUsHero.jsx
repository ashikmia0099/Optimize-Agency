'use client'


import { BsCopy } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { LuSquareDashedMousePointer } from "react-icons/lu";
import { GiStarsStack } from "react-icons/gi";

import { Barlow } from "next/font/google";

import aboutusImage from '../../../../../public/images/workpageimage/Image.png'
import { useAuth } from "../../../../../context/AuthContext";
import { useEffect } from "react";

const barlow = Barlow({
  weight: "600",
  subsets: ["latin"],
});

function AboutUsHero() {

  const { aboutBannerdata, setaboutBannerdata, aboutData, setaboutData } = useAuth()


  // fetch about banner api  

  useEffect(() => {

    fetch("http://localhost:3000/api/aboutapi/aboutbannerapi")
      .then(res => res.json())
      .then(data => {
        setaboutBannerdata(data)

      })


  }, [])

  console.log("about banner", aboutBannerdata)

  // fetch data api 

  useEffect(() => {

    fetch("http://localhost:3000/api/aboutapi/aboutdataapi")
      .then(res => res.json())
      .then(data => {
        setaboutData(data)

      })


  }, [])

  console.log("about data", aboutData)

  return (
    <div className="bg-[#191919]">
      <div className="max-w-[1596px] mx-auto    ">
        {
          aboutBannerdata.map((text, index) =>
            index === aboutBannerdata.length - 1 && (
              <div key={text._id} className=" h-full lg:h-[650px] xl:h-[770px] px-4 lg:px-24 xl:px-36 py-10 lg:py-20 xl:py-24 grid lg:grid-cols-2 justify-center items-center gap-10 lg:gap-24 border border-[#222222]">
                {/* text site */}
                <div>
                  <h2 className={`text-[${barlow.className}] text-3xl  lg:text-4xl xl:text-5xl font-semibold text-[#9EFF00] uppercase`}>{text.AboutBannerTitle}</h2>
                  <p className={`text-[${barlow.className}]  text-[14px] lg:text-[16px] xl:text-[20px] font-normal  text-[#E6E6E6] pt-5 leading-8`}>{text.Description}</p>
                </div>
                {/* image site */}
                <div>
                  
                  <img src={text.AboutImage}
                    alt={text.AboutBannerTitle || "About Image"} // alt must be a string
                    width={490}
                    height={571}
                    className="w-full lg:w-[490px] xl:w-full h-[300px] lg:h-[480px] xl:h-[571px] rounded-2xl object-cover" />

                </div>
              </div>
            )
          )
        }

      </div>
    </div>
  )
}

export default AboutUsHero