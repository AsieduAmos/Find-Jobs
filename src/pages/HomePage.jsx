import React from 'react'
import { NavLink } from 'react-router-dom' 
import FindJob from '../components/FindJob'
import JobPage from './JobPage'
import PostJob from '../components/PostJob'
import { Link } from 'react-router-dom'
import NaviBar from '../components/NaviBar'
import Foot from '../components/Foot'
 



const HomePage = () => {
  return (
    
<>  
  <NaviBar />
  
<main className="w-full min-h-screen bg-white pt-16"> 
      
      

       <div className="bg-gradient-to-b from-orange-400 to-orange-600 py-6 md:py-6 px-6 sm:px-12 text-center 
       mx-auto shadow-xl text-white font-bold ">
           <p> Connecting With Qualified Employees And Job Search Made Easy  </p>
       </div>
    
        <PostJob />
        

       <div className="bg-gradient-to-b from-orange-400 to-orange-600 py-6 md:py-6 px-6 sm:px-12 text-center
        mx-auto shadow-xl text-white font-bold">
           <p>Unlock Your Professional Potential</p>
       </div>

       <FindJob />
           
       <div className="bg-gradient-to-b from-orange-400 to-orange-600 text-black py-6 md:py-6 px-6 sm:px-12
        text-center mx-auto shadow-2xl text-white font-bold mt-8">
          <p>Find A Job That Suits Your Interest And Skills</p>
      </div>
        {/* Embedded Jobs Feed */}
        <JobPage isHome={true} />

         <div className='mb-12 mt-2 text-center ' >  
         <Link
           to={`/jobpage/`}
           className="inline-block md:w-1/5 w-2/3 text-white py-3 rounded-lg bg-orange-700  
               hover:bg-orange-900 transition text-xl font-bold shadow-sm"
            >
                Browse More Jobs 
         </Link>
      </div>
        
          

     <Foot />

     
    </main>
    

</>    
  )
}

export default HomePage
