import React, { useEffect, useState } from 'react'
import { Card } from "flowbite-react";

function Shop() {
  const [books,setBooks] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/all-books").then(res => res.json()).then(data => setBooks(data));
  },[])

  return (
    <div className='mt-28 px-4 lg:px24'>
      <h2 className='text-5xl font-bold text-center'> All Our Books</h2>

      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md: grid-cols-3 grid-cols-1'>
        {
          books.map(book => <Card className="max-w-sm">
            <img src={book.imageURL} className='h-96'/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>
                {book.title}
              </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {book.description}
            </p>

            <button className='bg-blue-700 font-semibold text-white py-1 rounded'> Buy Now (${book.price})</button>
          </Card>)
        }
      </div>
    </div>
  )
}

export default Shop