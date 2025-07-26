
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FaHome, FaUsers, FaNetworkWired, FaNewspaper, FaProjectDiagram, FaWpforms, FaList, FaRegListAlt, FaThList } from "react-icons/fa";
import { MdBroadcastOnHome, MdMedicalServices, MdOutlineMiscellaneousServices, MdMiscellaneousServices, MdCategory, MdFolderShared, MdContactPhone } from "react-icons/md";
import { GiLifeBar, GiNewspaper, GiChoice } from "react-icons/gi";
import { VscServerProcess } from "react-icons/vsc";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { FaFileWaveform } from 'react-icons/fa6';
import { FaEdit } from "react-icons/fa";
import { LuUsersRound } from 'react-icons/lu';
import { CiBoxList, CiViewList } from 'react-icons/ci';
import { FcBusinessContact } from 'react-icons/fc';



function Sidebar() {
  const pathname = usePathname();

  // Separate dropdown states
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [AllUsersdropDown, setAllUsers] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [workDropdown, setWorkDropdown] = useState(false);
  const [processDropdown, setProcessDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [blogsDropdown, setBlogsDropdown] = useState(false);
  const [careersDropdown, setCareersDropdown] = useState(false);
  const [SharedFile, setSharedFile] = useState(false);
  const [contactus, setContactus] = useState(false);


  const isActive = (href) => {
    return pathname === href || (href !== '/' && pathname.startsWith(href));
  };

  const menuItemClass = (active) =>
    `text-lg font-semibold flex gap-3 items-center  pb-4 ${active ? "text-[#9EFF00]" : "text-white"}`;

  const renderDropdownIcon = (open) =>
    <IoIosArrowDown className={`text-2xl transition-transform ${open ? "rotate-180" : "rotate-0"}`} />;

  return (
    <div className="bg-[#191919] h-full ">
      <div className="max-w-[1596px] mx-auto ">
        {/* Home */}
        <li className={`${menuItemClass(isActive("/"))} flex-col gap-3 py-2  px-5`}>
          <div className="flex items-center  justify-between cursor-pointer w-full" onClick={() => setHomeDropdown(!homeDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><FaHome /></span>
              <span>Home</span>
            </div>
            <div>
              {renderDropdownIcon(homeDropdown)}
            </div>
          </div>
          {homeDropdown && (
            <ul className="ml-6 mt-2 border-l border-gray-600 pl-4">
              <li className={menuItemClass(isActive("/components/Work"))}>
                <span className="text-2xl"><MdMiscellaneousServices /></span>
                <Link href="/components/Work">Our Service</Link>
              </li>
              <li className={menuItemClass(isActive("/components/Process"))}>
                <span className="text-2xl"><GiChoice /></span>
                <Link href="/components/Process">Why Choice</Link>
              </li>
              <li className={menuItemClass(isActive("/components/AboutUs"))}>
                <span className="text-2xl"><FaUsers /></span>
                <Link href="/components/AboutUs">Client Say</Link>
              </li>
            </ul>
          )}
        </li>
        {/* Login logout users */}
      

        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setAllUsers(!AllUsersdropDown)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><FaUsers /></span>
              <span>All User Information</span>
            </div>
            {renderDropdownIcon(AllUsersdropDown)}
          </div>
          {AllUsersdropDown && (
            <ul className=" mt-2 border-l border-gray-600 pl-4">
              <li className={`${menuItemClass(isActive('/dashboard/DeshboardLoginLogout/AllUsers'))} xl:text-lg lg:text-[16px]`}>
                <span className="text-2xl"><LuUsersRound /></span>
                <Link href="/dashboard/DeshboardLoginLogout/AllUsers">All Users</Link>
              </li>

            </ul>
          )}
        </li>

        {/* Services */}
        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setServiceDropdown(!serviceDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><MdOutlineMiscellaneousServices /></span>
              <span>Services</span>
            </div>
            {renderDropdownIcon(serviceDropdown)}
          </div>
          {serviceDropdown && (
            <ul className=" mt-2  border-gray-500 pl-4">
              <li className={menuItemClass(isActive("/dashboard/DeshboardServices/ServiceAllCategoryList"))}>
                <span className="text-2xl"><CiBoxList /></span>
                <Link href="/dashboard/DeshboardServices/ServiceAllCategoryList">Services All Category List</Link>
              </li>
              <li className={menuItemClass(isActive("/dashboard/DeshboardServices/AllServiceList"))}>
                <span className="text-2xl"><CiViewList /></span>
                <Link href="/dashboard/DeshboardServices/AllServiceList"> All Services List  </Link>
              </li>
              <li className={menuItemClass(isActive("/dashboard/DeshboardServices/AllServiceList"))}>
                <span className="text-2xl"><CiViewList /></span>
                <Link href="/dashboard/DeshboardServices/AllServiceList"> All Data List  </Link>
              </li>
              {/* <li className={menuItemClass(isActive("/dashboard/DeshboardServices/ServiceCategoryForm"))}>
                <span className="text-2xl"><FaWpforms /></span>
                <Link href="/dashboard/DeshboardServices/ServiceCategoryForm">Services Category Form</Link>
              </li> */}
              {/* <li className={menuItemClass(isActive("/dashboard/DeshboardServices/ServiceNameForm"))}>
                <span className="text-2xl"><FaWpforms  /></span>
                <Link href="/dashboard/DeshboardServices/ServiceNameForm">Services Name Form</Link>
              </li> */}
              <li className={menuItemClass(isActive("/dashboard/DeshboardServices/ServiceDataFrom"))}>
                <span className="text-2xl"><FaWpforms  /></span>
                <Link href="/dashboard/DeshboardServices/ServiceDataFrom">Services Data Form</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Work */}
        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setWorkDropdown(!workDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><FaNetworkWired /></span>
              <span>Work</span>
            </div>
            {renderDropdownIcon(workDropdown)}
          </div>
          {workDropdown && (
            <ul className=" mt-2  ">
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaThList /></span>
                <Link href="/dashboard/DashboardWork/AllProject">All Project</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaWpforms /></span>
                <Link href="/dashboard/DashboardWork/WorkTitleandDesForm">Title And Description Form</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaWpforms /></span>
                <Link href="/dashboard/DashboardWork/ProjectForm">Project Form</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaWpforms /></span>
                <Link href="/dashboard/DashboardWork/ProjectForm">Update Project Form</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Process */}
        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setProcessDropdown(!processDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><VscServerProcess /></span>
              <span>Process</span>
            </div>
            {renderDropdownIcon(processDropdown)}
          </div>
          {processDropdown && (
            <ul className=" mt-2  border-gray-500 ">
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaThList  /></span>
                <Link href="/dashboard/DashboardProcess/AllProcessList">All Process List</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaThList  /></span>
                <Link href="/dashboard/DashboardProcess/AllProcessTitleTextList">Process Title And Text List</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaWpforms /></span>
                <Link href="/dashboard/DashboardProcess/AllProcessTitleTextForm">Process Title Form</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaWpforms /></span>
                <Link href="/dashboard/DashboardProcess/AllProcessDataFrom">Process From</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><VscServerProcess /></span>
                <Link href="/components/Process">Update Process</Link>
              </li>
            </ul>
          )}
        </li>

        {/* About */}
        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setAboutDropdown(!aboutDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><TbArrowRoundaboutRight /></span>
              <span>About</span>
            </div>
            {renderDropdownIcon(aboutDropdown)}
          </div>
          {aboutDropdown && (
            <ul className="ml-6 mt-2  border-gray-500 pl-4">
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaThList  /></span>
                <Link href="/dashboard/DashboardAbout/AboutDataList">All About List</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaThList  /></span>
                <Link href="/dashboard/DashboardAbout/AboutBannerList">All Banner List</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaWpforms /></span>
                <Link href="/dashboard/DashboardAbout/AboutBannerForm">About Banner Form</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaWpforms /></span>
                <Link href="/dashboard/DashboardAbout/AboutDataForm">About Data Form</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><MdBroadcastOnHome /></span>
                <Link href="/dashboard/DashboardAbout/AllProcessList">About Banner Form Update</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><MdBroadcastOnHome /></span>
                <Link href="/dashboard/DashboardAbout/AllProcessList">About Form Data Update</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Blogs */}
        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setBlogsDropdown(!blogsDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><FaNewspaper /></span>
              <span>Blogs</span>
            </div>
            {renderDropdownIcon(blogsDropdown)}
          </div>
          {blogsDropdown && (
            <ul className=" mt-2  border-gray-500 pl-4">
              <li className={`${menuItemClass(isActive('/dashboard/DashboardBlogs/AllBlogs'))} xl:text-lg lg:text-[16px]`}>
                <span className="text-2xl"><FaRegListAlt /></span>
                <Link href="/dashboard/DashboardBlogs/AllCategory">All Category</Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DashboardBlogs/AllBlogs'))} xl:text-lg lg:text-[16px]`}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/dashboard/DashboardBlogs/AllBlogs">All Blogs</Link>
              </li>

              <li className={`${menuItemClass(isActive('/dashboard/DashboardBlogs/BlogCategroy'))} xl:text-lg lg:text-[16px]`}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/dashboard/DashboardBlogs/BlogCategroy">Blog Categroy From</Link>
              </li>

              <li className={`${menuItemClass(isActive('/dashboard/DashboardBlogs/BlogPostForm'))} xl:text-lg lg:text-[16px]`}>
                <span className="text-2xl"><FaWpforms /></span>
                <Link href="/dashboard/DashboardBlogs/BlogPostForm">Sec 1 : Big Banner Post Form</Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DashboardBlogs/Sec_1_2_half_Banner_Post_Form'))} xl:text-lg lg:text-[16px]`}>
                <span className="text-2xl"><FaWpforms /></span>
                <Link href="/dashboard/DashboardBlogs/Sec_1_2_half_Banner_Post_Form">Sec 1 : 2 half Banner Post Form</Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DashboardBlogs/Sec_2_half_Banner_Post_Form'))} xl:text-lg lg:text-[16px]`}>
                <span className="text-2xl"><FaWpforms /></span>
                <Link href="/dashboard/DashboardBlogs/Sec_2_half_Banner_Post_Form">Sec 2 : half Banner Post Form</Link>
              </li>
             
              <li className={`${menuItemClass(isActive('/dashboard/DashboardBlogs/Sec_3_Card_Post_Form'))} xl:text-lg lg:text-[16px]`}>
                <span className="text-2xl"><FaWpforms /></span>
                <Link href="/dashboard/DashboardBlogs/Sec_3_Card_Post_Form">Sec 3 : Card Post Form</Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DashboardBlogs/Sec_4_Card_Auto_Post_Form'))} xl:text-lg lg:text-[16px]`}>
                <span className="text-2xl"><FaWpforms /></span>
                <Link href="/dashboard/DashboardBlogs/Sec_4_Card_Auto_Post_Form">Sec 4 : Auto Card Post Form</Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DashboardBlogs/Sec_5_Single__half_Banner_Post_Form'))} xl:text-lg lg:text-[16px]`}>
                <span className="text-2xl"><FaWpforms /></span>
                <Link href="/dashboard/DashboardBlogs/Sec_5_Single__half_Banner_Post_Form">Sec 5 : Single Half Banner Post Form</Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DashboardBlogs/Sec_6_Signgle_Half_Banner_Post_Form'))} xl:text-lg lg:text-[16px]`}>
                <span className="text-2xl"><FaWpforms /></span>
                <Link href="/dashboard/DashboardBlogs/Sec_6_Signgle_Half_Banner_Post_Form">Sec 6 : Single Half Banner Post Form</Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DashboardBlogs/Sec_6_List_Post_Form'))} xl:text-lg lg:text-[16px]`}>
                <span className="text-2xl"><FaWpforms /></span>
                <Link href="/dashboard/DashboardBlogs/Sec_6_List_Post_Form">Sec 6 : List Post Form</Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DashboardBlogs/Right_Sec_1_List_Post_Form'))} xl:text-lg lg:text-[16px]`}>
                <span className="text-2xl"><FaWpforms /></span>
                <Link href="/dashboard/DashboardBlogs/Right_Sec_1_List_Post_Form">Right Sec 1 : List Post Form</Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DashboardBlogs/Right_Sec_1_Second_List_Post_Form'))} xl:text-lg lg:text-[16px]`}>
                <span className="text-2xl"><FaWpforms /></span>
                <Link href="/dashboard/DashboardBlogs/Right_Sec_1_Second_List_Post_Form">Right Sec 1 : Second List Post Form</Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DashboardBlogs/Right_Sec_1_Image_Post_Form'))} xl:text-lg lg:text-[16px]`}>
                <span className="text-2xl"><FaWpforms /></span>
                <Link href="/dashboard/DashboardBlogs/Right_Sec_1_Image_Post_Form">Right Sec 1 : Image Post Form</Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DashboardBlogs/Right_Sec_2_First_Image_Post_Form'))} xl:text-lg lg:text-[16px]`}>
                <span className="text-2xl"><FaWpforms /></span>
                <Link href="/dashboard/DashboardBlogs/Right_Sec_2_First_Image_Post_Form">Right Sec 2 : First Image Post Form</Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DashboardBlogs/Right_Sec_2_List_Post_Form'))} xl:text-lg lg:text-[16px]`}>
                <span className="text-2xl"><FaWpforms /></span>
                <Link href="/dashboard/DashboardBlogs/Right_Sec_2_List_Post_Form">Right Sec 2 : List Post Form</Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DashboardBlogs/Right_Sec_2_Image_Second_Post_Form'))} xl:text-lg lg:text-[16px]`}>
                <span className="text-2xl"><FaWpforms /></span>
                <Link href="/dashboard/DashboardBlogs/Right_Sec_2_Image_Second_Post_Form">Right Sec 2 : Second Image Post Form</Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DashboardBlogs/EditBlog'))} xl:text-lg lg:text-[16px]`}>
                <span className="text-2xl"><FaEdit /></span>
                <Link href="/dashboard/DashboardBlogs/EditBlog">Blog Edit Form</Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DashboardBlogs/EditBlog'))} xl:text-lg lg:text-[16px]`}>
                <span className="text-2xl"><FaEdit /></span>
                <Link href="/dashboard/DashboardBlogs/EditBlog">Blogs All Category</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Careers */}
        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setCareersDropdown(!careersDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><GiLifeBar /></span>
              <span>Careers</span>
            </div>
            {renderDropdownIcon(careersDropdown)}
          </div>
          {careersDropdown && (
            <ul className="ml-6 mt-2   pl-4">
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaThList  /></span>
                <Link href="/dashboard/DashboardCareer/CareerFirstTitleFormList"> Career First Title All Data</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaThList  /></span>
                <Link href="/dashboard/DashboardCareer/CareerSecondTitleList">Career Second Title All Data</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/dashboard/DashboardCareer/CareerFirstTitleForm"> Career First Title Form</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/dashboard/DashboardCareer/CareerSecondTitleForm">Career Second Title Form </Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/dashboard/DashboardCareer/CareerFirstDataForm">Career First Data Form</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/dashboard/DashboardCareer/CareerSecondataCatgoryForm">Career Second Data Category Form</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/dashboard/DashboardCareer/CareerSecondDataForm">Career Second Data Form</Link>
              </li>
             
            </ul>
          )}
        </li>

         {/* Contact us */}


         <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setContactus(!contactus)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><MdContactPhone /></span>
              <span>Contact Us Form</span>
            </div>
            {renderDropdownIcon(contactus)}
          </div>
          {contactus && (
            <ul className="ml-6 mt-2   pl-4">
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaFileWaveform  /></span>
                <Link href="/dashboard/DashboardContactUs/PhoneEmailForm"> Phone Email Change Form</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaFileWaveform  /></span>
                <Link href="/dashboard/DashboardContactUs/OfficeTimeForm">Office Time Change Form</Link>
              </li>
              
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaFileWaveform  /></span>
                <Link href="/dashboard/DashboardContactUs/SocialMediaForm">Social Media Link Form</Link>
              </li>
              
             
            </ul>
          )}
        </li>
        

        {/* shared files */}


        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setSharedFile(!SharedFile)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><MdFolderShared /></span>
              <span>Shared Files</span>
            </div>
            {renderDropdownIcon(SharedFile)}
          </div>
          {SharedFile && (
            <ul className="ml-6 mt-2   pl-4">
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaThList  /></span>
                <Link href="/dashboard/DashboardCareer/CareerFirstTitleFormList"> Shared Footer Hero All Data</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaFileWaveform  /></span>
                <Link href="/dashboard/DashboardShared/SharedFooterHero">Shared Footer Hero All Data Form</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaFileWaveform  /></span>
                <Link href="/dashboard/DashboardShared/Frequently_Asked_Questions_Form">Frequently Asked Questions</Link>
              </li>
              
             
            </ul>
          )}
        </li>
      </div>
    </div>
  );
}

export default Sidebar;
