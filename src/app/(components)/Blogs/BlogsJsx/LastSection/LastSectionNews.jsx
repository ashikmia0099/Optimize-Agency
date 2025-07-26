

'use client'
import React from 'react'
import Image from 'next/image'

// Image imports (make sure these exist in the correct path)
import image1 from '../../../../../../public/images/blogsimages/Container.png'
import image2 from '../../../../../../public/images/blogsimages/Container1.png'
import image3 from '../../../../../../public/images/blogsimages/Container2.png'
import image4 from '../../../../../../public/images/blogsimages/Container3.png'

// Icons
import { SlCalender } from 'react-icons/sl'
import { FaRegUserCircle } from 'react-icons/fa'

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const imageList = [image1, image2, image3, image4]

const LastSectionNews = () => {
  return (
    <div className="w-full px-4 py-8">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
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
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {imageList.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center gap-5">
                {/* text section */}
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[#8E8E8F] pb-2">
                    programming
                  </p>
                  <h6 className="text-[17px] font-semibold leading-6 pb-2">
                    Using Instagram to promote your brand
                  </h6>
                  <div className="flex items-center gap-2 text-[#8E8E8F] text-sm font-bold">
                    <SlCalender />
                    <span>27 August, 2024</span>
                  </div>
                </div>

                {/* image section */}
                <div>
                  <Image
                    src={img}
                    alt={`Blog Image ${index + 1}`}
                    width={112}
                    height={112}
                    className="h-28 w-28 object-cover rounded-md"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default LastSectionNews

