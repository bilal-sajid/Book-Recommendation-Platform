import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards'


const OtherBooks = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
      // Getting Random 10 Books
      fetch("https://book-store-application-dufr.onrender.com/all-books")
      .then(res => res.json())
      .then(data => {
        // Shuffle the array randomly
        const shuffledBooks = data.sort(() => Math.random() - 0.5);
        // Set the first 10 books
        setBooks(shuffledBooks.slice(0, 10));
      });    
    },[])

  return (
    <BookCards books = {books} headline="Other Books"/>
  )

}

export default OtherBooks