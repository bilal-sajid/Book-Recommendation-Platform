import React, { useEffect, useState } from 'react';
import BookCards from '../BookCards';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Fetching Random 10 Books
        fetch("https://book-store-application-dufr.onrender.com/all-books")
        .then(res => res.json())
        .then(data => {
            // Shuffle the array randomly
            const shuffledBooks = [...data].sort(() => Math.random() - 0.5);
            // Set the first 10 books
            setBooks(shuffledBooks.slice(0, 12));
        });    
    }, []);

    return (
        <section className="w-full px-6 lg:px-20 py-12 bg-orange-50">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
                    📚 People are Recommending All Sorts of Books!
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Explore a mix of books that other readers are loving. You might just find your next favorite read!
                </p>
            </div>

            {/* Book Recommendations */}
            <div className="mt-10">
                <BookCards books={books} />
            </div>
        </section>
    );
};

export default OtherBooks;
