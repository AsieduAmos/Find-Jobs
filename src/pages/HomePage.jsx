import React from 'react'
import { NavLink } from 'react-router-dom' 
import findjob from '../images/findjob.png'
import employer from '../images/employer.jpg'
import JobPage from './JobPage'

const HomePage = () => {
  return (
    
    <main className="w-full min-h-screen bg-stone-100 pt-16"> 
          {/* Hero Section */}
       <section className="bg-stone-100 text-orange-600 py-6 md:py-12 px-6 sm:px-12 text-center mx-auto 
           border-b border-zinc-400 shadow-2xl">
         <p className="text-lg md:text-2xl lg:text-sm font-normal max-w-4xl mx-auto leading-relaxed">
           Whether you are looking for your next exciting job opportunity 
          or searching for the perfect employee, our platform bridges the gap. 
         </p>
      </section>

     <div className="w-full aspect-[4/3] sm:aspect-video md:h-96 lg:h-[28rem]  bg-[url('/src/images/emp.webp')]
            bg-cover bg-center bg-no-repeat relative flex flex-col justify-end md:block image-render-auto">
       
          {/* Call to Action: Add Job */}
        <div className="relative md:absolute md:bottom-6 md:left-1/2 md:-translate-x-1/2 bg-white text-black 
            p-4 sm:p-6 md:p-6 w-11/12 max-w-3xl mx-auto shadow-xl rounded-xl text-center my-4 md:my-0  ">
          <p className="text-base sm:text-lg md:text-xl lg:text-sm font-normal leading-relaxed ">
             Streamline your hiring process.Post your job vacancies and connect with qualified
             employees.
          </p>
          <div className="mt-2 md:mt-4">
            <NavLink to="/Addjob" className="inline-block bg-black text-white font-medium text-base md:text-lg 
            px-6 py-2 rounded-xl shadow-lg hover:bg-orange-500 transition duration-300 ease-in-out">
              Add Job
            </NavLink>
          </div>
        </div>
     </div>

      <div className="bg-orange-400 text-black py-6 md:py-6 px-6 sm:px-12 text-center mx-auto shadow-2xl rounded-lg
        text-white font-bold">
          <p>Unlock Your Professional Potential</p>
      </div>
            {/* Section 2: Find Job Info Grid */}
      <div className="w-full aspect-[4/3] sm:aspect-video md:h-96 lg:h-[28rem] bg-[url('/src/images/worriedlady.avif')]
            bg-cover bg-center bg-no-repeat relative flex flex-col justify-end md:block image-render-auto">
          <div className="relative md:absolute md:bottom-16 md:left-1/2 md:-translate-x-1/5 bg-white text-black 
            p-4 sm:p-6 md:p-6 w-11/12 max-w-3xl mx-auto shadow-xl rounded-xl text-center my-4 md:my-0  ">
          <p className="text-base sm:text-lg md:text-xl lg:text-sm font-normal leading-relaxed ">
             Skip the stress and let us match you with opportunities that perfectly fit your profession
          </p>
          {/* Call to Action: Find Job */}
          <div className="pt-2">
            <NavLink to="/jobpage" className="inline-block bg-orange-500 text-white font-medium text-base md:text-lg px-6 py-2
             rounded-xl shadow-lg hover:bg-black transition duration-300 ease-in-out">
              Find Job
            </NavLink>
          </div>
        </div>
      </div>  
       <div className="bg-orange-400 text-black py-6 md:py-6 px-6 sm:px-12 text-center mx-auto shadow-2xl 
        text-white font-bold mt-8">
          <p>Find A Job That Suits Your Interest And Skills</p>
      </div>
        {/* Embedded Jobs Feed */}
        <section className="">
          <JobPage isHome={true} />
        </section>

      
    </main>
  )
}

export default HomePage
