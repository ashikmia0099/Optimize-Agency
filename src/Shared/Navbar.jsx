"use client";

import Link from "next/link";
import React, { useContext, useState } from "react";
import { IoNotificationsSharp, IoChatbubbleEllipses, IoNotifications } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { FaRegUserCircle, FaHome, FaNetworkWired, FaNewspaper } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { RiMenu2Line, RiContactsBook3Fill } from "react-icons/ri";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { VscServerProcess } from "react-icons/vsc";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { GiLifeBar } from "react-icons/gi";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

import logoimage from '../../public/cropped_image.png'
import Image from "next/image";


function Navbar() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { handleSignInWithEmail, user, setUser, handleSignOut } = useAuth()
  const pathname = usePathname();
  const router = useRouter();


  const isActive = (href) => {
    return pathname === href ||
      (href !== '/' && pathname.startsWith(href));
  };



  const handleLogout = () => {
    handleSignOut()
      .then(() => {

        router.push('/Auth')

      })
      .catch((error) => {

        return (error)

      })
  }



  const links = (
    <>
      {user && user?.email ? (
        <>
          <li className={`xl:text-lg lg:text-[16px] text-lg font-semibold ${isActive('/') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`xl:text-lg lg:text-[16px] text-lg font-semibold ${isActive('/Services') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <Link href="/Services">Services</Link>
          </li>
          <li className={`xl:text-lg lg:text-[16px] text-lg font-semibold ${isActive('/Work') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <Link href="/Work">Work</Link>
          </li>
          <li className={`xl:text-lg lg:text-[16px] text-lg font-semibold ${isActive('/Process') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <Link href="/Process">Process</Link>
          </li>
          <li className={`xl:text-lg lg:text-[16px] text-lg font-semibold ${isActive('/AboutUs') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <Link href="/AboutUs">About</Link>
          </li>
          <li className={`xl:text-lg lg:text-[16px] text-lg font-semibold ${isActive('/Homepages/home') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <Link href="/Blogs">Blogs</Link>
          </li>
          <li className={`xl:text-lg lg:text-[16px] text-lg font-semibold ${isActive('/Careers') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <Link href="/Careers">Careers</Link>
          </li>
          <li className={`xl:text-lg lg:text-[16px] text-lg font-semibold ${isActive('/ContactUs') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <Link href="/ContactUs">Contact Us</Link>
          </li>
          <li className={`xl:text-lg lg:text-[16px] text-lg font-semibold ${isActive('/dashboard') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          {/* <li className={`xl:text-lg lg:text-[16px] text-lg font-semibold ${isActive('/Homepages/home') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <Link href="/Blogs/BlogsJsx/BlogDetailsPage">Blogs Details</Link>
          </li> */}
        </>

      ) : (

        <>
          <li className={`xl:text-lg lg:text-[16px] text-lg font-semibold ${isActive('/') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`xl:text-lg lg:text-[16px] text-lg font-semibold ${isActive('/Services') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <Link href="/Services">Services</Link>
          </li>
          <li className={`xl:text-lg lg:text-[16px] text-lg font-semibold ${isActive('/Work') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <Link href="/Work">Work</Link>
          </li>
          <li className={`xl:text-lg lg:text-[16px] text-lg font-semibold ${isActive('/Process') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <Link href="/Process">Process</Link>
          </li>
          <li className={`xl:text-lg lg:text-[16px] text-lg font-semibold ${isActive('/AboutUs') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <Link href="/AboutUs">About</Link>
          </li>
          <li className={`xl:text-lg lg:text-[16px] text-lg font-semibold ${isActive('/Homepages/home') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <Link href="/Blogs">Blogs</Link>
          </li>
          <li className={`xl:text-lg lg:text-[16px] text-lg font-semibold ${isActive('/Careers') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <Link href="/Careers">Careers</Link>
          </li>
          <li className={`xl:text-lg lg:text-[16px] text-lg font-semibold ${isActive('/ContactUs') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <Link href="/ContactUs">Contact Us</Link>
          </li>
          <li className={`xl:text-lg lg:text-[16px] text-lg font-semibold ${isActive('/dashboard') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          {/* <li className={`xl:text-lg lg:text-[16px] text-lg font-semibold ${isActive('/Homepages/home') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <Link href="/Blogs/BlogsJsx/BlogDetailsPage">Blogs Details</Link>
          </li> */}

        </>

      )}
    </>

  );


  const mobileLinks = (

    <>
      {user && user?.email ? (
        <>
          <li className={`text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <span className="text-2xl"><FaHome /></span>
            <Link href="/">Home</Link>
          </li>
          <li className={`text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/Services') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <span className="text-2xl"><MdOutlineMiscellaneousServices /></span>
            <Link href="/Services">Services</Link>
          </li>
          <li className={`text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/Work') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <span className="text-2xl"><FaNetworkWired /></span>
            <Link href="/Work">Work</Link>
          </li>
          <li className={`text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/Process') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <span className="text-2xl"><VscServerProcess /></span>
            <Link href="/Process">Process</Link>
          </li>
          <li className={`text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/AboutUs') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <span className="text-2xl"><TbArrowRoundaboutRight /></span>
            <Link href="/AboutUs">About</Link>
          </li>
          <li className={`text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/Homepages/home') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <span className="text-2xl"><FaNewspaper /></span>
            <Link href="/Blogs">Blogs</Link>
          </li>
          <li className={`text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/Careers') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <span className="text-2xl"><GiLifeBar /></span>
            <Link href="/Careers">Careers</Link>
          </li>
          <li className={`text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/ContactUs') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <span className="text-2xl"><RiContactsBook3Fill /></span>
            <Link href="/ContactUs">Contact Us</Link>
          </li>
          <li className={`text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/Notifications') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <span className="text-2xl"><IoNotifications /></span>
            <Link href="/Notifications">Notifications</Link>
          </li>
          <li className={`xl:text-lg lg:text-[16px] text-lg font-semibold ${isActive('/dashboard') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <Link href="/dashboard">Dashboard</Link>
          </li>
        </>
      ) : (
        <>
          <li className={`text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <span className="text-2xl"><FaHome /></span>
            <Link href="/">Home</Link>
          </li>
          <li className={`text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/Services') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <span className="text-2xl"><MdOutlineMiscellaneousServices /></span>
            <Link href="/Services">Services</Link>
          </li>
          <li className={`text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/Work') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <span className="text-2xl"><FaNetworkWired /></span>
            <Link href="/Work">Work</Link>
          </li>
          <li className={`text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/Process') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <span className="text-2xl"><VscServerProcess /></span>
            <Link href="/Process">Process</Link>
          </li>
          <li className={`text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/AboutUs') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <span className="text-2xl"><TbArrowRoundaboutRight /></span>
            <Link href="/AboutUs">About</Link>
          </li>
          <li className={`text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/Homepages/home') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <span className="text-2xl"><FaNewspaper /></span>
            <Link href="/Blogs">Blogs</Link>
          </li>
          <li className={`text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/Careers') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <span className="text-2xl"><GiLifeBar /></span>
            <Link href="/Careers">Careers</Link>
          </li>
          <li className={`text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/ContactUs') ? 'text-[#9EFF00]' : 'text-white'}`}>
            <span className="text-2xl"><RiContactsBook3Fill /></span>
            <Link href="/ContactUs">Contact Us</Link>
          </li>

        </>
      )}
    </>

  );

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (

    <div className="sticky top-0 z-40 bg-[#191919]">
      <div className="navbar max-w-[1596px] h-24 mx-auto bg-[#191919] backdrop-blur-sm">
        <div className="navbar-start">
          <Link href="/">
            <h1 className="flex items-center gap-2">
              <span className="text-lg md:text-3xl font-extrabold text-[#A259FF]">
                <Image src={logoimage} className=" h-10 w-10 lg:h-14 lg:w-14"></Image>
              </span>
              <span className="font-bold text-[14px] md:text-2xl text-[#FFFDE7] block lg:hidden xl:block">
                ALPHA WOLF
              </span>
            </h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3 lg:gap-2 xl:gap-3">{links}</ul>
        </div>

        <div className="navbar-end">
          <div className=" hidden lg:block">
            {
              user && user?.email ? (
                <div className="flex items-center px-5 xl:px-16 lg:gap-4  xl:gap-12 ">
                  <div>
                    <button className="btn btn-ghost btn-circle">
                      <div className="indicator">
                        <IoNotificationsSharp className="text-[#D8FF99] text-2xl xl:text-4xl" />
                        <span className="badge badge-xs badge-black indicator-item text-[12px]">
                          9+
                        </span>
                      </div>
                    </button>
                  </div>
                  <div>
                    <button className="btn btn-ghost btn-circle">
                      <div className="indicator">
                        <IoChatbubbleEllipses className="text-[#D8FF99] text-2xl xl:text-4xl" />
                        <span className="badge badge-xs badge-black indicator-item text-[12px]">
                          9+
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              ) : (
                <p></p>
              )
            }

          </div>
          <div className="hidden lg:block px-5 xl:px-0">

            {user && user?.email ? (

              <a onClick={handleLogout} className="btn text-black bg-[#9EFF00] hover:bg-[#9EFF00] w-20 h-10 xl:w-32 xl:h-14 text-lg font-medium border-none shadow-2xs">
                LogOut
              </a>

            ) : (
              <Link href={"/Auth"}>
                <button className="btn text-black bg-[#9EFF00] hover:bg-[#9EFF00] w-20 h-10 xl:w-32 xl:h-14 text-lg font-medium border-none shadow-2xs">
                  SignIn
                </button>
              </Link>
            )}

          </div>
          <div className="dropdown">
            <button
              className="btn bg-[#9dff00bb] shadow-2xs border-none lg:hidden"
              onClick={toggleDrawer}
            >
              <RiMenu2Line className="text-2xl text-white" />
            </button>

            {/* Drawer with Animation */}
            <div className={`fixed inset-0 z-40 transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              {/* Overlay */}
              <div
                className="fixed inset-0 bg-black/50 transition-opacity duration-300"
                onClick={closeDrawer}
              ></div>

              {/* Drawer Side */}
              <div className={`fixed top-0 left-0 h-full w-full md:w-[80%] max-w-md bg-[#131212] text-white transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex pt-5 px-5 justify-between border-b border-[#585858] pb-6">
                  <div>
                    <h1 className="flex items-center gap-2">
                      <span className="text-lg md:text-3xl font-extrabold text-[#A259FF]">
                        <Image src={logoimage} className=" h-10 w-10"></Image>
                      </span>
                      <span className="font-bold text-[14px] md:text-2xl text-[#FFFDE7]  block">
                        ALPHA WOLF
                      </span>
                    </h1>
                  </div>
                  <div>
                    <button
                      className="text-4xl text-white cursor-pointer"
                      onClick={closeDrawer}
                    >
                      <RxCrossCircled className="text-red-700" />
                    </button>
                  </div>
                </div>
                <div className="overflow-y-auto h-[calc(100vh-80px)] bg-[#2B2B2B]">
                  <ul className="pl-6 mt-5 space-y-2">
                    {mobileLinks}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


  );
}

export default Navbar;