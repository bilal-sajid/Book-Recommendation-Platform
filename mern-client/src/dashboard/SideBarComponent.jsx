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
          user?.displayName || "Demo User"
        }
    </Sidebar.Logo>

      <Sidebar.Items>
        <Sidebar.ItemGroup>


          <Sidebar.Item>
            <Link to="/admin/dashboard" className="flex items-center text-gray-800 hover:text-blue-600 transition-all duration-300">
              <HiChartPie className="mr-3" />
              Dashboard
            </Link>
          </Sidebar.Item>

          <Sidebar.Item>
            <Link to="/admin/dashboard/upload" className="flex items-center text-gray-800 hover:text-blue-600 transition-all duration-300">
              <HiOutlineCloudUpload className="mr-3" />
              Upload Book
            </Link>
          </Sidebar.Item>

{/*           
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item> */}
          {/* <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload Book
          </Sidebar.Item> */}
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default SideBarComponent