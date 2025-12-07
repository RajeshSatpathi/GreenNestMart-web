import React from 'react'
import {Outlet} from "react-router-dom"
import AdminSidebar from '../AdminComponent/AdminSidebar'
import AdminHeader from '../AdminComponent/AdminHeader'
import  { useState } from 'react'
function AdminLayout() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex h-screen">
      {/* Sidebar on the left */}
      < AdminSidebar isOpen={isOpen} setIsOpen={setIsOpen}/>

      {/* Main content area */}
      <div className="flex flex-col flex-1">
        {/* Navbar on top */}
        <AdminHeader isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Page content rendered here */}
        <div className="flex-1 overflow-auto p-4 ">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminLayout