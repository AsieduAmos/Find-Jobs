import React from 'react'
import { Link } from 'react-router-dom'
import AuthNaviBar from '../components/AuthNavBar'




const Login = () => {
  

    return (
<>
   <AuthNaviBar />
 
    <div className='mx-auto bg-slate-500 rounded-lg shadow-2xl relative mx-6 w-full sm:w-2/5 mt-30 mb-30'>
         <form className='space-y-6 px-5 py-12 bg-stone-100 w-full text-stone-700'>
            <p className='text-4xl font-bold text-stone-600 '>Sign In</p>

             <div className='text-stone-500 '>If you have not created an account yet, then please
             <Link to='/SignUp' className='hover:underline text-red-600 '
            > sing up</Link> first
             </div>
            
        <div>
           <label className='block mb-2 text-lg font-medium '>Login:</label>
           <input className='w-full p-3 bg-white rounded-md shadow-2xl'
                 type='email'
                 name='email'
                 id='email' 
                 required
                 placeholder='Username or email'
           />
        </div>

        <div>
          <label className='block mb-2 text-lg font-medium '>Password:</label>
          <input className='w-full p-3 bg-white rounded-md shadow-2xl  '
                type='password'
                name='Password'
                id='Password' 
                required
                 placeholder='Password'
            />
         </div>

          <div className='flex flex-col sm:flex-row justify-center gap-4 items-center'>
           <button
               type='submit' className=' text-white bg-blue-400 hover:shadow-xl cursor-pointer
               border-white px-8 py-3 mt-4 mb-2' >
               SIGN IN
           </button>

            <div className='text-white bg-green-600 hover:shadow-xl cursor-pointer
               border-white px-8 py-3 mt-4 mb-2 '>
             <Link to='/resetpassword'
            > FORGOT PASSWORD?</Link> 
             </div>

           </div>
        
        </form> 
      </div>
  
   
</>
  )
}

export default Login