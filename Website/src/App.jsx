import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Components/Header'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'
import EnquireModal from './Components/EnquireModal'
import { ToastContainer } from 'react-toastify'
import FloatingWhatsAppButton from './Components/Modals/FloatingWhatsAppButton'

function App() {

  const [isEnquireNowFormOpen, setEnquireNowFormOpen] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setEnquireNowFormOpen(true)
    }, 3000);
  }, [])

  return (
    <>
      {isEnquireNowFormOpen && <EnquireModal
        isOpen={isEnquireNowFormOpen}
        onClose={() => setEnquireNowFormOpen(false)}
        subject={"New Enquiry"}
      />}


      <Navbar />
      <Outlet />
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        theme='dark'
      />

      <FloatingWhatsAppButton />
    </>
  )
}

export default App
