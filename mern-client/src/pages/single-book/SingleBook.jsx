import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
  const { title, imageURL, description, authorName, uploadedBy, pdfURL } = useLoaderData();

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-orange-50 flex items-center justify-center px-6 py-12 lg:px-20">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row">
        
        {/* Left Section - Book Cover */}
        <div className="lg:w-1/3 p-6 flex justify-center items-center bg-gray-100">
          <img src={imageURL} alt={title} className="max-h-96 w-auto object-contain rounded-md shadow-md" />
        </div>

        {/* Right Section - Book Details */}
        <div className="lg:w-2/3 p-8 flex flex-col justify-between">
          
          {/* Title & Author */}
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-3">{title}</h2>
            <p className="text-xl font-semibold text-gray-600 mb-6">By {authorName}</p>
          </div>

          {/* Recommendation */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-orange-600">Why {uploadedBy} Recommends it:</h3>
            <p className="text-gray-700 text-lg leading-relaxed mt-2">{description}</p>
          </div>

          {/* Goodreads Button */}
          <div className="mt-6 flex justify-center lg:justify-start">
            <a href={pdfURL} target="_blank" rel="noopener noreferrer">
              <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 hover:scale-105 transition-all duration-300">
                Check Out '{title}' on Goodreads
              </button>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default SingleBook;
