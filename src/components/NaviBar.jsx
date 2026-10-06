import React, { useState } from 'react'
import FJ from '../images/FJ.png'
import { NavLink } from 'react-router-dom'  

const NaviBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // consistent styling across mobile and desktop
  const activeStyle = ({ isActive }) => 
    isActive 
      ? 'bg-orange-600 hover:bg-orange-900 text-white font-semibold text-lg lg:text-base px-6 py-3 lg:px-4 lg:py-2 text-center rounded-md cursor-pointer transition duration-300 ease-in-out'
      : 'text-white bg-black border border-white font-semibold text-lg lg:text-base px-6 py-3 lg:px-4 lg:py-2 text-center rounded-md cursor-pointer hover:bg-orange-400 hover:text-white transition duration-300 ease-in-out';
  
  return (
    <nav className="fixed top-0 left-0 w-full border-b border-white shadow-xl bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img className="pointer-events-none select-none w-10 h-10 object-contain" src={FJ} alt="Find Job Logo" />
            <span className="font-extrabold italic text-xl text-indigo-900 tracking-tight">
              Find Job
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <NavLink to="/" className={activeStyle}>Home</NavLink>
            <NavLink to="/addjob" className={activeStyle}>Add Job</NavLink>
            <NavLink to="/jobpage" className={activeStyle}>Jobs</NavLink>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden id=mobile-menu bg-white border-t border-gray-100 shadow-inner">
          <div className="px-4 pt-2 pb-4 space-y-3 flex flex-col">
            <NavLink to="/" className={activeStyle} onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/addjob" className={activeStyle} onClick={() => setIsOpen(false)}>Add Job</NavLink>
            <NavLink to="/jobpage" className={activeStyle} onClick={() => setIsOpen(false)}>Jobs</NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NaviBar
