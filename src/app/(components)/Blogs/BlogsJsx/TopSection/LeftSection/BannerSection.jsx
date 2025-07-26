'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'

import LinkImage from '../../../../../../../public/images/blogsimages/Link.png'
import image1 from '../../../../../../../public/images/blogsimages/Container.png'
import image2 from '../../../../../../../public/images/blogsimages/Container1.png'
import image3 from '../../../../../../../public/images/blogsimages/Container2.png'
import { FaRegUserCircle } from 'react-icons/fa'
import { SlCalender } from "react-icons/sl";
import { CiClock2 } from "react-icons/ci";
import { useAuth } from '../../../../../../../context/AuthContext'
import Link from 'next/link'



function BannerSection() {


    const { Sec_1_Big_Banner_Post_Form, setSec_1_Big_Banner_Post_Form, Sec_1_2_half_Banner_Post_Form, setSec_1_2_half_Banner_Post_Form } = useAuth();


    // Sec_1_Big_Banner_Post_Form api 

    useEffect(() => {

        fetch("http://localhost:3000/api/blogsapi/Sec_1_Big_Banner_Post_api")
            .then(res => res.json())
            .then(data => {
                setSec_1_Big_Banner_Post_Form(data)

            })

    }, [])


    console.log('Sec_1_Big_Banner_Post_Form', Sec_1_Big_Banner_Post_Form)



    // Sec_1_Big_Banner_Post_Form api 

    useEffect(() => {

        fetch("http://localhost:3000/api/blogsapi/Sec_1_2_half_Banner_Post_api")
            .then(res => res.json())
            .then(data => {
                setSec_1_2_half_Banner_Post_Form(data)

            })

    }, [])


    console.log('Sec_1_2_half_Banner_Post_Form', Sec_1_2_half_Banner_Post_Form)


    return (
        <div className='bg-[#191919]'>
            {/* top section */}
            <div className='   grid lg:grid-cols-3 gap-4 '>
                {/* left section */}
                {
                    Sec_1_Big_Banner_Post_Form.map((bannerdata, index) => index === Sec_1_Big_Banner_Post_Form.length - 1 && (

                        <div key={bannerdata._id} className=' lg:col-span-2 '>

                            <img src={bannerdata.BlogImage} className=' h-64 md:h-96 lg:h-[450px] w-full' alt="" />
                            {/* <button className=' btn bg-none text-[#000000] shadow-2xs bg-[#9EFF00] font-bold  rounded-full my-5 mx-auto flex'>{bannerdata.BlogCategory}</button> */}



                            <Link href={`/Blogs/${bannerdata._id}`}>
                                <button className='btn bg-none text-[#000000] shadow-2xs bg-[#9EFF00] font-bold rounded-full my-5 mx-auto flex'>
                                    {bannerdata.BlogCategory}
                                </button>
                            </Link>


                            <h4 className=' text-2xl  xl:text-4xl font-semibold text-white leading-8 xl:leading-12  text-center my-3 px-5 xl:px-0 uppercase'>{bannerdata.BlogTitle}</h4>
                            <div className=' flex items-center justify-between px-5 md:px-40 lg:px-10 xl:px-40 pb-5'>
                                <div className=' flex items-center gap-1.5 text-[#8E8E8F] text-[10px] lg:text-sm font-bold'>
                                    <span>
                                        <FaRegUserCircle />
                                    </span>
                                    <span>
                                        {bannerdata.AuthorName}
                                    </span>
                                </div>
                                <div className=' flex items-center gap-1.5 text-[#8E8E8F] text-[10px] lg:text-sm font-bold'>
                                    <span>
                                        <SlCalender />
                                    </span>
                                    <span>
                                        {bannerdata.createdOn}
                                    </span>
                                </div>

                            </div>
                            <p className=' text-sm lg:text-[16px] leading-7 font-[400] text-[#8E8E8F] text-center lg:text-left  px-5 lg:px-0'>{bannerdata.Description?.split(' ').slice(0, 20).join(' ')}...</p>
                        </div>
                    ))
                }

                {/* right section */}
                <div className=' col-span-1 grid grid-rows-2 md:grid-rows-none lg:grid-rows-2  sm:grid-cols-none md:grid-cols-2 lg:grid-cols-none sm:gap-0 md:gap-5 lg:gap-0'>
                    {
                        Sec_1_2_half_Banner_Post_Form.slice(-2).map((sectiondata) => (
                            <div key={sectiondata._id} className=' col-span-1 sm:border-b-[1px] md:border-none lg:border-b-[1px] border-[#D8D8D8] pb-2 '>
                                <img src={sectiondata.BlogImage} className=' h-56  w-full' alt="" />
                                <h5 className=' text-[#8E8E8F] pt-2 text-sm font-bold px-5 lg:px-0'>{sectiondata.BlogCategory}</h5>

                                <Link href={`/Blogs/${sectiondata._id}`}>
                                    <h4 className='text-[#ffffff] text-lg xl:text-xl font-semibold pr-3.5 leading-6 py-2.5 px-5 lg:px-0'>{sectiondata.BlogTitle}</h4>
                                </Link>


                                <div className=' flex items-center justify-between px-5 lg:px-0'>
                                    <div className=' flex items-center gap-1.5 text-[#8E8E8F] text-[10px] xl:text-sm font-bold'>
                                        <span><FaRegUserCircle /></span>
                                        <span>{sectiondata.AuthorName}</span>
                                    </div>
                                    <div className=' flex items-center gap-1.5 text-[#8E8E8F] text-[10px] xl:text-sm font-bold'>
                                        <span><SlCalender /></span>
                                        <span>{sectiondata.createdOn}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>


            </div>
            {/* link section */}
            <div className=' mt-3'>
                <Image src={LinkImage} className=' h-32 w-full'></Image>
            </div>
        </div>
    )
}

export default BannerSection