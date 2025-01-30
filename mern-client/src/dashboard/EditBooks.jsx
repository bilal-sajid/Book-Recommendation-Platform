import React, { useState } from 'react';
import { Button, Label, Select, TextInput, Textarea, Modal, Toast } from "flowbite-react";
import { useLoaderData, useParams } from 'react-router-dom';
import { HiCheckCircle, HiExclamationCircle } from "react-icons/hi";
import { bookCategories } from '../data/bookCategories';

const EditBooks = () => {
  const { id } = useParams();
  const { authorName, imageURL, category, description, title, pdfURL, uploadedBy } = useLoaderData();

  // ✅ FIXED: Preselects the correct category
  const [selectedBookCategory, setSelectedBookCategory] = useState(category || bookCategories[0]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  // Handle Submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const updatedBook = {
      title: form.title.value.trim(),
      authorName: form.authorName.value.trim(),
      imageURL: form.imageURL.value.trim(),
      category: selectedBookCategory.trim(),
      description: form.description.value.trim(),
      pdfURL: form.pdfURL.value.trim(),
      uploadedBy: form.uploadedBy.value.trim(),
    };

    // Update Book Data
    fetch(`https://book-store-application-dufr.onrender.com/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    })
      .then((res) => res.json())
      .then(() => {
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 3000);
      })
      .catch(() => setError("Something went wrong. Please try again later."));
  };

  return (
    <div className="flex-1 px-6 py-12 bg-orange-50">
      
      {/* Main Content */}
      <div className="flex-1 px-6 py-12 bg-orange-50 flex justify-center">
        <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-8">

          {/* Page Title */}
          <h2 className="mb-4 text-4xl font-extrabold text-gray-800 text-center">✏️ Edit Book Details</h2>

          {/* Error Alert */}
          {error && (
            <Toast className="mb-4">
              <HiExclamationCircle className="text-red-500 w-5 h-5" />
              <div className="ml-3 text-sm font-semibold text-red-700">{error}</div>
            </Toast>
          )}

          {/* Success Modal */}
          <Modal show={isSuccess} onClose={() => setIsSuccess(false)}>
            <Modal.Header>Book Updated Successfully!</Modal.Header>
            <Modal.Body>
              <div className="flex items-center">
                <HiCheckCircle className="text-green-500 w-6 h-6 mr-2" />
                <span>Your book details have been successfully updated.</span>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setIsSuccess(false)}>OK</Button>
            </Modal.Footer>
          </Modal>

          {/* Form */}
          <form onSubmit={handleUpdate} className="space-y-6">

            {/* Title & Author */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="title" value="Book Title" />
                <TextInput id="title" name="title" type="text" placeholder="Enter book title" required defaultValue={title} />
              </div>
              <div>
                <Label htmlFor="authorName" value="Author Name" />
                <TextInput id="authorName" name="authorName" type="text" placeholder="Enter author's name" required defaultValue={authorName} />
              </div>
            </div>

            {/* Image URL & Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="imageURL" value="Book Cover Image URL" />
                <TextInput id="imageURL" name="imageURL" type="text" placeholder="Paste cover image URL" required defaultValue={imageURL} />
              </div>
              <div>
                <Label htmlFor="categoryName" value="Book Category" />
                <Select 
                  id="categoryName" 
                  name="categoryName" 
                  value={selectedBookCategory} 
                  onChange={handleChangeSelectedValue} 
                  required
                >
                  {bookCategories.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </div>
            </div>

            {/* Book Description */}
            <div>
              <Label htmlFor="description" value="Write Your Recommendation" />
              <Textarea id="description" name="description" placeholder="Why do you recommend this book?" required rows={6} defaultValue={description} />
            </div>

            {/* PDF Link */}
            <div>
              <Label htmlFor="pdfURL" value="Goodreads Book URL" />
              <TextInput id="pdfURL" name="pdfURL" type="text" placeholder="Paste Goodreads book URL" required defaultValue={pdfURL} />
            </div>

            {/* Uploaded By */}
            <div>
              <Label htmlFor="uploadedBy" value="Your Name" />
              <TextInput id="uploadedBy" name="uploadedBy" type="text" placeholder="Enter your name" required defaultValue={uploadedBy} />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 transition-all">
                Update Book
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBooks;
