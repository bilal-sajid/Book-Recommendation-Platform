import React, { useState } from 'react'
import BannerCard from '../home/BannerCard'
import { useNavigate } from 'react-router-dom';

const Banner = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
  
    const handleSearch = (e) => {
      e.preventDefault();
      // Navigate to the search page with the search term as a query parameter
      if (searchTerm.trim()) {
        navigate(`/search?q=${searchTerm}`);
      }
    };

  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>

            {/* {Left Side} */}
            <div className='md:w-1/2 space-y-8 h-f'>
                <h2 className='text-5xl font-bold leading-snug text-black'>
                Your Go-To Place for Buying and Selling Books {' '}
                    <span className='text-blue-700'>
                    at the Best Prices!
                    </span>
                </h2>
                <p className='md:w-4/5'>At Page Turners, we’re all about making books accessible and exciting! Buy books at unbeatable prices, or sell your gently used ones to fellow book lovers. It’s simple, fun, and affordable—because we believe that every book deserves a good home. Ready to discover your next favorite read? </p>
    <div>
      <form onSubmit={handleSearch}>
        <input 
          type="search" 
          name="search" 
          id="search" 
          placeholder="Search a Book" 
          className='py-2 px-2 rounded-s-sm outline-none'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 ml-2'>
          Search
        </button>
      </form>
    </div>
            </div>


            {/* {Right Side} */}
            <div>
                <BannerCard></BannerCard>
            </div>

        </div>
    </div>
  )
}

export default Banner