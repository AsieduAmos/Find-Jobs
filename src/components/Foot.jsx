import React from 'react'
import FJ from '../images/FJ.png'

const Foot = () => {
  // Automatically grab the current year so it's always up-to-date
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-orange-400 text-black py-8 md:py-10 border-t border-orange-600 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Logo Section */}
        <div className="flex items-center justify-center mb-6 select-none pointer-events-none">
          <img 
            className="w-12 h-12 md:w-14 md:h-14 object-contain" 
            src={FJ} 
            alt="Find Jobs Logo" 
          />
        </div>
        
        {/* Copyright Notice */}
        <div className="border-t border-gray-700/50 pt-6">
          <p className="text-center text-sm md:text-base text-white font-medium tracking-wide">
            &copy; {currentYear} FindJobs. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Foot
