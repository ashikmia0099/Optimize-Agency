'use client'
import React, { useEffect } from 'react'
import LinkImage from '../../../../../../../public/images/blogsimages/Link.png'
import image1 from '../../../../../../../public/images/blogsimages/Container.png'
import image2 from '../../../../../../../public/images/blogsimages/Container1.png'
import image3 from '../../../../../../../public/images/blogsimages/Container2.png'
import Image from 'next/image'
import { FaRegUserCircle } from 'react-icons/fa'
import { SlCalender } from 'react-icons/sl'
import { MdArrowOutward } from 'react-icons/md'
import { useAuth } from '../../../../../../../context/AuthContext'
import Link from 'next/link'

function ProgrammingSection1() {

    const { Sec_2_half_Banner_Post_Form, setSec_2_half_Banner_Post_Form } = useAuth();


    // fetch all Sec_2_half_Banner_Post_Form api 

    useEffect(() => {

        fetch("http://localhost:3000/api/blogsapi/Sec_2_half_Banner_Post_api")
            .then(res => res.json())
            .then(data => {
                setSec_2_half_Banner_Post_Form(data)

            })


    }, [])


    console.log('Sec 2 half Banner Post Form', Sec_2_half_Banner_Post_Form)


    return (
        <div className=' '>
            {/* border section */}
            {Sec_2_half_Banner_Post_Form.map((data, index) => index === Sec_2_half_Banner_Post_Form.length - 1 && (
                <div className='xl:flex items-center gap-3 mt-12 mb-7'>
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




            <div className=' grid md:grid-cols-3  '>
                {/* left section */}
                {
                    Sec_2_half_Banner_Post_Form.map((data, index) => index === Sec_2_half_Banner_Post_Form.length - 1 && (
                        <div className=' md:col-span-2 '>
                            <div className=' grid md:grid-cols-2'>
                                <div className=' w-full h-full'>

                                    <img src={data.BlogImage} className='  h-72 lg:h-[330px] w-full' />
                                </div>
                                <div className=' flex items-center '>
                                    <div className='px-5 lg:px-10'>

                                        <h5 className=' text-[#8E8E8F] pt-2 text-sm font-[600]'>{data.BlogCategory}</h5>
                                        <h4 className='text-[#ffffff] text-lg xl:text-xl font-semibold pr-3.5 leading-6 py-2.5'>{data.BlogTitle}</h4>
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
                                        <p className=' text-sm xl:text-[16px] leading-7 py-2.5 text-white'>{data.Description?.split(' ').slice(0, 10).join(' ')}...</p>

                                        <Link href={`/Blogs/${data._id}`}>
                                            <button className=' btn border-none text-black shadow-2xs bg-[#9EFF00] my-5'>
                                                <span className='font-bold'>Read More</span>
                                                <span className=' text-xl text-[#292929] font-bold'><MdArrowOutward className=' ' /></span>
                                            </button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

                {/* right section */}

                <div className=' md:col-span-1 grid lg:grid-rows-3 lg:border-l border-[#DFDFDF] gap-1.5'>
                    {
                        Sec_2_half_Banner_Post_Form.slice(-4, -1).map((data) => (
                            <div className=' h-[106px]  px-5 lg:px-10 '>
                                <div className=' border-b border-[#DFDFDF] pb-4'>
                                    <Link href={`/Blogs/${data._id}`}>
                                        <h4 className='text-[#ffffff] text-[16px] xl:text-lg font-[600] pr-3.5 leading-6 py-2.5 '>{data.BlogTitle}</h4>
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
                        ))
                    }






                </div>
            </div>
        </div>
    )
}

export default ProgrammingSection1