import React, { useEffect, useState } from 'react';
import BookCards from '../components/BookCards';
import axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const BestSellerBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Getting Random 10 Books
    axios.get(`${backendUrl}/all-books`)
      .then(res => {
        // Shuffle the array randomly
        const shuffledBooks = res.data.sort(() => Math.random() - 0.5);
        // Set the first 10 books
        setBooks(shuffledBooks.slice(0, 10));
      })
      .catch(err => {
        console.error('Error fetching books:', err);
      });
  }, []);

  return (
    <BookCards books={books} headline="Best Sellers" />
  );
};

export default BestSellerBooks;
