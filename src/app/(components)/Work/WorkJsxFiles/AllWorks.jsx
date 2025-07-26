'use client'
import React, { useEffect } from "react";
import { BsCopy } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { LuSquareDashedMousePointer } from "react-icons/lu";
import { GiStarsStack } from "react-icons/gi";
import Image from "next/image"; 
import { MdOutlineArrowOutward } from "react-icons/md";

import projectimg1 from "../../../../../public/images/workpageimage/Image.png";
import projectimg2 from "../../../../../public/images/workpageimage/Image1.png";
import projectimg3 from "../../../../../public/images/workpageimage/Image2.png";
import projectimg4 from "../../../../../public/images/workpageimage/Image3.png";
import { useAuth } from "../../../../../context/AuthContext";

function AllWorks() {


  const {  workalltitle, setworkalltitle, workalldata, setworkalldata} = useAuth()


    // fetch all Work Title and description api 

    useEffect(() => {

        fetch("https://optimize-agency.vercel.app/api/workapi/titleanddescripform")
            .then(res => res.json())
            .then(data => {
              setworkalltitle(data)

            })


    }, [])

    console.log("work title all data", workalltitle)


    // fetch all Work all data api 

    
    useEffect(() => {

      fetch("https://optimize-agency.vercel.app/api/workapi/workprojectapi")
          .then(res => res.json())
          .then(data => {
            setworkalldata(data)

          })


  }, [])

  console.log("work all data", workalldata)

  return (
    <div className="bg-[#191919]">
      <div className="max-w-[1596px] mx-auto  pt-10 lg:pt-20 xl:pt-32 border border-[#222222]  ">
        {
          workalltitle.map((title,index) => index === workalltitle.length - 1 && (
            <div key={title._id} className="border-b border-[#222222] pb-10 lg:pb-12 px-4 lg:px-12">
            <h3 className=" text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#9EFF00] pb-3.5 uppercase">
              {title.Title_Name}
            </h3>
            <p className=" text-[14px] lg:text-[16px] xl:text-lg font-normal pb-12 text-[#E6E6E6]">
            {title.Project_Descripton}
            </p>
            <button className="btn text-[14px] lg:text-xl font-normal bg-[#262626] hover:bg-[#9EFF00] hover:text-black rounded-[12px]  border border-[#222222] text-white h-14 shadow-2xs ">
            {title.Button_Text} : 
            </button>
          </div>
          ))
        }
       
        {/* ux design */}
        <div className=" grid lg:grid-cols-2">
          {
            workalldata.map((data, index) =>(
              <div className=" border border-[#222222]  h-full lg:h-[800px] xl:h-[908px]">
              <div>
                <h3 className=" text-xl xl:text-2xl font-medium text-[#98989A] border-b border-[#222222] py-7 px-4 lg:px-12 uppercase">
                  {data.Project_Type_Name}
                </h3>
              </div>
              <div className=" py-7 px-4 lg:px-12">
                
                <img src={data.Project_Image} alt={data.Project_Name} className=" w-full rounded-xl h-[340px] xl:h-[423px]" />
                <div>
                  <h3 className=" text-lg xl:text-2xl font-medium text-[#9EFF00] pt-7 uppercase">
                    {data.Project_Name}
                  </h3>
                  <a href={data.Project_Live_Link} target="_blank" rel="noopener noreferrer">
                  <div className="pt-7 flex items-center justify-between">
                    <div>
                      <button className="btn text-sm xl:text-xl  font-normal bg-[#262626] rounded-[12px]  border border-[#222222] text-[#98989A]  h-14 shadow-2xs">
                        
                      <p className="">{data.Project_Live_Link}</p>
                      </button>
                    </div>
  
                    <div>
                      <button className=" btn  font-normal bg-[#262626] rounded-[12px]  border border-[#222222]   h-14  text-3xl shadow-2xs ">
                        {" "}
                        <MdOutlineArrowOutward className=" text-[#9EFF00]" />
                      </button>
                    </div>
                  </div>
                  </a>
                  
                  <div className=" ">
                    <p className=" xl:text-lg font-normal text-sm text-[#98989A] pt-7">We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.</p>
                  </div>
                </div>
              </div>
            </div>
            ))
          }
         
        
          
          
        </div>
      </div>
    </div>
  );
}

export default AllWorks;
