import { Spinner } from "flowbite-react";
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HiOutlineSearch } from "react-icons/hi";

const SearchResult = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Extract the search query from the URL
  const searchQuery = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`https://book-store-application-dufr.onrender.com/search?q=${searchQuery}`);
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery) {
      fetchBooks();
    }
  }, [searchQuery]);

  return (
    <div className="mt-16 min-h-screen bg-orange-50 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Search Query Display */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-extrabold text-gray-900">
            <HiOutlineSearch className="inline-block text-orange-600 mr-2 w-8 h-8" />
            Search Results for: 
            <span className="text-orange-600"> "{searchQuery}"</span>
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Browse recommendations from others or add your own!
          </p>
        </div>

        {/* ✅ Show Loading Indicator */}
        {loading ? (
          <div className="flex justify-center items-center mt-20">
            <Spinner size="xl" color="orange" />
          </div>
        ) : books.length > 0 ? (
          <div className="grid gap-8 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
            {books.map((book) => (
              <div 
                key={book._id} 
                className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-orange-50"
              >
                {/* Book Cover */}
                <div className="h-72 flex justify-center bg-orange-50 transition-opacity duration-300 hover:opacity-90">
                  <Link to={`/book/${book._id}`}>
                    <img 
                      src={book.imageURL} 
                      alt={book.title} 
                      className="h-full w-auto object-contain"
                    />
                  </Link>
                </div>

                {/* Book Details */}
                <div className="p-4 text-center flex-grow flex flex-col justify-between">
                  <div>
                    <h5 className="text-lg font-semibold text-gray-800">{book.title}</h5>
                    <p className="text-sm text-gray-600 mt-1">By {book.authorName}</p>
                  </div>

                  {/* Button */}
                  <Link to={`/book/${book._id}`} className="mt-4">
                    <button className="bg-orange-500 w-full font-semibold text-white py-2 rounded-md hover:bg-orange-600 transition-all">
                      Recommended by {book.uploadedBy}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mt-24">
            <h2 className="text-4xl font-bold text-gray-800">😔 No One Has Recommended This Book Yet</h2>
            <p className="text-lg text-gray-600 mt-2">Be the first to share it with others!</p>

            {/* Call to Action - Recommend a Book */}
            <Link to="/admin/dashboard/upload" className="inline-block mt-6">
              <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition-all">
                Recommend a Book
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
