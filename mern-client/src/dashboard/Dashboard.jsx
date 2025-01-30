import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineCloudUpload, HiInbox } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-orange-50 px-6 py-12">
      
      {/* Welcome Section */}
      <div className="text-center">
        <h2 className="mb-4 text-4xl font-extrabold text-gray-800">📊 Welcome to Your Dashboard</h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Manage your book recommendations, update existing entries, and upload new books. Everything you need, all in one place!
        </p>
      </div>

      {/* Quick Actions Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        {/* Upload Book Button */}
        <Link to="/admin/dashboard/upload" className="flex flex-col items-center bg-white shadow-md hover:shadow-lg transition-shadow p-6 rounded-lg border border-gray-200 w-64 text-center">
          <HiOutlineCloudUpload className="text-5xl text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Upload a New Book</h3>
          <p className="text-sm text-gray-600 mt-2">Add a new recommendation to the collection.</p>
        </Link>

        {/* Manage Books Button */}
        <Link to="/admin/dashboard/manage" className="flex flex-col items-center bg-white shadow-md hover:shadow-lg transition-shadow p-6 rounded-lg border border-gray-200 w-64 text-center">
          <HiInbox className="text-5xl text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Manage Your Books</h3>
          <p className="text-sm text-gray-600 mt-2">Edit or remove books you've recommended.</p>
        </Link>

      </div>
    </div>
  );
};

export default Dashboard;
