import React from 'react'
import { NavLink } from 'react-router-dom' 
import FindJob from '../components/FindJob'
import JobPage from './JobPage'
import PostJob from '../components/PostJob'


const HomePage = () => {
  return (
    
<main className="w-full min-h-screen bg-white pt-16"> 

       <div className="bg-gradient-to-b from-orange-400 to-orange-600 py-6 md:py-6 px-6 sm:px-12 text-center mx-auto shadow-xl 
           text-white font-bold">
           <p> Connecting With Qualified Employees And Job Search Made Easy  </p>
       </div>
        <PostJob />

       <div className="bg-gradient-to-b from-orange-400 to-orange-600 py-6 md:py-6 px-6 sm:px-12 text-center mx-auto shadow-xl 
           text-white font-bold">
           <p>Unlock Your Professional Potential</p>
       </div>

       <FindJob />
           
       <div className="bg-gradient-to-b from-orange-400 to-orange-600 text-black py-6 md:py-6 px-6 sm:px-12 text-center mx-auto shadow-2xl 
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
