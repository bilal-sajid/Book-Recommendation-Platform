import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import {Textarea } from "flowbite-react";


const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Sci-Fi",
    "Horror",
    "Fantasy",
    "Bibliography",
    "History",
    "Self-Help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Art and Design"
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
  const handleChangeSelectedValue = (event) =>{
    console.log(event.target.value)
    setSelectedBookCategory(event.target.value)
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'> Upload a Book</h2>

      <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4">

        
        {/* First Row */}
        <div className='flex gap-8'>

          {/* Title */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="title" value="Book Title" />
            </div>
            <TextInput id="title" name = "title" type="text" placeholder="Book Name" required />
          </div>

            {/* Author */}
            <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" name = "authorName" type="text" placeholder="Author Name" required />
          </div>

        </div>

        {/* Second Row */}
        <div className='flex gap-8'>

          {/* Image URL */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput id="imageURL" name = "imageURL" type="text" placeholder="Book Image URL" required />
          </div>

          {/* Category */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
                <Label htmlFor="inputState" value="Book Category" />
            </div>

            <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}> 
              {
                bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
              }
            </Select>
          </div>

        </div>

        {/* Third Row */}
        
        {/* Book Description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="description" value="Write your Book Description..." />
          </div>
          <Textarea id="description" name ="description" placeholder="Book Description" required rows={6} className='w-full'/>

        </div>

    </form>
    </div>
  )
}

export default UploadBook