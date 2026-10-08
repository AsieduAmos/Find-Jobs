import React from 'react'
import FJ from '../images/FJ.png'
import { FaMapMarker } from 'react-icons/fa'

const Foot = () => {
  // Automatically grab the current year so it's always up-to-date
  const currentYear = new Date().getFullYear();

  return (
    <>

      <footer className="w-full mt-auto bg-gradient-to-b from-orange-400 to-orange-700 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl px-6 py-10">

           {/* Contact Us Section */}
          <div className=" text-white flex flex-col justify-start space-y-2">
            <h2 className="text-2xl md:text-2xl lg:text-xl font-bold pb-2 px-4 text-center">
              CONTACT US
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-normal leading-relaxed px-4">
              Email: info@findjob.com
            </p>
            <p className="text-sm sm:text-base md:text-lg font-normal leading-relaxed px-4">
              Phone: (233) 544956335
            </p>
            <div className="text-white flex items-center gap-2 px-4 font-bold">
              <FaMapMarker className="flex-shrink-0 text-white text-base" />
              <span>Drobo</span>
            </div>
          </div>
          
          {/* About Us Section */}
          <div className=" text-white flex flex-col justify-start">
            <h2 className="text-2xl md:text-2xl lg:text-xl font-bold pb-2 px-4 text-center">
              ABOUT US
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-sm font-normal leading-relaxed 
                    px-4 max-w-7xl mx-auto">
              FINDJOB is a specialized job board website that connects job seekers and employers. 
              The platform features an intuitive internal job board for employees to browse and 
              filter open positions, alongside a dedicated employer dashboard to seamlessly add 
              and publish available job vacancies. With a focus on user experience, FINDJOB aims 
              to streamline the job search and hiring process for both parties.
            </p>
          </div>


        </div>

        {/* Divider Line */}
        <hr className="w-full max-w-5xl border-white/20 my-4" />

        {/* Copyright Notice */}
        <div className="text-center py-4 text-white text-sm md:text-base font-medium tracking-wide opacity-80">
          <p>&copy; {currentYear} : FindJobs</p>
        </div>
      </footer>
    </>


  )
}

export default Foot
