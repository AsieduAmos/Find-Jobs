import React from 'react'
import { NavLink } from 'react-router-dom' 
import findjob from '../images/findjob.png'
import employer from '../images/employer.jpg'
import JobPage from './JobPage'

const HomePage = () => {
  return (
    
    <main className="w-full min-h-screen bg-white pt-16"> 
          {/* Hero Section */}
       <section className="bg-stone-200 text-black py-8 md:py-14 px-6 sm:px-12  text-center mx-auto border-b border-zinc-400">
        <p className="text-lg md:text-2xl lg:text-sm font-normal max-w-4xl mx-auto leading-relaxed">
          Your Gateway to Career Growth and Top Talent.
          Whether you are looking for your next exciting job opportunity 
          or searching for the perfect employee, our platform bridges the gap. 
          List your company's vacancies today and connect with the right talent instantly.
        </p>
      </section>

     <div className="w-full aspect-[4/3] sm:aspect-video md:h-96 lg:h-[28rem]  bg-[url('/src/images/emp.webp')]
     bg-cover bg-center bg-no-repeat relative flex flex-col justify-end md:block image-render-auto">
       
          {/* Call to Action: Add Job */}
        <div className="relative md:absolute md:bottom-6 md:left-1/2 md:-translate-x-1/2 bg-white text-black 
            p-6 sm:p-8 md:p-10 w-11/12 max-w-3xl mx-auto shadow-xl rounded-xl text-center my-4 md:my-0  ">
          <p className="text-base sm:text-lg md:text-xl lg:text-sm font-normal leading-relaxed ">
             Streamline your hiring process and connect with qualified
             employees in just a few clicks. 
            Post your job vacancies and connect with top-tier talent tailored to your business needs in a minute .
          </p>
          <div className="mt-4 md:mt-6">
            <NavLink to="/Addjob" className="inline-block bg-indigo-700 text-white font-medium text-base md:text-lg 
            px-6 py-1 rounded-lg shadow hover:bg-black transition duration-300 ease-in-out">
              Add Job
            </NavLink>
          </div>
        </div>
     </div>



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

       

        

        {/* Divider / Visual Break */}
        <hr className="border-t border-gray-200 my-8" />

        {/* Section 2: Find Job Info Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* On mobile, standard flow places image first; on desktop, it sits side-by-side */}
          <div className="flex justify-center select-none pointer-events-none order-last lg:order-first">
            <img className="w-full max-w-md rounded-lg shadow-sm h-auto object-cover" src={findjob} alt="Young black man looking at his mobile phone" />
          </div>
          <div className="p-6 md:p-8 border border-gray-300 rounded-lg shadow-md bg-white">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              Find your next job with a single click. 
              Skip the stress and let us match you with opportunities
              that perfectly fit your profession.
            </p>
          </div>
        </section>

        {/* Call to Action: Find Job */}
        <section className="bg-gray-100 text-gray-900 p-8 md:p-10 max-w-3xl mx-auto shadow-md rounded-xl text-center space-y-6">
          <p className="text-base md:text-lg text-gray-700"> 
            Unlock your professional potential by aligning your core strengths and
            personal ambitions with roles where you can truly thrive.
          </p>
          <div className="pt-2">
            <NavLink to="/jobpage" className="inline-block bg-black text-white font-medium text-base md:text-lg px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition duration-300 ease-in-out">
              Find Job
            </NavLink>
          </div>
        </section>

        {/* Embedded Jobs Feed */}
        <section className="pt-8">
          <JobPage isHome={true} />
        </section>

      </div>
    </main>
  )
}

export default HomePage
