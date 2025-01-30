import React, { useContext } from 'react';
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiHome, HiInbox, HiOutlineCloudUpload } from "react-icons/hi";
import { AuthContext } from "../contexts/AuthProvider";
import { Link, useLocation } from 'react-router-dom';

const SideBarComponent = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation(); // To highlight active links

  return (
    <Sidebar aria-label="Dashboard Sidebar" className="h-screen bg-orange-50 shadow-md px-4 py-6">
      
      {/* Sidebar Logo */}
      <Sidebar.Logo>
        <Link to="/" className="flex items-center text-gray-900 hover:text-orange-600 transition-all duration-300">
          <HiHome className="mr-3 text-2xl" />
          <span className="font-bold text-lg">Back To Home</span>
        </Link>
      </Sidebar.Logo>

      {/* Sidebar Items */}
      <Sidebar.Items>
        <Sidebar.ItemGroup>

          {/* Dashboard */}
          <Sidebar.Item>
            <Link to="/admin/dashboard" 
              className={`flex items-center text-gray-900 px-3 py-2 rounded-lg hover:bg-orange-100 hover:text-orange-600 transition-all duration-300 ${
                location.pathname === "/admin/dashboard" ? "bg-orange-200 text-orange-700" : ""
              }`}>
              <HiChartPie className="mr-3 text-lg" />
              Dashboard
            </Link>
          </Sidebar.Item>

          {/* Upload Book */}
          <Sidebar.Item>
            <Link to="/admin/dashboard/upload"
              className={`flex items-center text-gray-900 px-3 py-2 rounded-lg hover:bg-orange-100 hover:text-orange-600 transition-all duration-300 ${
                location.pathname === "/admin/dashboard/upload" ? "bg-orange-200 text-orange-700" : ""
              }`}>
              <HiOutlineCloudUpload className="mr-3 text-lg" />
              Upload Book
            </Link>
          </Sidebar.Item>

          {/* Manage Books */}
          <Sidebar.Item>
            <Link to="/admin/dashboard/manage" 
              className={`flex items-center text-gray-900 px-3 py-2 rounded-lg hover:bg-orange-100 hover:text-orange-600 transition-all duration-300 ${
                location.pathname === "/admin/dashboard/manage" ? "bg-orange-200 text-orange-700" : ""
              }`}>
              <HiInbox className="mr-3 text-lg" />
              Manage Books
            </Link>
          </Sidebar.Item>

          {/* Sign In */}
          {/* <Sidebar.Item>
            <Link to="/login" className="flex items-center text-gray-800 hover:text-blue-600 transition-all duration-300">
              <HiArrowSmRight className="mr-3" />
              Sign In
            </Link>
          </Sidebar.Item> */}

          {/* Log Out */}
          <Sidebar.Item>
            <Link to="/logout" 
              className="flex items-center text-gray-900 px-3 py-2 rounded-lg hover:bg-red-100 hover:text-red-600 transition-all duration-300">
              <HiArrowSmRight className="mr-3 text-lg" />
              Log Out
            </Link>
          </Sidebar.Item>

        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBarComponent;
