import React from 'react'
import { Link } from 'react-router-dom';
import AwardBooksPicture from "../assets/awardbooks.png"

const PromoBanner = () => {
  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>

        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/2'>
                <h2 className='text-4xl font-bold mb-6 leading-snug'>Book lovers are constantly sharing their top recommendations</h2>
                
                {/* {Button} */}
                <Link to="/all-recommendations" className='block'>
                    <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>
                        Check Out All Recommended Books
                    </button>
                </Link>

            </div>

            <div>
                <img src={AwardBooksPicture} alt="" className='w-96'/>
            </div>
        </div>
    </div>
  )
}

export default PromoBanner