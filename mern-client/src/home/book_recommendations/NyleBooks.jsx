import React, { useEffect, useState } from 'react'
import BookCards from '../../components/BookCards'


const NyleBooks = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
      // Getting Books uploaded by 'Bilal'
      fetch(`https://book-store-application-dufr.onrender.com/all-books`)
      .then(res => res.json())
      .then(data => {
        // Filter books where uploadedBy is 'Bilal'
        const bilalBooks = data.filter(book => book.uploadedBy === "Nyle");
        // Set all the filtered books
        setBooks(bilalBooks);
      });
    }, [])

  return (
    
    <BookCards books={books} headline="Nyle's Recommendations" />
  )
}

export default NyleBooks