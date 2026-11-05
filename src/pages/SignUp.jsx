import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
<>
  
 
    <div className='mx-auto bg-slate-500 rounded-lg shadow-2xl relative mx-6 w-full sm:w-2/5 mt-20'>
         <form className='space-y-6 px-5 py-12 bg-stone-100 w-full text-stone-700'>
           
            <div className='text-center mb-10'>
                 <p className='text-3xl font-bold text-stone-600 mb-2 '>Sign Up</p>
                 <p className='text-stone-500'>fields marked (*) are mandatory</p>
            
            </div>

         <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
           <div>
           <label className='block mb-2 text-lg font-medium text-stone-400'>Username*</label>
           <input className='w-full p-3 bg-white rounded-md shadow-2xl'
                 type='username'
                 name='username'
                 id='username' 
                 required
                 placeholder='Username'
           />
           </div>
            
           <div>
           <label className='block mb-2 text-lg font-medium text-stone-400'>Email</label>
           <input className='w-full p-3 bg-white rounded-md shadow-2xl'
                 type='email'
                 name='email'
                 id='email' 
                 
                 placeholder='Username '
            />
          </div>
        </div>

         <div>
           <label className='block mb-2 text-lg font-medium text-stone-400'>Phone Number*</label>
           <input className='w-full p-3 bg-white rounded-md shadow-2xl'
                 type='tel'
                 name='phone'
                 id='phone' 
                 required
                 placeholder='Phone Number'
            />
          </div>

        <div>
          <label className='block mb-2 text-lg font-medium text-stone-400'>Password*</label>
          <input className='w-full p-3 bg-white rounded-md shadow-2xl  '
                type='password'
                name='Password'
                id='Password' 
                required
                 placeholder='Password'
            />
         </div>

         <div>
          <label className='block mb-2 text-lg font-medium text-stone-400'>Re-enter Password*</label>
          <input className='w-full p-3 bg-white rounded-md shadow-2xl  '
                type='password'
                name='ConfirmPassword'
                id='ConfirmPassword' 
                required
                 placeholder='Password'
            />
         </div>

          <div className=' items-center'>
           <button
               type='submit' className=' text-white bg-blue-400 hover:shadow-xl cursor-pointer
               border-white px-8 py-3 mt-4 mb-2' >
               CREATE
           </button>

           

           </div>
        
        </form> 
      </div>
  

</>
  )
}

export default SignUp