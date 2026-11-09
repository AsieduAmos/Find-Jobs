import React, { useState } from 'react'
import FJ from '../images/FJ.png'
import { NavLink } from 'react-router-dom'  

const AuthNaviBar = () => {
 'text-white bg-black border border-white font-semibold text-lg lg:text-base px-6 py-3 lg:px-4 lg:py-2 text-center rounded-md cursor-pointer hover:bg-orange-400 hover:text-white transition duration-300 ease-in-out';
  
  return (
    <nav className="fixed top-0 left-0 w-full border-b border-white shadow-xl bg-white z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img className="pointer-events-none select-none w-10 h-10 object-contain" src={FJ} alt="Find Job Logo" />
            <span className="font-extrabold italic text-xl text-indigo-900 tracking-tight">
              Find Job
            </span>
          </div>

         

        
        </div>
      </div>

    </nav>
  )
}

export default AuthNaviBar
