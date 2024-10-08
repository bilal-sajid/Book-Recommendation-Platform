import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards'


const OtherBooks = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {

      // Simply Slicing the first 6 Books
        fetch("http://localhost:3000/all-books").then(res => res.json()).then(data => setBooks(data.slice(4,10)))
    },[])

  return (
    <BookCards books = {books} headline="Other Books"/>
  )

}

export default OtherBooks