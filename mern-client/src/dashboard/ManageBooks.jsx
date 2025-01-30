import React, { useEffect, useState } from 'react';
import { Table, Alert } from "flowbite-react";
import { Link } from 'react-router-dom';
import { HiInformationCircle } from "react-icons/hi";

const ManageBooks = () => {
  // Getting all Books data
  const [allBooks, setAllBooks] = useState([]);
  
  useEffect(() => {
    fetch("https://book-store-application-dufr.onrender.com/all-books")
      .then(res => res.json())
      .then(data => setAllBooks(data));
  }, []);

  return (
    <div className="flex-1 px-6 py-12 bg-orange-50">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">

        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">📚 Manage Your Books</h2>

        {/* Editing Permission Notice */}
        <Alert color="warning" icon={HiInformationCircle} className="mb-6">
          You can <span className="font-semibold">only edit books that you have personally recommended.</span> 
          Please do not modify books uploaded by others.
        </Alert>

        {/* Books Table */}
        <div className="overflow-x-auto">
          <Table className="w-full">
            <Table.Head>
              <Table.HeadCell>No.</Table.HeadCell>
              <Table.HeadCell>Book Name</Table.HeadCell>
              <Table.HeadCell>Author Name</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Uploaded By</Table.HeadCell>
              <Table.HeadCell>Edit</Table.HeadCell>
            </Table.Head>

            {/* Books List */}
            {allBooks.map((book, index) => (
              <Table.Body className="divide-y" key={book._id}>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {index + 1}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {book.title}
                  </Table.Cell>
                  <Table.Cell>{book.authorName}</Table.Cell>
                  <Table.Cell>{book.category}</Table.Cell>
                  <Table.Cell>{book.uploadedBy}</Table.Cell>
                  <Table.Cell>
                    <Link 
                      to={`/admin/dashboard/edit-books/${book._id}`} 
                      className="font-medium text-orange-600 hover:underline dark:text-orange-500"
                    >
                      Edit
                    </Link>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManageBooks;
