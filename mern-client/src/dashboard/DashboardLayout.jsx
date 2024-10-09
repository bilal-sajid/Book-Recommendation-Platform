import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBarComponent from './SideBarComponent'

const DashboardLayout = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
      <SideBarComponent/>
      <Outlet/>
    </div>
  )
}

export default DashboardLayout