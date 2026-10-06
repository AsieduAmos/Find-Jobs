import React from 'react'
import { NavLink } from 'react-router-dom'

const FindJob = () => {
  return (
    <>
       <div className='grid grid-cols-1 md:grid-cols-2 sm:mt-20 mt-10 px-4 bg-stone-200 sm:h-130 h-180'>
            <div className='bg-orange-400 sm:h-96 h-105 lg:h-[28rem]'>
               <div className='sm:my-10 my-6 mx-6 sm:pl-8 pl-1 h-94 bg-stone-100 shadow-2xl rounded-lg'>
                 <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-orange-400 sm:pt-20 pt-8 pb-4 px-4 mb-4 max-w-7xl mx-auto'>
                 Find Your Job Opportunity Here
                 </h2>
                 <p className='text-base sm:text-lg md:text-xl lg:text-sm text-stone-700 font-normal leading-relaxed 
                    px-6 max-w-7xl mx-auto'>
                      Let us match you with opportunities that perfectly fit your profession and skills.
                     Explore all the most exciting job roles and take the next step in your career.
                 </p>
                  <div className="mt-6 md:mt-16 text-center ">
                   <NavLink to="/jobpage" className="inline-block bg-orange-500 text-white font-medium text-base md:text-lg px-10 py-1
                    rounded-xl shadow-lg hover:bg-black transition duration-300 ease-in-out">
                     Find Job
                   </NavLink>
                 </div>
               </div>
              </div>
              <div className="w-full aspect-[4/3] sm:aspect-video md:h-96 lg:h-[28rem] bg-[url('/src/images/employee.jpg')]
                   bg-cover bg-center bg-no-repeat relative flex flex-col justify-end md:block image-render-auto">
               <div className="text-center bg-white text-orange-400 sm:w-2/5 w-full mt-14 sm:mt-30 h-18 sm:ml-40 ml-1 shadow-2xl
                  mb-10 rounded-lg"> 
                   <p className="text-base sm:text-lg md:text-xl lg:text-sm font-semibold leading-relaxed sm:py-6 py-2 ">
                         Skip The Stress And Find Job 
                      </p>
                </div>
              </div>
            
         </div>
    
    </>
  )
}

export default FindJob