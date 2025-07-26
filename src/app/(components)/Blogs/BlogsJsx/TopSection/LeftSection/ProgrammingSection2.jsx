'use client'
import React, { useEffect } from 'react'
import LinkImage from '../../../../../../../public/images/blogsimages/Link.png'
import image1 from '../../../../../../../public/images/blogsimages/Container.png'
import image2 from '../../../../../../../public/images/blogsimages/Container1.png'
import image3 from '../../../../../../../public/images/blogsimages/Container2.png'
import { FaRegUserCircle } from 'react-icons/fa'
import Image from 'next/image'
import { SlCalender } from 'react-icons/sl'
import { useAuth } from '../../../../../../../context/AuthContext'
import Link from 'next/link'

function ProgrammingSection2() {


    const { Sec_3_Card_Post_Form, setSec_3_Card_Post_Form } = useAuth()


    // fetch all Service name api 

    useEffect(() => {

        fetch("https://optimize-agency.vercel.app/api/blogsapi/Sec_3_Card_Post_Form_api")
            .then(res => res.json())
            .then(data => {
                setSec_3_Card_Post_Form(data)

            })


    }, [])


    console.log("Sec_3_Card_Post_Form", Sec_3_Card_Post_Form)




    return (
        <div className=' h-full md:h-[450px] '>
            {/* border section */}
            {
                Sec_3_Card_Post_Form.map((data, index) => index === Sec_3_Card_Post_Form.length - 1 && (
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

            <div className=' grid md:grid-cols-3 gap-7 '>
                {/* left section */}

                {
                    Sec_3_Card_Post_Form.slice(-3).map((data) => (
                        <div className='   pb-2'>

                            <img src={data.BlogImage} className=' h-56  w-full' />
                            <h5 className=' text-[#8E8E8F] pt-2 text-sm font-bold px-5 lg:px-0'>{data.BlogCategory}</h5>
                            <Link href={`/Blogs/${data._id}`}>
                                <h4 className='text-[#ffffff] text-lg xl:text-xl font-semibold pr-3.5 leading-6 py-2.5 px-5 lg:px-0'>{data.BlogTitle}</h4>
                            </Link>

                            <div className=' flex items-center justify-between'>
                                <div className=' flex items-center gap-1.5 text-[#8E8E8F] text-[10px] xl:text-sm font-bold px-5 lg:px-0'>
                                    <span>
                                        <FaRegUserCircle />
                                    </span>
                                    <span>
                                        {data.AuthorName}
                                    </span>
                                </div>
                                <div className=' flex items-center gap-1.5 text-[#8E8E8F] text-[10px] xl:text-sm font-bold px-5'>
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
    )
}

export default ProgrammingSection2