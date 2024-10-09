import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {

  const { _id, title, imageURL, price, description, authorName} = useLoaderData();

  return (

    <div>
    <div className="mt-28 mx-4 my-8 lg:mx-24 flex flex-col lg:flex-row items-start">
      <div className="lg:w-1/3 lg:mr-12 mb-8 lg:mb-0">
        <img src={imageURL} alt="" className="w-full h-auto" />
      </div>

      <div className="lg:w-2/3 mx-auto p-6 bg-white">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">{title}</h2>
        <p className="text-2xl font-semibold text-gray-600 mb-1">{authorName}</p>
        <p className="text-2xl font-semibold text-blue-700 mb-4">${price}</p>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">{description}</p>

        <div className="w-full flex justify-center mt-8">
          <button className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition-all duration-300 transform hover:scale-105">
            Buy Now
          </button>
        </div>
      </div>


    </div>

    </div>

    
  )
}

export default SingleBook