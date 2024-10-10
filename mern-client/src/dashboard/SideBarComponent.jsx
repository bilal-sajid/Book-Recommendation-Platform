import React, { useContext } from 'react'
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiTable } from "react-icons/hi";
import {AuthContext} from "../contexts/AuthProvider"
import { Link } from 'react-router-dom';



const SideBarComponent = () => {

  const {user} = useContext(AuthContext)

  return (
    <Sidebar aria-label="Sidebar with content separator example">
    
    <Sidebar.Logo href="/" img={user?.photoURL}> 

      {/* imgAlt="Flowbite logo"> */}
        {
          "Back To Home"
          // user?.displayName || "Demo User"
        }
    </Sidebar.Logo>

      <Sidebar.Items>
        <Sidebar.ItemGroup>

          {/* Dashboard */}
          <Sidebar.Item>
            <Link to="/admin/dashboard" className="flex items-center text-gray-800 hover:text-blue-600 transition-all duration-300">
              <HiChartPie className="mr-3" />
              Dashboard
            </Link>
          </Sidebar.Item>

          {/* Upload Book */}
          <Sidebar.Item>
            <Link to="/admin/dashboard/upload" className="flex items-center text-gray-800 hover:text-blue-600 transition-all duration-300">
              <HiOutlineCloudUpload className="mr-3" />
              Upload Book
            </Link>
          </Sidebar.Item>

          {/* Manage Books */}
          <Sidebar.Item>
            <Link to="/admin/dashboard/manage" className="flex items-center text-gray-800 hover:text-blue-600 transition-all duration-300">
              <HiInbox className="mr-3" />
              Manage Books
            </Link>
          </Sidebar.Item>

          {/* Sign In */}
          <Sidebar.Item>
            <Link to="/login" className="flex items-center text-gray-800 hover:text-blue-600 transition-all duration-300">
              <HiArrowSmRight className="mr-3" />
              Sign In
            </Link>
          </Sidebar.Item>

          {/* Logous */}
          <Sidebar.Item>
            <Link to="/logout" className="flex items-center text-gray-800 hover:text-blue-600 transition-all duration-300">
              <HiArrowSmRight className="mr-3" />
              Log Out
            </Link>
          </Sidebar.Item>

{/*           
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item> */}
          {/* <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload Book
          </Sidebar.Item> */}
          {/* <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </Sidebar.Item> */}
          {/* <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item> */}
          {/* <Sidebar.Item href="/logout" icon={HiTable}>
            Log Out
          </Sidebar.Item> */}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default SideBarComponent