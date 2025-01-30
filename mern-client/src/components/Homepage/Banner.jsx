import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Importing Images for the Banner (Right Side)
import book1 from "../../assets/banner-images/book1.png";
import book2 from "../../assets/banner-images/book2.png";
import book3 from "../../assets/banner-images/book3.png";
import book4 from "../../assets/banner-images/book4.png";
import book5 from "../../assets/banner-images/book5.png";

// These books are displayed on the Banner (Right Side)
const bookImages = [book1, book2, book3, book4, book5];

const Banner = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${searchTerm}`);
    }
  };

  return (
    <div className="px-6 lg:px-20 bg-gradient-to-r from-orange-50 to-yellow-100 flex items-center">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 py-32 w-full">
        
        {/* Left Side - Main Content */}
        <div className="md:w-1/2 space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-snug text-gray-800">
            Discover & Share the <span className="text-orange-600">Books You Love</span>
          </h2>
          <p className="md:w-4/5 text-lg text-gray-700">
            BookWaves is a cozy space where friends and family recommend books they love. Find hidden gems, share personal favorites, and make reading more meaningful together!
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex items-center bg-white shadow-md rounded-md overflow-hidden w-full max-w-md">
            <input 
              type="search" 
              name="search" 
              id="search" 
              placeholder="Search for a book..."
              className="py-2 px-3 flex-grow outline-none text-gray-700"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 transition-all duration-200">
              Search
            </button>
          </form>

          {/* Loading Message */}
          <div className="mt-6 text-center bg-orange-100 text-orange-800 p-4 rounded-lg shadow-lg max-w-md">
            If the page takes a moment to load, don’t worry! Your personalized book recommendations will appear soon. Thanks for your patience! 😊
          </div>
        </div>

        {/* Right Side - Books Grid */}
        <div className="md:w-1/2 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
          {bookImages.map((src, index) => (
            <div key={index} className="shadow-lg transform rotate-[-5deg] hover:rotate-0 transition-transform duration-300">
              <img 
                src={src} 
                alt={`Book ${index + 1}`} 
                className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-auto object-contain rounded-md"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Banner;
