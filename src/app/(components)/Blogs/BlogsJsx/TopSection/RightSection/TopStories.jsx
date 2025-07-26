'use client'
import React, { useEffect } from 'react'

import image1 from '../../../../../../../public/images/blogsimages/Container.png'
import Image from 'next/image'
import { SlCalender } from 'react-icons/sl'
import { useAuth } from '../../../../../../../context/AuthContext'
import Link from 'next/link'

function TopStories() {

    const { Right_Sec_1_Image_Post_api, setRight_Sec_1_Image_Post_api, Right_Sec_1_List_Post_api, setRight_Sec_1_List_Post_api, Right_Sec_1_Second_List_Post_api, setRight_Sec_1_Second_List_Post_api, } = useAuth()


    // fetch all blog category





    // fetch Right_Sec_1_Image_Post_api
    useEffect(() => {

        fetch("https://optimize-agency.vercel.app/api/blogsapi/Right_Sec_1_Image_Post_api")
            .then(res => res.json())
            .then(data => {
                setRight_Sec_1_Image_Post_api(data)

            })


    }, [])

    console.log("setRight_Sec_1_Image_Post_api", Right_Sec_1_Image_Post_api)

    // fetch Right_Sec_1_List_Post_api

    useEffect(() => {

        fetch("https://optimize-agency.vercel.app/api/blogsapi/Right_Sec_1_List_Post_api")
            .then(res => res.json())
            .then(data => {
                setRight_Sec_1_List_Post_api(data)

            })


    }, [])


    console.log("Right_Sec_1_List_Post_api", Right_Sec_1_List_Post_api)


    // fetch Right_Sec_1_List_Post_api

    useEffect(() => {

        fetch("https://optimize-agency.vercel.app/api/blogsapi/Right_Sec_1_Second_List_Post_api")
            .then(res => res.json())
            .then(data => {
                setRight_Sec_1_Second_List_Post_api(data)

            })


    }, [])


    console.log("Right_Sec_1_Second_List_Post_api", Right_Sec_1_Second_List_Post_api)



    return (
        <div>

            {/* border section */}
            {
                Right_Sec_1_List_Post_api.map((data, index) => index === Right_Sec_1_List_Post_api.length - 1 && (
                    <div className='xl:flex items-center gap-3 mt-12 mb-7 '>
                        <div className=' '>
                            <h5 className=' text-lg lg:text-2xl font-semibold text-white'>{data.BlogCategory}</h5>
                        </div>
                        <div className=' flex gap-2 items-center flex-grow '>
                            <div >
                                <p className=' border-2 h-[7px] border-[#9EFF00] w-10 bg-[#9EFF00]'></p>
                            </div>
                            <div className=' flex-grow'>
                                <p className='  border-b-2 border-t-2 p-0.5 border-[#DFDFDF] w-full '></p>
                            </div>
                        </div>
                    </div>
                ))
            }

            {/* grid section 1 */}
            <div>
                <div className='  grid grid-rows-4 md:grid-rows-none lg:grid-rows-4 px-5 lg:px-0 sm:grid-cols-none md:grid-cols-2 lg:grid-cols-none sm:gap-0  md:gap-3 lg:gap-0'>
                    {
                        Right_Sec_1_List_Post_api.slice(-4).map((data, index) => (
                            <div key={data._id} className='  h-32 mt-3'>
                                <div className=' flex items-center gap-2 border-b border-[#DFDFDF] pb-4 justify-between'>

                                    {/* text */}
                                    <div className=' flex items-center  '>
                                        <div>
                                            <p className=' text-sm font-[600] text-[#8E8E8F] pb-2'>{data.BlogCategory}</p>
                                            <Link href={`/Blogs/${data._id}`}>
                                                <h6 className='text-[15px] xl:text-[17px] font-[600] leading-6 pb-2 text-white'>{data.BlogTitle} </h6>
                                            </Link>

                                            <div className=' flex items-center gap-1.5 text-[#8E8E8F] text-[10px] xl:text-sm font-bold'>
                                                <span>
                                                    <SlCalender />
                                                </span>
                                                <span>
                                                    {data.createdOn}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* image */}
                                    <div>

                                        <img src={data.BlogImage} className='h-14 w-14 lg:h-12 lg:w-20 xl:h-24 xl:w-24 rounded-full' />
                                    </div>

                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>

            {/* image section */}

            <div className=' my-10'>
                {
                    Right_Sec_1_Image_Post_api.map((data, index) => index === Right_Sec_1_Image_Post_api.length - 1 && (
                        <img src={data.BlogImage} className=' w-full h-64 md:h-[400px] lg:h-56 xl:h-64' />
                    ))
                }
            </div>


            {
                Right_Sec_1_Second_List_Post_api.map((data, index) => index === Right_Sec_1_Second_List_Post_api.length - 1 && (
                    <div className='xl:flex items-center gap-3 mt-12 mb-7 '>
                        <div className=' '>
                            <h5 className=' text-lg lg:text-2xl font-semibold text-white'>{data.BlogCategory}</h5>
                        </div>
                        <div className=' flex gap-2 items-center flex-grow '>
                            <div >
                                <p className=' border-2 h-[7px] border-[#9EFF00] w-10 bg-[#9EFF00]'></p>
                            </div>
                            <div className=' flex-grow'>
                                <p className='  border-b-2 border-t-2 p-0.5 border-[#DFDFDF] w-full '></p>
                            </div>
                        </div>
                    </div>
                ))
            }

            {/* grid section second */}
            <div>
                <div className='  grid grid-rows-4 md:grid-rows-none lg:grid-rows-4 px-5 lg:px-0 sm:grid-cols-none md:grid-cols-2 lg:grid-cols-none sm:gap-0  md:gap-3 lg:gap-0 '>

                    {/* text section */}

                    {
                        Right_Sec_1_Second_List_Post_api.slice(-6).map((data, index) => (
                            <div className='  h-32 mt-3'>
                                <div className=' flex  gap-5 pb-4'>
                                    {/* image */}
                                    <div>
                                        <p className=' text-3xl font-bold text-[#F9F9F7]'>{index + 1}</p>
                                    </div>
                                    {/* text */}
                                    <div className=' flex items-center  '>
                                        <div>
                                        <Link href={`/Blogs/${data._id}`}>
                                        <h6 className=' text-sm xl:text-[17px] font-[600] leading-6 pb-2 text-white'>{data.BlogTitle} </h6>
                                            </Link>
                                            
                                            <div className=' flex items-center gap-1.5 text-[#8E8E8F] text-[10px] xl:text-sm font-bold'>
                                                <span>
                                                    <SlCalender />
                                                </span>
                                                <span>
                                                    {data.createdOn}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default TopStories