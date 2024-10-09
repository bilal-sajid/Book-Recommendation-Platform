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
import avatarPicture from "../assets/ProfileImage.jpeg"


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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates est eligendi corrupti, at, unde doloribus dolore laboriosam modi quidem vel cumque. Saepe similique debitis dignissimos cumque ex esse eius?
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
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium aliquam voluptas nostrum vel commodi voluptate esse facilis ab quasi. Nemo provident numquam veritatis maiores fugit velit. Quam ut minima distinctio.
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
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam, fugit laborum velit sint odio officiis culpa dolore repellendus vitae, pariatur quaerat quibusdam quo! Nihil iure sequi modi voluptates adipisci!
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reiciendis quos sed magni at velit error, similique aperiam fuga excepturi illo dolorem fugit expedita blanditiis, aliquam officiis incidunt, animi odit.
l                       </p>
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