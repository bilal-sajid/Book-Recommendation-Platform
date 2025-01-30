import React from 'react';
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

import { FaBookOpen } from "react-icons/fa6";

const BookCards = ({ headline, books }) => {
    return (
        <div className="my-12 px-6 lg:px-20">
            {/* Section Heading */}
            <h2 className="text-3xl md:text-4xl text-center font-extrabold text-gray-800 my-6">
                {headline}
            </h2>

            {/* Book Cards */}
            <div className="mt-12">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}  // Keeps books separate while avoiding extra white space
                    pagination={{ clickable: true }}
                    breakpoints={{
                        540: { slidesPerView: 2, spaceBetween: 25 },
                        768: { slidesPerView: 3, spaceBetween: 30 },
                        1024: { slidesPerView: 4, spaceBetween: 40 },
                    }}
                    modules={[Pagination]}
                    className="w-full h-full"
                >
                    {books.map((book) => (
                        <SwiperSlide key={book._id} className="flex justify-center items-center">
                            <Link to={`/book/${book._id}`} className="block w-full">
                                <div className="relative w-44 md:w-52 lg:w-56 shadow-lg hover:shadow-xl transition-all duration-300 rounded-md overflow-hidden">
                                    <img
                                        src={book.imageURL}
                                        alt={book.title}
                                        className="w-full h-64 object-fit-cover bg-gray-100"
                                    />
                                    <div className="absolute top-3 right-3 bg-orange-500 hover:bg-black p-2 rounded">
                                        <FaBookOpen className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-center mt-4 font-semibold text-gray-800">{book.title}</h3>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default BookCards;
