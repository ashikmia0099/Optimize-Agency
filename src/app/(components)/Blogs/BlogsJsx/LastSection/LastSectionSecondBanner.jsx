'use client'
import React, { useEffect } from 'react'
import image1 from '../../../../../../public/images/blogsimages/Container.png'
import image2 from '../../../../../../public/images/blogsimages/Container1.png'
import image3 from '../../../../../../public/images/blogsimages/Container2.png'
import image4 from '../../../../../../public/images/blogsimages/Container3.png'
import Image from 'next/image'
import { SlCalender } from 'react-icons/sl'
import LastSectionNews from './LastSectionNews'
import { useAuth } from '../../../../../../context/AuthContext'
import Link from 'next/link'



function LastSectionSecondBanner() {



    const { Sec_6_Signgle_Half_Banner_Post_api, setSec_6_Signgle_Half_Banner_Post_api } = useAuth()



    // fetch Sec_6_Signgle_Half_Banner_Post_api api 

    useEffect(() => {

        fetch("http://localhost:3000/api/blogsapi/Sec_6_Signgle_Half_Banner_Post_api")
            .then(res => res.json())
            .then(data => {
                setSec_6_Signgle_Half_Banner_Post_api(data)

            })

    }, [])

    console.log("Sec_6_Signgle_Half_Banner_Post_api", Sec_6_Signgle_Half_Banner_Post_api)


    return (
        <div>
            {/* border section */}
            {Sec_6_Signgle_Half_Banner_Post_api.map((data, index) => index === Sec_6_Signgle_Half_Banner_Post_api.length - 1 && (
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

            {/* banner section */}

            <div className=' grid md:grid-cols-2 lg:grid-cols-3  gap-3 h-full lg:h-[550]'>
                {/* left section */}
                {Sec_6_Signgle_Half_Banner_Post_api.map((data, index) => index === Sec_6_Signgle_Half_Banner_Post_api.length - 1 && (
                    <div key={data._id} className=' lg:col-span-2 '>
                        <div>

                            <img src={data.BlogImage} className=' w-full h-60 lg:h-96' />
                        </div>
                        <div>
                            <p className=' text-sm font-[600] text-[#8E8E8F] pb-2 pt-4 px-5 xl:px-0'>{data.BlogCategory}</p>
                            <Link href={`/Blogs/${data._id}`}>
                                <h6 className='text-lg xl:text-2xl font-[600] leading-6 lg:leading-8 pb-2 pr-pr lg:pr-10 px-5 xl:px-0 text-white'>{data.BlogTitle}</h6>
                            </Link>

                            <div className=' flex items-center gap-1.5 text-[#8E8E8F] text-[10px] lg:text-sm font-bold px-5 xl:px-0'>
                                <span>
                                    <SlCalender />
                                </span>
                                <span>
                                    {data.createdOn}
                                </span>
                            </div>
                            <p className='px-5 lg:px-0 text-[12px] xl:text-lg pt-5 sm:pb-10 xl:pb-0 text-white'>{data.Description?.split(' ').slice(0, 15).join(' ')}...</p>
                        </div>
                    </div>
                ))}


                {/* right section */}
                <div className=' lg:col-span-1 grid md:grid-rows-2 lg:grid-rows-4 gap-y-3 lg:mt-3 px-5 lg:px-0'>

                    {
                        Sec_6_Signgle_Half_Banner_Post_api.slice(-6, -1).map((data) => (
                            <div key={data._id} className=' h-20 xl:h-28 gap-y-6'>
                                <div className=' flex items-center gap-5'>
                                    {/* image */}
                                    <div>

                                        <img src={data.BlogImage} className=' h-20 w-28 xl:h-28 xl:w-28' />
                                    </div>
                                    {/* text */}
                                    <div className=' flex items-center pr-2'>
                                        <div>
                                            <p className=' text-[10px] xl:text-sm font-[600] text-[#8E8E8F] pb-1 xl:pb-2'>{data.BlogCategory}</p>
                                            <Link href={`/Blogs/${data._id}`}>
                                            <h6 className=' text-[14px] xl:text-[17px] font-[600] leading-4 xl:leading-6 pb-2 text-white'>{data.BlogTitle}</h6>
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

export default LastSectionSecondBanner