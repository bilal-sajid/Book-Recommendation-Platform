import React, { useEffect, useState } from 'react';
import BookCards from '../../BookCards';

const RimshaBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://book-store-application-dufr.onrender.com/all-books`)
            .then(res => res.json())
            .then(data => {
                const rimshaBooks = data.filter(book => book.uploadedBy === "Rimsha");
                setBooks(rimshaBooks);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    return (
        <section className="w-full px-6 lg:px-20 py-8 bg-orange-100">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
                    📚 Rimsha's Recommendations
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    A small but mighty selection—books Rimsha recommends!
                </p>
            </div>

            {/* Loading Spinner */}
            {loading ? (
                <div className="flex justify-center items-center mt-10">
                    <div className="w-10 h-10 border-4 border-orange-500 border-dotted rounded-full animate-spin"></div>
                </div>
            ) : (
                <div className="mt-10 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-orange-100">
                    <BookCards books={books} />
                </div>
            )}
        </section>
    );
};

export default RimshaBooks;
