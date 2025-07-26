'use client'
import { Barlow } from "next/font/google";
import { FaPaintBrush } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useAuth } from "../../../../../context/AuthContext";
import { useEffect } from "react";

const barlow = Barlow({
  weight: "600",
  subsets: ["latin"],
});

function FollowUs() {


  const { oppeningday, setoppeningday, contactmediumlink, setcontactmediumlink } = useAuth();


  // fetch office oppening day  api 

  useEffect(() => {

    fetch("http://localhost:3000/api/contactusapi/contactusOpeningday")
      .then(res => res.json())
      .then(data => {
        setoppeningday(data)

      })


  }, [])

  console.log("office oppening day data", oppeningday)



  // fetch contact medium link api 

  useEffect(() => {

    fetch("http://localhost:3000/api/contactusapi/contactussocialLink")
      .then(res => res.json())
      .then(data => {
        setcontactmediumlink(data)

      })


  }, [])

  console.log("contact medium link data", contactmediumlink)



  return (
    <div className="bg-[#191919] hidden lg:flex">
      <div className="max-w-[1596px] mx-auto  border-l border-r border-b border-[#222222] w-full  ">
        <div className=" py-12 px-12">
          <div className=" flex items-center justify-center gap-20">
            {/* first */}
            <div className=" mt-12">
              {
                oppeningday.map((daydata, index) => index === oppeningday.length - 1 && (
                  <div key={oppeningday._id} className=" flex items-center justify-around gap-6">

                    <div className=" border-r border-[#222222]">
                      <p className=" text-white text-2xl lg:text-[16px] xl:text-2xl font-[400]">Operating Days</p>
                    </div>
                    <div className="">
                      <button className="btn text-2xl lg:text-[16px] xl:text-2xl font-[400] bg-[#262626] rounded-[12px]  border border-[#222222] text-white h-14 shadow-2xs">

                        {daydata.Office_Time_Day_Type}
                      </button>
                    </div>
                  </div>
                ))
              }

            </div>
            {/* second */}
            <div>
              <div className="lg:flex items-center justify-center gap-6">
                {contactmediumlink.map((contactmediumdata, index) =>
                  index === contactmediumlink.length - 1 && (
                    <div key={contactmediumdata._id} className="flex flex-col items-center gap-4">
                      <p className="text-white text-2xl lg:text-[16px] xl:text-2xl font-[400]">Stay connected with us</p>

                      <div className="flex gap-4">
                        <a href={contactmediumdata.Facebook_Link} target="_blank" rel="noopener noreferrer">
                          <span className="btn text-xl font-[400] bg-[#535353] rounded-[12px] border border-[#222222] text-white shadow-2xs flex justify-center items-center w-14 h-14">
                            <FaFacebook className="text-[#9EFF00] text-2xl" />
                          </span>
                        </a>

                        <a href={contactmediumdata.Twitter_Link} target="_blank" rel="noopener noreferrer">
                          <span className="btn text-xl font-[400] bg-[#535353] rounded-[12px] border border-[#222222] text-white shadow-2xs flex justify-center items-center w-14 h-14">
                            <FaXTwitter className="text-[#9EFF00] text-2xl" />
                          </span>
                        </a>

                        <a href={contactmediumdata.Linkedin_Link} target="_blank" rel="noopener noreferrer">
                          <span className="btn text-xl font-[400] bg-[#535353] rounded-[12px] border border-[#222222] text-white shadow-2xs flex justify-center items-center w-14 h-14">
                            <FaLinkedin className="text-[#9EFF00] text-2xl" />
                          </span>
                        </a>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default FollowUs;
