import React, { useState } from "react";
import { Button, Label, Select, TextInput, Textarea, Modal, Toast } from "flowbite-react";
import { HiCheckCircle, HiExclamationCircle } from "react-icons/hi";
import { bookCategories } from "../data/bookCategories";

const UploadBook = () => {
  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  // Handle Submission
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const title = form.title.value.trim();
    const authorName = form.authorName.value.trim();
    const imageURL = form.imageURL.value.trim();
    const category = form.categoryName.value.trim();
    const description = form.description.value.trim();
    const pdfURL = form.pdfURL.value.trim();
    const uploadedBy = form.uploadedBy.value.trim();

    if (!title || !authorName || !imageURL || !category || !description || !pdfURL || !uploadedBy) {
      setError("All fields are required. Please fill in the missing information.");
      return;
    }

    const bookObject = { title, authorName, imageURL, category, description, pdfURL, uploadedBy };

    fetch("https://book-store-application-dufr.onrender.com/upload-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObject),
    })
      .then((res) => res.json())
      .then(() => {
        setIsSuccess(true);
        form.reset();
        setTimeout(() => setIsSuccess(false), 3000);
      })
      .catch(() => setError("Something went wrong. Please try again later."));
  };

  return (
    <div className="px-6 py-12 bg-orange-50 min-h-screen flex flex-col items-center">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
        {/* Heading */}
        <h2 className="mb-4 text-3xl font-extrabold text-gray-800 text-center">📚 Upload a Book</h2>
        <p className="text-lg text-gray-700 text-center mb-6">
          Get all the information from{" "}
          <a href="https://www.goodreads.com/" target="_blank" rel="noopener noreferrer" className="text-orange-500 underline">
            Goodreads
          </a>
        </p>

        {/* Error Alert */}
        {error && (
          <Toast className="mb-4">
            <HiExclamationCircle className="text-red-500 w-5 h-5" />
            <div className="ml-3 text-sm font-semibold text-red-700">{error}</div>
          </Toast>
        )}

        {/* Success Modal */}
        <Modal show={isSuccess} onClose={() => setIsSuccess(false)}>
          <Modal.Header>Book Uploaded Successfully!</Modal.Header>
          <Modal.Body>
            <div className="flex items-center">
              <HiCheckCircle className="text-green-500 w-6 h-6 mr-2" />
              <span>Your book has been successfully uploaded.</span>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setIsSuccess(false)}>OK</Button>
          </Modal.Footer>
        </Modal>

        {/* Form */}
        <form onSubmit={handleBookSubmit} className="space-y-6">

          {/* Title & Author */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="title" value="Book Title" />
              <TextInput id="title" name="title" type="text" placeholder="Enter book title" required />
            </div>
            <div>
              <Label htmlFor="authorName" value="Author Name" />
              <TextInput id="authorName" name="authorName" type="text" placeholder="Enter author's name" required />
            </div>
          </div>

          {/* Image URL & Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="imageURL" value="Book Cover Image URL" />
              <TextInput id="imageURL" name="imageURL" type="text" placeholder="Paste cover image URL" required />
            </div>
            <div>
              <Label htmlFor="categoryName" value="Book Category" />
              <Select id="categoryName" name="categoryName" value={selectedBookCategory} onChange={handleChangeSelectedValue}>
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
            <Textarea id="description" name="description" placeholder="Why do you recommend this book?" required rows={6} />
          </div>

          {/* PDF Link */}
          <div>
            <Label htmlFor="pdfURL" value="Goodreads Book URL" />
            <TextInput id="pdfURL" name="pdfURL" type="text" placeholder="Paste Goodreads book URL" required />
          </div>

          {/* Uploaded By */}
          <div>
            <Label htmlFor="uploadedBy" value="Your Name" />
            <TextInput id="uploadedBy" name="uploadedBy" type="text" placeholder="Enter your name" required />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 transition-all">
              Upload Book
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadBook;
