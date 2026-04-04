import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, BookOpen, GraduationCap, Code, Microscope } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import EnquireModal from './EnquireModal';
import { courses } from '../Data/Courses';
import logo from '../assets/logo2.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isEnquireFormOpen, setEnquireFormOpen] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--color-primary-dark)] py-2 shadow-lg' : 'bg-[var(--color-primary)] py-4'
        }`}
    >
      {isEnquireFormOpen && <EnquireModal
        isOpen={isEnquireFormOpen}
        onClose={() => setEnquireFormOpen(false)}
        subject={"New Enquiry"}
      />}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-white font-bold text-2xl cursor-pointer">
            
              <img className='w-12 h-12 rounded-md' src={logo} alt="logo" />
            
            <span className='w-full text-[18px]'>Star Career Point Coaching Center</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-white font-medium">
            <NavLink to={'/'} className={({ isActive }) =>
              isActive
                ? "px-3 py-2 rounded-2xl bg-white text-red-600 border-b border-red-700"
                : "hover:text-red-200 transition-colors"
            }>Home</NavLink>

            {/* Courses Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-red-200 transition-colors py-2">
                <span>Courses</span>
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full -left-4 w-56 max-h-64 overflow-y-auto scroll-smooth pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="bg-white rounded-[var(--radius-md)] shadow-[var(--shadow-lg)] py-2 overflow-hidden">
                  {courses.map((course, idx) => (
                    <NavLink
                      to={`/course/${course.id}`}
                      state={{ course }}
                      key={idx} className="flex items-center space-x-3 px-4 py-3 text-gray-800 hover:bg-red-50 hover:text-[var(--color-primary)] transition-colors">
                      <span
                        className='text-[14px]'>{course.name}</span>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
            {/* <NavLink to={'/gallery'} className="hover:text-red-200 transition-colors">Gallery</NavLink> */}
            <NavLink
              to="/gallery"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 rounded-2xl bg-white text-red-600 border-b border-red-700"
                  : "hover:text-red-200 transition-colors"
              }
            >
              Gallery
            </NavLink>
            <NavLink
              to="/resources"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 rounded-2xl bg-white text-red-600 border-b border-red-700"
                  : "hover:text-red-200 transition-colors"
              }
            >
              Resources
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 rounded-2xl bg-white text-red-600 border-b border-red-700"
                  : "hover:text-red-200 transition-colors"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 rounded-2xl bg-white text-red-600 border-b border-red-700"
                  : "hover:text-red-200 transition-colors"
              }
            >
              Contact Us
            </NavLink>

          </nav>

          {/* Right CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => setEnquireFormOpen(true)}
              className="bg-white text-[var(--color-primary)] font-bold px-6 py-2 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 active:scale-95 shadow-md">
              Enroll Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`fixed inset-y-0 right-0 w-full bg-[var(--color-primary-dark)] z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-white font-bold text-2xl">Menu</span>
            <button onClick={() => setIsMenuOpen(false)} className="text-white"><X size={32} /></button>
          </div>

          <nav className="flex flex-col space-y-4 text-white text-xl">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "flex justify-center py-3 rounded-2xl bg-white text-red-600 border-b border-red-700"
                  : "border-b border-red-700 pb-2"
              }
            >
              <span>Home</span>
            </NavLink>
            {/* Mobile Accordion */}
            <div>
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className="flex justify-between items-center w-full border-b border-red-700 pb-2"
              >
                <span>Courses</span>
                <ChevronDown className={`transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-y-auto transition-all duration-300 ${isCoursesOpen ? 'h-60 mt-4 ml-4' : 'max-h-0'}`}>
                {courses.map((course, idx) => (
                  <NavLink
                    to={`/course/${course.id}`}
                    state={{ course }}
                    onClick={() => {
                      setIsMenuOpen(false)
                    }}
                    key={idx} className="block py-2 text-red-100 text-lg">{course.name}</NavLink>
                ))}
              </div>
            </div>

            <NavLink
              to="/gallery"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "flex justify-center py-3 rounded-2xl bg-white text-red-600 border-b border-red-700"
                  : "border-b border-red-700 pb-2"
              }
            >
              <span>Gallery</span>
            </NavLink>
            <NavLink
              to="/resources"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "flex justify-center py-3 rounded-2xl bg-white text-red-600 border-b border-red-700"
                  : "border-b border-red-700 pb-2"
              }
            >
              <span>Resources</span>
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "flex justify-center py-3 rounded-2xl bg-white text-red-600 border-b border-red-700"
                  : "border-b border-red-700 pb-2"
              }
            >
              <span>About Us</span>
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "flex justify-center  py-3  rounded-2xl bg-white text-red-600 border-b border-red-700"
                  : "border-b border-red-700 pb-2"
              }
            >
              <span>Contact Us</span>
            </NavLink>
            <button
              onClick={() => setEnquireFormOpen(true)}
              className="mt-6 bg-white text-[var(--color-primary)] font-bold py-4 rounded-xl shadow-lg">
              Enroll Now
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;