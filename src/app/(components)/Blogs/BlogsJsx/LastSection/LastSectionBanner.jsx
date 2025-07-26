'use client'
import React, { useEffect } from 'react'
import LastSectionNews from './LastSectionNews'

import image1 from '../../../../../../public/images/blogsimages/Container.png'
import image2 from '../../../../../../public/images/blogsimages/Container1.png'
import image3 from '../../../../../../public/images/blogsimages/Container2.png'
import image4 from '../../../../../../public/images/blogsimages/Container3.png'
import Image from 'next/image'
import { FaRegUserCircle } from 'react-icons/fa'
import { SlCalender } from 'react-icons/sl'
import { MdArrowOutward } from 'react-icons/md'
import { useAuth } from '../../../../../../context/AuthContext'
import Link from 'next/link'

function LastSectionBanner() {



    const { Sec_5_Single__half_Banner_Post_api, setSec_5_Single__half_Banner_Post_api } = useAuth();



    // fetch all Sec_4_Card_Auto_Post_api data

    useEffect(() => {

        fetch("https://optimize-agency.vercel.app/api/blogsapi/Sec_5_Single__half_Banner_Post_api")
            .then(res => res.json())
            .then(data => {
                setSec_5_Single__half_Banner_Post_api(data)

            })


    }, [])

    console.log("Sec_5_Single__half_Banner_Post_api", Sec_5_Single__half_Banner_Post_api)


    return (
        <div >
            {/* border section */}
            {Sec_5_Single__half_Banner_Post_api.map((data, index) => index === Sec_5_Single__half_Banner_Post_api.length - 1 && (
                <div key={data._id} className='xl:flex items-center gap-3 mt-12 mb-7'>
                    <div>
                        <h5 className='text-lg lg:text-2xl font-semibold text-white'>{data.BlogCategory}</h5>
                    </div>
                    <div className='flex items-center gap-2 flex-grow'>
                        <div>
                            <p className='border-2 h-[7px] border-[#9EFF00] w-10 bg-[#9EFF00]'></p>
                        </div>
                        <div className='flex-grow'>
                            <p className='border-b-2 border-t-2 p-0.5 border-[#DFDFDF] w-full'></p>
                        </div>
                    </div>
                </div>
            ))}

            {
                Sec_5_Single__half_Banner_Post_api.map((data, index) => index === Sec_5_Single__half_Banner_Post_api.length - 1 && (
                    <div key={data._id} className=' grid lg:grid-cols-2 md:grid-cols-none  gap-10'>
                        {/* image */}
                        <div className=' w-full h-full'>

                            <img src={data.BlogImage} className=' h- w-full' />
                        </div>
                        <div className=' flex items-center lg:pr-20'>
                            <div className=' px-5 md:px-10'>

                                <h5 className=' text-[#8E8E8F] pt-2 text-sm font-[600]'>{data.BlogCategory}</h5>
                                <h4 className='text-[#ffffff] text-lg xl:text-2xl font-semibold pr-3.5 leading-6 xl:leading-8 py-2.5'>{data.BlogTitle}</h4>
                                <div className=' flex items-center justify-between'>
                                    <div className=' flex items-center gap-1.5 text-[#8E8E8F] text-[10px] xl:text-sm font-bold'>
                                        <span>
                                            <FaRegUserCircle />
                                        </span>
                                        <span>
                                            {data.AuthorName}
                                        </span>
                                    </div>
                                    <div className=' flex items-center gap-1.5 text-[#8E8E8F] text-[10px] xl:text-sm font-bold'>
                                        <span>
                                            <SlCalender />
                                        </span>
                                        <span>
                                            {data.createdOn}
                                        </span>
                                    </div>
                                </div>
                                <p className='text-sm xl:text-[16px] leading-5 xl:leading-7 py-2.5 text-white'>{data.Description?.split(' ').slice(0, 15).join(' ')}...</p>
                                <Link href={`/Blogs/${data._id}`}>
                                    <button className=' btn border-none text-black shadow-2xs bg-[#9EFF00] my-5'>
                                        <span className='font-bold'>Read More</span>
                                        <span className=' text-xl text-[#292929] font-bold'><MdArrowOutward className=' ' /></span>
                                    </button>
                                </Link>


                            </div>
                        </div>
                    </div>
                ))}

            <div>
                {/* <LastSectionNews></LastSectionNews> */}
            </div>
        </div>
    )
}

export default LastSectionBanner