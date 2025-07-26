'use client'
import React, { useEffect } from "react";
import { Barlow } from "next/font/google";
import { FaPaintBrush } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

const barlow = Barlow({
  weight: "600",
  subsets: ["latin"],
});

function Question() {


  const { questionData, setquestionData } = useAuth()




  // fetch frequintly asked question api 

  useEffect(() => {

    fetch("https://optimize-agency.vercel.app/api/sharedquestionapi")
      .then(res => res.json())
      .then(data => {
        setquestionData(data)

      })

  }, [])

  console.log("question data", questionData)



  return (
    <div className="bg-[#191919]">
      <div className="max-w-[1596px] mx-auto h-[330px] bg-[url(/images/heroimages/OurService.png)] bg-no-repeat bg-cover">
        <div className='bg-[#0c0e0acb] h-[330px] '>
          <div className="  items-center justify-center py-24">
            <h3
              className={`text-[${barlow.className}] text-3xl lg:text-4xl xl:text-5xl font-semibold text-center text-white`}
            >
              Frequently Asked Questions
            </h3>
            <p
              className={`text-[${barlow.className}] text-[14px] lg:text-[16px] xl:text-lg font-semibold text-center text-[#E6E6E6] pt-6`}
            >
              Still you have any questions? Contact our Team via
              hello@squareup.com
            </p>
          </div>
        </div>

      </div>
      <div className="max-w-[1596px] mx-auto">
        <div className="grid lg:grid-cols-2 ">

          <div className="collapse collapse-plus bg-[#191919] border border-[#222222]  rounded-none hidden lg:block">

            <div className="  text-2xl font-medium text-[#D8FF99] h-24">

            </div>
            <div className=" text-sm text-white">

            </div>
          </div>
          <div className="collapse collapse-plus bg-[#191919] border border-[#222222]  rounded-none">

            <div className="   text-2xl font-medium text-[#D8FF99] h-24">

            </div>
            <div className="collapse-content text-sm text-white">

            </div>
          </div>

          {/* question data fetch */}

          {
            questionData.map((data, index) => (
              <div className="collapse collapse-plus bg-[#191919] border border-[#222222]  rounded-none">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-[16px] lg:text-lg  xl:text-2xl font-medium text-[#D8FF99] h-24">
                  {data.Question_Title}
                </div>
                <div className="collapse-content text-sm text-white">
                  {data.Question_Answer}
                </div>
              </div>
            ))
          }




          <div className="collapse collapse-plus bg-[#191919] border border-[#222222]  rounded-none">

            <div className="  text-2xl font-medium text-[#D8FF99] h-24">

            </div>
            <div className=" text-sm text-white">

            </div>
          </div>
          <div className="collapse collapse-plus bg-[#191919] border border-[#222222]  rounded-none hidden lg:block">

            <div className="   text-2xl font-medium text-[#D8FF99] h-24">

            </div>
            <div className="collapse-content text-sm text-white">

            </div>
          </div>



        </div>
      </div>
    </div>
  );
}

export default Question;
