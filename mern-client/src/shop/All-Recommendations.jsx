import React, { useEffect, useState } from 'react'
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';

function Shop() {
  const [books,setBooks] = useState([])

  useEffect(() => {
    fetch("https://book-store-application-dufr.onrender.com/all-books").then(res => res.json()).then(data => setBooks(data));
  },[])

  return (
    <div className='mt-28 px-4 lg:px24'>
      <h2 className='text-5xl font-bold text-center'> All Recommended Books</h2>

      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3 grid-cols-1'>
        {
          books.map(book => <Card className="max-w-sm mx-auto" key={book._id}>
            <div className='flex justify-center'>
            <Link to={`/book/${book._id}`}>
            <img src={book.imageURL} className='h-96'/>
            </Link>
            </div>

            <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white mb-1">
              <p>
                {book.title}
              </p>
            </h5>
            <p className="font-normal text-center text-gray-700 dark:text-gray-400 mb-1">
              {book.authorName}
            </p>

            <Link to={`/book/${book._id}`}>
              <div className="flex justify-center">
                <button className="bg-blue-700 font-semibold text-white py-2 px-8 rounded-lg transform hover:scale-105 transition-all duration-300">
                  Recommended By {book.uploadedBy}
                </button>
              </div>
            </Link>
            
          </Card>)
        }
      </div>
    </div>
  )
}

export default Shop