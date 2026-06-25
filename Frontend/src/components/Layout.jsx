import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from '../pages/footer'

// App shell shared by every route: sticky nav, routed content, footer.
const Layout = () => {
  return (
    <div className='bg-[#071428] min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-1'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
