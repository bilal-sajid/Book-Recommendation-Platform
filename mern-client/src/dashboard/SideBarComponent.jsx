import React, { useContext } from 'react'
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiTable } from "react-icons/hi";
import {AuthContext} from "../contexts/AuthProvider"



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
          <Sidebar.Item href="https://book-store-application-self.vercel.app/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="https://book-store-application-self.vercel.app/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="https://book-store-application-self.vercel.app/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item href="https://book-store-application-self.vercel.app/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="https://book-store-application-self.vercel.app/logout" icon={HiTable}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default SideBarComponent