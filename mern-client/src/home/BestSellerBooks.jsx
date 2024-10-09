import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards'

const backendUrl = import.meta.env.REACT_APP_BACKEND_URL;

const BestSellerBooks = () => {
    const [books, setBooks] = useState([])

    useEffect( () => {

      // Getting Random 10 Books
      fetch(`${backendUrl}/all-books`)
      .then(res => res.json())
      .then(data => {
        // Shuffle the array randomly
        const shuffledBooks = data.sort(() => Math.random() - 0.5);
        // Set the first 10 books
        setBooks(shuffledBooks.slice(0, 10));
      });    
    },[])

  return (
    <BookCards books = {books} headline="Best Sellers"/>
  )
}

export default BestSellerBooks