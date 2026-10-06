import React from 'react'
import { NavLink } from 'react-router-dom' 
import PostJob from '../components/postJob'
import FindJob from '../components/FindJob'




import JobPage from './JobPage'


const HomePage = () => {
  return (
    
<main className="w-full min-h-screen bg-white pt-16"> 
  
       <PostJob />

       <div className="bg-orange-400 text-black py-6 md:py-6 px-6 sm:px-12 text-center mx-auto shadow-2xl rounded-lg
           text-white font-bold">
           <p>Unlock Your Professional Potential</p>
       </div>

       <FindJob />
           
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
