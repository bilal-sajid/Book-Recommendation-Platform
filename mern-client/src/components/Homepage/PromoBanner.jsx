import React from 'react';
import { Link } from 'react-router-dom';
import AwardBooksPicture from "../../assets/awardbooks.png";

const PromoBanner = () => {
  return (
    <div className="mt-0 py-8 bg-orange-100 px-6 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 max-w-6xl mx-auto">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-snug">
            Find Your Next Favorite Book—Handpicked by Real Readers!
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover books personally recommended by friends and family.  
            Browse through top picks and start your next great read today!
          </p>

          {/* Button */}
          <Link to="/all-recommendations" className="inline-block mt-6">
            <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 hover:shadow-lg transition-all duration-300">
              Explore Book Recommendations
            </button>
          </Link>
        </div>

        {/* Right Image */}
        {/* <div className="md:w-1/2 flex justify-center">
          <img src={AwardBooksPicture} alt="Recommended Books" className="w-72 md:w-96 rounded-lg shadow-md" />
        </div> */}

      </div>
    </div>
  );
};

export default PromoBanner;
