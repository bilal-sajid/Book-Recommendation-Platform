import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {

  const { _id, title, imageURL, price, description} = useLoaderData();

  return (

    <div>
    <div className="mt-28 mx-4 my-8 lg:mx-24 flex flex-col lg:flex-row items-start">
      <div className="lg:w-1/3 lg:mr-12 mb-8 lg:mb-0">
        <img src={imageURL} alt="" className="w-full h-auto" />
      </div>

      <div className="lg:w-2/3">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-2xl font-semibold text-gray-700 mb-2">$ {price}</p>
        <p className="text-lg text-gray-600">{description}</p>

        <div className="w-full flex justify-center mt-8">
          <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>
            Buy Now
          </button>
        </div>
      </div>

    </div>

    </div>

    
  )
}

export default SingleBook