import React from 'react'
import AuthNaviBar from '../components/AuthNavBar'

const ResetPassword = () => {
  return (
  <>
     <AuthNaviBar />
     <div className='mx-auto bg-slate-500 rounded-lg shadow-2xl relative mx-6 w-full sm:w-3/6 mt-20'>
        <form className='space-y-7 px-5 py-10 bg-white w-full text-stone-600'>
          <p className='text-4xl font-bold text-center'>Password Reset</p>
          <p className=''>
              Forgot your password? Enter your E-mail address below. 
              we will send an email to help  you reset it.
          </p>
         <div>
              <label className='block text-lg font-medium '> E-mail*</label>
              <input className='w-full p-2 border border-stone-300 shadow-xl bg-white 
                        rounded-md focus:outline-none focus:ring-2'
                type='email'
                name='email'
                id='email' 
                
                placeholder='E-mail address'
           />
         </div>

         <div className=''>
           <button
               type='submit' className=' text-white hover:text-indigo-900 font-bold
               bg-green-600 hover:bg-white cursor-pointer
               border-white px-10 py-3 mt-2 mb-2' >
               Reset My Password
          </button>
     </div>
    </form> 
  </div>  
</>
  )
}

export default ResetPassword