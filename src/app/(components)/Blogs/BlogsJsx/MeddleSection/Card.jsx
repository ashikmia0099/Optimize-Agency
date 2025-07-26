import React, { useEffect, useRef } from 'react'
import LinkImage from '../../../../../../public/images/blogsimages/Link.png'
import image1 from '../../../../../../public/images/blogsimages/Container.png'
import image2 from '../../../../../../public/images/blogsimages/Container1.png'
import image3 from '../../../../../../public/images/blogsimages/Container2.png'
import { FaRegUserCircle } from 'react-icons/fa'
import Image from 'next/image'
import { SlCalender } from 'react-icons/sl'



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // ✅ Add this too

// Import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules'; // ✅ FIXED
import { useAuth } from '../../../../../../context/AuthContext'
import Link from 'next/link'



function Card() {


    const { Sec_4_Card_Auto_Post_api, setSec_4_Card_Auto_Post_api } = useAuth();



    // fetch all Sec_4_Card_Auto_Post_api data

    useEffect(() => {

        fetch("https://optimize-agency.vercel.app/api/blogsapi/Sec_4_Card_Auto_Post_api")
            .then(res => res.json())
            .then(data => {
                setSec_4_Card_Auto_Post_api(data)

            })


    }, [])

    console.log("Sec_4_Card_Auto_Post_api", Sec_4_Card_Auto_Post_api)

    const prevRef = useRef(null);
    const nextRef = useRef(null);


    return (
        <div className=' mt-0'>
            {/* border section */}
           
           
            {Sec_4_Card_Auto_Post_api.map((data, index) => index === Sec_4_Card_Auto_Post_api.length - 1 && (
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
            <div className="relative">
                {/* Custom Navigation */}


                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    pagination={{ clickable: true }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onInit={(swiper) => {
                        // Attach refs to swiper instance
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        Sec_4_Card_Auto_Post_api.slice(-10).map((data) => (



                            <SwiperSlide key={data._id}>
                                <div className="pb-2">

                                    <img src={data.BlogImage} alt="blog" className="h-72 w-full" />
                                    <h5 className="text-[#8E8E8F] pt-2 text-sm font-bold  px-5 lg:px-0">{data.BlogCategory}</h5>
                                    <Link href={`/Blogs/${data._id}`}>
                                        <h4 className="text-white text-lg xl:text-xl font-semibold pr-3.5 leading-6 py-2.5  px-5 lg:px-0">
                                            {data.BlogTitle}
                                        </h4>
                                    </Link>

                                    <div className="flex items-center justify-between  px-5 lg:px-0">
                                        <div className="flex items-center gap-1.5 text-[#8E8E8F] text-[10px] xl:text-sm font-bold">
                                            <FaRegUserCircle />
                                            <span>{data.AuthorName}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-[#8E8E8F] text-[10px] xl:text-sm font-bold">
                                            <SlCalender />
                                            <span>{data.createdOn}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Card