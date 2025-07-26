'use client'
import { BsCopy } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { LuSquareDashedMousePointer } from "react-icons/lu";
import { GiStarsStack } from "react-icons/gi";
import { useEffect } from "react";
import { useAuth } from "../../../../../context/AuthContext";

function CurrentOpening() {


  const { careeerSeciondtitle, setcareeerSeciondtitle, careeercategory, setcareeercategory, careeerSeconddata, setcareeerSeconddata } = useAuth()


  // fetch career second title api

  useEffect(() => {

    fetch("http://localhost:3000/api/careerapi/CareerSecondTitleFormapi")
      .then(res => res.json())
      .then(data => {
        setcareeerSeciondtitle(data)

      })


  }, [])

  // fetch career Category  api

  useEffect(() => {

    fetch("http://localhost:3000/api/careerapi/CareerSecondDataCategoryFormapi")
      .then(res => res.json())
      .then(data => {
        setcareeercategory(data)

      })


  }, [])

  console.log("career second category ", careeercategory)


  // fetch career second data   api

  useEffect(() => {

    fetch("http://localhost:3000/api/careerapi/CareerSecondDataFormapi")
      .then(res => res.json())
      .then(data => {
        setcareeerSeconddata(data)

      })


  }, [])



  console.log("career second data ", careeerSeconddata)




  return (
    <div className="bg-[#191919]">
      <div className="max-w-[1596px] mx-auto pt-10 lg:pt-7 xl:pt-32 border border-[#222222]  ">
        {
          careeerSeciondtitle.map((secondtitle, index) =>

            index === careeerSeciondtitle.length - 1 && (
              <div className="border-b border-[#222222] pb-0 lg:pb-7 xl:pb-12 px-4 lg:px-10 xl:px-12">
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white pb-3.5">
                  {secondtitle.Title}
                </h3>
                <p className=" text-[14px] lg:text-[16px] xl:text-lg font-normal pb-10 lg:pb-12 text-[#E6E6E6]">
                  {secondtitle.Description}
                </p>

              </div>
            )

          )
        }

        {/*  jobs categroy */}


        {
          careeercategory.map((careercategory) => (
            <div key={careercategory._id}>
              <div className="pt-10 lg:pt-12 border-b border-[#222222] pb-10 lg:pb-12 px-4 lg:px-12">
                <h3 className="text-xl lg:text-[22px] xl:text-3xl font-medium text-[#98989A] uppercase">
                  {careercategory.CategoryName}
                </h3>
              </div>
              <div className="grid lg:grid-cols-3">
                {
                  careeerSeconddata
                    .filter(secondData => secondData.Select_Career_Category === careercategory.CategoryName)
                    .map((secondData) => (
                      <div key={secondData._id} className="pt-12 lg:pt-5 border border-[#222222] p-4 lg:px-10 xl:p-12 h-full lg:h-[472px] xl:h-[553px] flex flex-col">
                        <div>
                          <div className="border-2 border-[#222222] h-24 w-24 lg:h-[74px] lg:w-[74px] xl:h-24 xl:w-24 rounded-[12px] flex justify-center items-center">
                           
                            <img src={secondData.Technology_Image} alt="" className="h-24 w-24 lg:h-[74px] lg:w-[74px] xl:h-24 xl:w-24" />
                          </div>
                          <div>
                            <p className="text-2xl lg:text-xl xl:text-2xl font-medium text-white py-4 xl:py-7">
                              {secondData.Technology_Name}
                            </p>
                            <p className="text-[14px] lg:text-[16px] xl:text-lg font-normal text-[#98989A] py-4 xl:py-7">
                              {secondData.Description}
                            </p>
                          </div>
                        </div>
                        <div className="mt-auto">
                          <button className="btn w-full rounded-lg border-none shadow-2xs bg-[#262626] hover:bg-[#9EFF00] hover:text-black lg:h-[52px] h-[60px] xl:h-[60px] text-lg lg:text-[14px] xl:text-lg text-white">
                            Apply Now
                          </button>
                        </div>
                      </div>
                    ))
                }
              </div>
            </div>
          ))
        }

      </div>
    </div>
  );
}

export default CurrentOpening;
