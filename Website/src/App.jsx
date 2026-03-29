import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Components/Header'
import Hero from './Components/Home/Hero'
import AllCourses from './Components/Home/AllCourses'
import HighlightBanner from './Components/Home/HighlightBanner'
import AllFacilities from './Components/Home/AllFacilities'
import Footer from './Components/Footer'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'
import CourseDetailPage from './Components/CourseDetailPage'
import GalleryPage from './Components/GalleryPage'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
