'use client'

import React, { useEffect } from "react";
import { useAuth } from "../../../../../context/AuthContext";

function Design() {

  const { servicallcategory, setservicallcategory, servicallName, setservicallName, servicallData, setservicallData } = useAuth()



  // fetch all service category  api

  useEffect(() => {

    fetch("https://optimize-agency.vercel.app/api/sarviceapi/ServiceAllCategoryForm")
      .then(res => res.json())
      .then(data => {
        setservicallcategory(data)

      })


  }, [])

  console.log("service all category", servicallcategory)


  // fetch all service name api

  useEffect(() => {

    fetch("https://optimize-agency.vercel.app/api/sarviceapi/AllServiceNameForm")
      .then(res => res.json())
      .then(data => {
        setservicallName(data)

      })


  }, [])

  console.log("service all name", servicallName)


  // fetch all Service data api

  useEffect(() => {

    fetch("https://optimize-agency.vercel.app/api/sarviceapi/ServiceAllDataForm")
      .then(res => res.json())
      .then(data => {
        setservicallData(data)

      })


  }, [])

  console.log("service all data", servicallData)




  return (
    <div className="bg-[#191919]">
      {
        servicallcategory.map((catgory, index) => (
          <div key={catgory._id} className="max-w-[1596px] mx-auto pt-10 lg:pt-32 border border-[#222222]  ">
            <div className="border-b border-[#222222] px-4 pb-10 lg:pb-12 lg:px-12">
              <h3 className=" text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#9EFF00] pb-3.5 uppercase">{catgory.Category_Name}</h3>
              <p className="text-[14px] lg:text-[16px] xl:text-lg font-normal pb-12 text-[#E6E6E6]">
                {catgory.Category_Summery}
              </p>
              <button className="btn text-[16px] xl:text-xl hover:bg-[#9EFF00] hover:text-black font-normal bg-[#262626] rounded-[12px]  border border-[#222222] text-white h-14 shadow-2xs">
                {catgory.Category_Button_Text} : 
              </button>
            </div>
            {/* ux design */}
            {
              servicallName.filter(nameservice => nameservice.Category_Name === catgory.Category_Name)
              .map((nameservice) =>(
                <div>
                <div className="  pt-7 lg:pt-12 border-b border-[#222222] pb-7 lg:pb-12 px-4 lg:px-12">
                  <h3 className=" text-xl lg:text-[22px] xl:text-3xl font-medium text-[#98989A] uppercase">
                    {nameservice.Service_Name}
                  </h3>
                </div>
                <div className=" grid grid-cols-2 lg:grid-cols-4">
                  {
                    servicallData.filter(data => data.SelectService == nameservice.Service_Name )
                    .map((data) =>(
                      <div key={data._id} className=" pt-0 lg:pt-12 border border-[#222222] pb-0 lg:pb-10 px-4 lg:px-5 xl:px-10">
                      <div className=" h-72 lg:h-56 xl:h-72 p-5  xl:p-12">
                        <div className="border-2 border-[#222222] h-20 w-20 rounded-[12px] flex justify-center items-center">
                          
                          <img src={data.ServiceImage} className="h-20 w-20 rounded-[12px]" alt={data.SelectService} />
                        </div>
                        <div className=" pt-6">
                          <p className=" text-[16px] xl:text-xl font-medium text-white">
                          {data.ServiceSummery}
                          </p>
                        </div>
                      </div>
                    </div>
                    ))
                  }
                </div>
              </div>
              ))
            }
          </div>
        ))
      }

    </div>
  );
}

export default Design;
