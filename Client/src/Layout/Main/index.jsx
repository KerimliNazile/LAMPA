import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import toast, { Toaster } from 'react-hot-toast';

const Main = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Toaster />
        <Footer/>
    </div>
  )
}

export default Main