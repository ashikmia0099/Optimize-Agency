'use client'
import React, { useEffect } from 'react'

import image1 from '../../../../../../../public/images/blogsimages/Container.png'
import Image from 'next/image'
import { SlCalender } from 'react-icons/sl'
import { useAuth } from '../../../../../../../context/AuthContext'
import Link from 'next/link'

function TopStoriesSecond() {


    const { Right_Sec_2_First_Image_Post_api, setRight_Sec_2_First_Image_Post_api,
        Right_Sec_2_Image_Second_Post_api, setRight_Sec_2_Image_Second_Post_api,
        Right_Sec_2_List_Post_Form, setRight_Sec_2_List_Post_Form,
    } = useAuth()



    // fetch Right_Sec_2_First_Image_Post_api api

    useEffect(() => {

        fetch("http://localhost:3000/api/blogsapi/Right_Sec_2_First_Image_Post_api")
            .then(res => res.json())
            .then(data => {
                setRight_Sec_2_First_Image_Post_api(data)

            })


    }, [])


    console.log("setRight_Sec_2_First_Image_Post_api", Right_Sec_2_First_Image_Post_api)


    // fetch Right_Sec_2_First_Image_Post_api api

    useEffect(() => {

        fetch("http://localhost:3000/api/blogsapi/Right_Sec_2_Image_Second_Post_api")
            .then(res => res.json())
            .then(data => {
                setRight_Sec_2_Image_Second_Post_api(data)

            })


    }, [])


    console.log("Right_Sec_2_Image_Second_Post_api", Right_Sec_2_Image_Second_Post_api)


    // fetch Right_Sec_2_List_Post_Form api

    useEffect(() => {

        fetch("http://localhost:3000/api/blogsapi/Right_Sec_2_List_Post_Form")
            .then(res => res.json())
            .then(data => {
                setRight_Sec_2_List_Post_Form(data)

            })


    }, [])


    console.log("Right_Sec_2_List_Post_Form", Right_Sec_2_List_Post_Form)



    return (
        <div>
            {/* image */}


            {
                Right_Sec_2_First_Image_Post_api.map((data, index) => index === Right_Sec_2_First_Image_Post_api.length - 1 && (
                    <div key={data._id} className=' my-10 mt-32'>

                        <img src={data.BlogImage} className=' w-full h-64' />
                    </div>
                ))
            }


            {/* border section */}
            <div className=' items-center gap-3 mt-5 mb-7'>
                <div className=' flex gap-2 mt-3'>
                    <div >
                        <p className=' border-2 h-[7px] border-[#9EFF00] w-10 bg-[#9EFF00]'></p>
                    </div>
                    <div className=' w-full'>
                        <p className='  border-b-2 border-t-2 p-0.5 border-[#DFDFDF]  w-full'></p>
                    </div>
                </div>
                <div className=' mt-2'>
                    <h5 className=' text-2xl font-semibold text-white'>Blockchain</h5>
                </div>

            </div>

           

            {/* grid data */}
            <div>
                <div className='  grid md:grid-cols-2 lg:grid-cols-none md:grid-rows-2 lg:grid-rows-4 px-5 lg:px-0'>
                    {
                        Right_Sec_2_List_Post_Form.slice(-4).map((data, index) =>(

                            <div className=' h-24 xl:h-32 mt-3'>
                        <div className=' flex items-center gap-2  pb-4'>

                            {/* text */}
                            <div className=' flex items-center  '>
                                <div>
                                    <p className='text-[12px] xl:text-sm font-[600] text-[#8E8E8F] pb-2'>{data.BlogCategory}</p>
                                    <Link href={`/Blogs/${data._id}`}>
                                    <h6 className='text-sm xl:text-[17px] font-[600] leading-6 pb-2 text-white'>{data.BlogTitle} </h6>
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

            {/* image section */}



            {
                Right_Sec_2_Image_Second_Post_api.map((data, index) => index === Right_Sec_2_Image_Second_Post_api.length - 1 && (


                    <div key={data._id} className=' my-2 '>
                        <img src={data.BlogImage} className=' w-full lg:h-48 h-64 xl:64' />

                    </div>
                ))
            }



        </div>
    )
}

export default TopStoriesSecond