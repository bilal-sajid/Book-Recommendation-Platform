import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchResult = () => {
  const [books, setBooks] = useState([]);
  const location = useLocation();

  // Extract the search query from the URL
  const searchQuery = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    // Fetch books based on the search query
    const fetchBooks = async () => {
      try {
        const response = await fetch(`https://book-store-application-dufr.onrender.com/search?q=${searchQuery}`);
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    if (searchQuery) {
      fetchBooks();
    }
  }, [searchQuery]);

  return (
    <div className='mt-28 px-4 lg:px24'>
      <h2 className='text-5xl font-bold text-center'> All Results for '{searchQuery}'</h2>

      {books.length > 0 ? (
      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md: grid-cols-3 grid-cols-1'>
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
                Buy Now (${book.price})
              </button>
            </div>
          </Link>
          
        </Card>)
      }
    </div>
      ) : (
        <h2 className='text-5xl font-semi-bold text-center mt-16'> No Results </h2>
      )}

    </div>
  );
};

export default SearchResult;
