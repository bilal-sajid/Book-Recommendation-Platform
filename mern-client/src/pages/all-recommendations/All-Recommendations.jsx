import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from "flowbite-react";

function Shop() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ Added loading state

  useEffect(() => {
    fetch("https://book-store-application-dufr.onrender.com/all-books")
      .then(res => res.json())
      .then(data => {
        const shuffledBooks = [...data].sort(() => Math.random() - 0.5);
        setBooks(shuffledBooks);
      })
      .catch(error => console.error("Error fetching books:", error))
      .finally(() => setLoading(false)); // ✅ Stop loading once data is fetched
  }, []);

  return (
    <div className="px-6 lg:px-20 py-24 bg-orange-100 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          📚 Discover Books Recommended by Readers
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          A collection of books personally recommended by the community. Find something new to read today!
        </p>
      </div>

      {/* ✅ Show Loading Indicator While Fetching Data */}
      {loading ? (
        <div className="flex justify-center items-center mt-16">
          <Spinner size="xl" color="orange" />
        </div>
      ) : (
        <div className="grid gap-8 my-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
                  className="h-full w-auto object-contain mx-auto"
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
      )}
    </div>
  );
}

export default Shop;
