import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Outlet } from "react-router-dom"

function MainLayout() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh"
    }}>
      <Navbar />
      <div style={{ flex: 1, padding: "20px 0" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout