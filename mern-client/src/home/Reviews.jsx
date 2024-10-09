import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

// React Icons
import {FaStar} from "react-icons/fa6"
import { Avatar } from "flowbite-react";

import avatarPicture1 from "../assets/Avatar Images/avatarImage1.jpeg"
import avatarPicture2 from "../assets/Avatar Images/avatarImage2.jpg"
import avatarPicture3 from "../assets/Avatar Images/avatarImage3.jpg"
import avatarPicture4 from "../assets/Avatar Images/avatarImage4.jpg"


const Reviews = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>

        <div>
            <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            breakpoints={{
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            }}
            modules={[Pagination]}
            className="mySwiper"
        >

            {/* Reviews */}

            <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                <div className='space-y-6'>
                    <div className='text-amber-500 flex gap-2'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>

                    {/* Text */}
                    <div className='mt-7'>
                        <p className='mb-5'>
                        I've been a loyal customer of Page Turners for a while now, and I couldn't be happier with my experience. The quality of the books is always top-notch—whether new or used, they’re always in great condition. Plus, the range of genres and titles is fantastic, offering something for every kind of reader. 
                        </p>
                        <Avatar img={avatarPicture} alt="" rounded className='w-10 mb-4'/>
                    </div>
                    <h5 className='text-lg font-medium'>Anna Peterson</h5>
                    <p className='text-base'>Founder, The Book Haven</p>

                </div>
            </SwiperSlide>
            
            <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                <div className='space-y-6'>
                    <div className='text-amber-500 flex gap-2'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>

                    {/* Text */}
                    <div className='mt-7'>
                        <p className='mb-5'>
                        Shipping is quick, and the customer service is friendly and reliable. Every time I shop here, I know I'm getting a great deal on high-quality books. Highly recommend for anyone who loves reading!
                        </p>
                        <Avatar img={avatarPicture} alt="" rounded className='w-10 mb-4'/>
                    </div>
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC Company</p>

                </div>
            </SwiperSlide>

            <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                <div className='space-y-6'>
                    <div className='text-amber-500 flex gap-2'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>

                    {/* Text */}
                    <div className='mt-7'>
                        <p className='mb-5'>
                        The prices are fair, the service is excellent, and the shipping is fast. I can always count on them for a fantastic reading experience. Highly recommend!
                        </p>
                        <Avatar img={avatarPicture} alt="" rounded className='w-10 mb-4'/>
                    </div>
                    <h5 className='text-lg font-medium'>Sarah Lee</h5>
                    <p className='text-base'>Director of Marketing, XYZ Corp</p>

                </div>
            </SwiperSlide>

            <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                <div className='space-y-6'>
                    <div className='text-amber-500 flex gap-2'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>

                    {/* Text */}
                    <div className='mt-7'>
                        <p className='mb-5'>
                        Fast delivery, great prices, and an easy shopping experience make it my go-to place for all things books!l                       </p>
                        <Avatar img={avatarPicture} alt="" rounded className='w-10 mb-4'/>
                    </div>
                    <h5 className='text-lg font-medium'>Grace Sullivan</h5>
                    <p className='text-base'>Chief Curator, Literary Journeys</p>

                </div>
            </SwiperSlide>


        </Swiper>
        </div>
    </div>
  )
}

export default Reviews