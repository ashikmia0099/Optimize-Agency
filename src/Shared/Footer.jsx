import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLocationSharp, IoLogoWhatsapp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

import { TbBrandZapier } from "react-icons/tb";

function Footer() {
  const links = (
    <>
      <li className=" text-white text-lg font-semibold">
        <Link href="/">Home</Link>
      </li>

      <li className=" text-white text-lg font-semibold">
        <Link href="/components/Services">Services</Link>
      </li>
      <li className=" text-white text-lg font-semibold">
        <Link href="/components/Work">Work</Link>
      </li>
      <li className=" text-white text-lg font-semibold">
        <Link href="/components/Process">Process</Link>
      </li>
      <li className=" text-white text-lg font-semibold">
        <Link href="/components/AboutUs">About</Link>
      </li>
      <li className=" text-white text-lg font-semibold">
        <Link href="/Homepages/home">Blogs</Link>
      </li>
      <li className=" text-white text-lg font-semibold">
        <Link href="/components/Careers">Careers</Link>
      </li>
      <li className=" text-white text-lg font-semibold">
        <Link href="/components/ContactUs">Contact Us</Link>
      </li>
    </>
  );

  return (
    <div className="bg-[#191919] border-t border-[#222222]">
      <div className=" max-w-[1596px] mx-auto  pb-16 px-4 lg:px-0">
        <div className=" pt-12 block lg:flex items-center justify-between  border-b border-[#222222] pb-10">
          <div className=" flex items-center gap-5   justify-center lg:justify-start">
            <TbBrandZapier className=" text-white text-4xl" />
            <h1 className=" text-4xl font-bold text-white">Slack </h1>
          </div>
          <div className=" py-4">
            <ul className=" grid grid-cols-3 lg:grid-cols-8 text-center lg:text-left">{links}</ul>
          </div>
          <div className=" flex items-center justify-center gap-6">
            <div>
              <button className="btn text-xl font-[400] bg-[#262626] rounded-[12px]  border border-[#222222] text-white h-14 shadow-2xs">
                <span className=" hidden lg:block">Stay connected us</span>
                <div className=" flex gap-2">
                  <span className=" btn text-xl font-[400] bg-[#535353] rounded-[12px]  border border-[#222222] text-white  shadow-2xs flex justify-center items-center pl-7">
                  <FaFacebook className=" text-[#9EFF00] mr-3 flex justify-center items-center" />
                </span>
                <span className=" btn text-xl font-[400] bg-[#535353] rounded-[12px]  border border-[#222222] text-white  shadow-2xs flex justify-center items-center pl-7">
                  <FaXTwitter className=" text-[#9EFF00] mr-3" />
                </span>
                <span className=" btn text-xl font-[400] bg-[#535353] rounded-[12px]  border border-[#222222] text-white  shadow-2xs flex justify-center items-center pl-7">
                  <FaLinkedin className=" text-[#9EFF00] mr-3" />
                </span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className=" pt-12  mt-auto block lg:flex items-center justify-between">
          <div className=" block lg:flex items-center justify-center gap-6">
            <div className=" py-2 lg:py-0">
              <button className="btn text-xl font-normal lg:bg-[#262626] rounded-[12px]  border border-[#222222] text-white h-14 shadow-2xs">
                <span>
                  <MdEmail className=" text-[#9EFF00] mr-3" />
                </span>
                <span>hello@squareup.com</span>
              </button>
            </div>
            <div className="py-2 lg:py-0">
              <button className="btn text-xl font-normal bg-[#262626] rounded-[12px]  border border-[#222222] text-white h-14 shadow-2xs">
                <span>
                  <IoLogoWhatsapp className=" text-[#9EFF00] mr-3" />
                </span>
                <span>+91 91813 23 2309</span>
              </button>
            </div>
            <div className="py-2 lg:py-0">
              <button className="btn text-xl font-normal bg-[#262626] rounded-[12px]  border border-[#222222] text-white h-14 shadow-2xs">
                <span>
                  <IoLocationSharp className=" text-[#9EFF00] mr-3" />
                </span>
                <span>Get Location</span>
              </button>
            </div>
          </div>
          <div className="">
            <p className=" text-lg font-[300] text-white">© 2023 SquareUp. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
