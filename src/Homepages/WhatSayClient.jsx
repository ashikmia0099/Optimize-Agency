import React from "react";
import { Barlow } from "next/font/google";
import Image from "next/image";

import user1 from "../../public/images/userImage/men1.jpg";


const barlow = Barlow({
  weight: "600",
  subsets: ["latin"],
});

function WhatSayClient() {
  return (
    <div>
      <div className="bg-[#191919]">
        <div className="max-w-[1596px] mx-auto h-[330px] bg-[url(/images/heroimages/OurService.png)] bg-no-repeat bg-cover">
          <div className='bg-[#0c0e0acb] h-[330px] '>
          <div className="  items-center justify-center py-24">
            <h3
              className={`text-[${barlow.className}] text-3xl lg:text-4xl xl:text-5xl font-semibold text-center text-white`}
            >
              What our Clients say About us
            </h3>
            <p
              className={`text-[${barlow.className}] text-[14px] lg:text-[16px] xl:text-lg font-semibold text-center text-[#E6E6E6] pt-6 px-4 lg:px-20`}
            >
              At SquareUp, we take pride in delivering exceptional digital
              products and services that drive success for our clients. Here's
              what some of our satisfied clients have to say about their
              experience working with us
            </p>
          </div>
          </div>
          
        </div>
        <div className="max-w-[1596px] mx-auto">
          <div className="grid lg:grid-cols-2">
            <div className=" h-full lg:h-[532px]   py-10 px-6 lg:px-14 lg:py-16  xl:py-24 xl:px-20 bg-[#191919] flex flex-col border border-[#222222]">
              <div>
               
                <h3 className={` text-lg lg:text-xl xl:text-[30px]  font-semibold text-[#D8FF99] text-[${barlow.className}] pt-10`} >
                  SquareUp has been Instrumental in Transforming our Online
                  Presence.
                </h3>
                <p
                  className={`text-[14px] lg:text-[16px] xl:text-lg font-normal leading-6 text-[${barlow.className}] text-white pt-5`}
                >
                  Their team's expertise in web development and design resulted
                  in a visually stunning and user-friendly e-commerce platform.
                  Our online sales have skyrocketed, and we couldn't be happier.
                </p>
              </div>
              <div className=" mt-auto">
                <div className=" h-[103px] w-full flex justify-between items-center border border-[#222222] p-5 rounded-[8px] mt-10">
                  <div className=" flex gap-3 text-[20px] font-medium">
                    <div>
                      <Image
                        src={user1}
                        className=" h-14 w-14 rounded-[8px]"
                        alt=" mr smith"
                      ></Image>
                    </div>
                    <div>
                      <p
                        className={`text-lg lg:[16px] xl:text-lg font-semibold lg:font-normal leading-6 text-[${barlow.className}] text-white pt-1`}
                      >
                        {" "}
                        John Smith
                      </p>
                      <p
                        className={` text-[14px] lg:text-[16px] xl:text-lg font-normal leading-6 text-[${barlow.className}] text-white pt-1`}
                      >
                        CEO of Chic Boutique
                      </p>
                    </div>
                  </div>
                  <div className=" hidden lg:block">
                    <button
                      className={` btn bg-[#262626] hover:bg-[#9EFF00] hover:text-black font-medium rounded-[8px] text-sm xl:text-lg  text-[${barlow.className}] border-none text-white shadow-2xs lg:h-12 xl:h-16 lg:w-28 xl:w-40`}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-full lg:h-[532px]   py-10 px-6 lg:px-14 lg:py-16  xl:py-24 xl:px-20 bg-[#191919] flex flex-col border border-[#222222]">
              <div>
               
                <h3 className={` text-lg lg:text-xl xl:text-[30px]  font-semibold text-[#D8FF99] text-[${barlow.className}] pt-10`} >
                  SquareUp has been Instrumental in Transforming our Online
                  Presence.
                </h3>
                <p
                  className={`text-[14px] lg:text-[16px] xl:text-lg font-normal leading-6 text-[${barlow.className}] text-white pt-5`}
                >
                  Their team's expertise in web development and design resulted
                  in a visually stunning and user-friendly e-commerce platform.
                  Our online sales have skyrocketed, and we couldn't be happier.
                </p>
              </div>
              <div className=" mt-auto">
                <div className=" h-[103px] w-full flex justify-between items-center border border-[#222222] p-5 rounded-[8px] mt-10">
                  <div className=" flex gap-3 text-[20px] font-medium">
                    <div>
                      <Image
                        src={user1}
                        className=" h-14 w-14 rounded-[8px]"
                        alt=" mr smith"
                      ></Image>
                    </div>
                    <div>
                      <p
                        className={`text-lg lg:[16px] xl:text-lg font-semibold lg:font-normal leading-6 text-[${barlow.className}] text-white pt-1`}
                      >
                        {" "}
                        John Smith
                      </p>
                      <p
                        className={` text-[14px] lg:text-[16px] xl:text-lg font-normal leading-6 text-[${barlow.className}] text-white pt-1`}
                      >
                        CEO of Chic Boutique
                      </p>
                    </div>
                  </div>
                  <div className=" hidden lg:block">
                    <button
                      className={` btn bg-[#262626] hover:bg-[#9EFF00] hover:text-black font-medium rounded-[8px] text-sm xl:text-lg  text-[${barlow.className}] border-none text-white shadow-2xs lg:h-12 xl:h-16 lg:w-28 xl:w-40`}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-full lg:h-[532px]   py-10 px-6 lg:px-14 lg:py-16  xl:py-24 xl:px-20 bg-[#191919] flex flex-col border border-[#222222]">
              <div>
               
                <h3 className={` text-lg lg:text-xl xl:text-[30px]  font-semibold text-[#D8FF99] text-[${barlow.className}] pt-10`} >
                  SquareUp has been Instrumental in Transforming our Online
                  Presence.
                </h3>
                <p
                  className={`text-[14px] lg:text-[16px] xl:text-lg font-normal leading-6 text-[${barlow.className}] text-white pt-5`}
                >
                  Their team's expertise in web development and design resulted
                  in a visually stunning and user-friendly e-commerce platform.
                  Our online sales have skyrocketed, and we couldn't be happier.
                </p>
              </div>
              <div className=" mt-auto">
                <div className=" h-[103px] w-full flex justify-between items-center border border-[#222222] p-5 rounded-[8px] mt-10">
                  <div className=" flex gap-3 text-[20px] font-medium">
                    <div>
                      <Image
                        src={user1}
                        className=" h-14 w-14 rounded-[8px]"
                        alt=" mr smith"
                      ></Image>
                    </div>
                    <div>
                      <p
                        className={`text-lg lg:[16px] xl:text-lg font-semibold lg:font-normal leading-6 text-[${barlow.className}] text-white pt-1`}
                      >
                        {" "}
                        John Smith
                      </p>
                      <p
                        className={` text-[14px] lg:text-[16px] xl:text-lg font-normal leading-6 text-[${barlow.className}] text-white pt-1`}
                      >
                        CEO of Chic Boutique
                      </p>
                    </div>
                  </div>
                  <div className=" hidden lg:block">
                    <button
                      className={` btn bg-[#262626] hover:bg-[#9EFF00] hover:text-black font-medium rounded-[8px] text-sm xl:text-lg  text-[${barlow.className}] border-none text-white shadow-2xs lg:h-12 xl:h-16 lg:w-28 xl:w-40`}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-full lg:h-[532px]   py-10 px-6 lg:px-14 lg:py-16  xl:py-24 xl:px-20 bg-[#191919] flex flex-col border border-[#222222]">
              <div>
               
                <h3 className={` text-lg lg:text-xl xl:text-[30px]  font-semibold text-[#D8FF99] text-[${barlow.className}] pt-10`} >
                  SquareUp has been Instrumental in Transforming our Online
                  Presence.
                </h3>
                <p
                  className={`text-[14px] lg:text-[16px] xl:text-lg font-normal leading-6 text-[${barlow.className}] text-white pt-5`}
                >
                  Their team's expertise in web development and design resulted
                  in a visually stunning and user-friendly e-commerce platform.
                  Our online sales have skyrocketed, and we couldn't be happier.
                </p>
              </div>
              <div className=" mt-auto">
                <div className=" h-[103px] w-full flex justify-between items-center border border-[#222222] p-5 rounded-[8px] mt-10">
                  <div className=" flex gap-3 text-[20px] font-medium">
                    <div>
                      <Image
                        src={user1}
                        className=" h-14 w-14 rounded-[8px]"
                        alt=" mr smith"
                      ></Image>
                    </div>
                    <div>
                      <p
                        className={`text-lg lg:[16px] xl:text-lg font-semibold lg:font-normal leading-6 text-[${barlow.className}] text-white pt-1`}
                      >
                        {" "}
                        John Smith
                      </p>
                      <p
                        className={` text-[14px] lg:text-[16px] xl:text-lg font-normal leading-6 text-[${barlow.className}] text-white pt-1`}
                      >
                        CEO of Chic Boutique
                      </p>
                    </div>
                  </div>
                  <div className=" hidden lg:block">
                    <button
                      className={` btn bg-[#262626] hover:bg-[#9EFF00] hover:text-black font-medium rounded-[8px] text-sm xl:text-lg  text-[${barlow.className}] border-none text-white shadow-2xs lg:h-12 xl:h-16 lg:w-28 xl:w-40`}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatSayClient;
