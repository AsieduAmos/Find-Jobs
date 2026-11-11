import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthNaviBar from '../components/AuthNavBar'
import {auth, googleProvider} from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    // Initialize the navigate function from react-router-dom
    const navigate = useNavigate();

   const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');

    // checking if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return; // Stop further execution if passwords don't match
    }

    try {
      await createUserWithEmailAndPassword(auth,  email,  password,);
       // Navigate to the login page after successful sign-up
      navigate('/login');
      // Handle successful sign-up
    } catch (error) {
      // Handle sign-up errors
      console.error('Error signing up:', error);
    }
  };

  const continueWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
      // Navigate to the login page after successful sign-in
      navigate('/login');
      // Handle successful sign-in
    } catch (error) {
      setError('err.message');
      // Handle sign-up errors
      console.error('Error signing up:', error);
    }
  };

  

  return (
   
<>
      <AuthNaviBar />
 
    <div className='mx-auto bg-slate-500 rounded-lg shadow-2xl relative mx-6 w-full sm:w-2/5 mt-18 mb-30'>
         <form onSubmit={handleSignUp}
          className='space-y-6 px-5 py-12 bg-stone-100 w-full text-stone-700'>
           
            <div className='text-center mb-10'>
                 <p className='text-3xl font-bold text-stone-600 mb-2 '>Sign Up</p>
                 <p className='text-stone-500'>fields marked (*) are mandatory</p>
            
            </div>

            

         <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
           <div>
           <label className='block mb-2 text-lg font-medium text-stone-400'>Username*</label>
           <input onChange={(e) => setUsername(e.target.value)}
                className='w-full p-3 bg-white rounded-md shadow-2xl'
                 type='text'
                 name='username'
                 id='username' 
                 required
                 placeholder='Username'
           />
           </div>
            
           <div>
           <label className='block mb-2 text-lg font-medium text-stone-400'>Email</label>
           <input onChange={(e) => setEmail(e.target.value)}
                className='w-full p-3 bg-white rounded-md shadow-2xl'
                 type='email'
                 name='email'
                 id='email' 
                 required
                 placeholder='Email '
            />
          </div>
        </div>

         <div>
           <label className='block mb-2 text-lg font-medium text-stone-400'>Phone Number*</label>
           <input onChange={(e) => setPhone(e.target.value)}
                 className='w-full p-3 bg-white rounded-md shadow-2xl'
                 type='tel'
                 name='number'
                 id='number' 
                 required
                 placeholder='Phone Number'
            />
          </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <div>
          <label className='block mb-2 text-lg font-medium text-stone-400'>Password*</label>
          <input onChange={(e) => setPassword(e.target.value)}
                className='w-full p-3 bg-white rounded-md shadow-2xl  '
                type='password'
                name='Password'
                id='Password' 
                required
                 placeholder='Password'
            />
         </div>

         <div>
          <label className='block mb-2 text-lg font-medium text-stone-400'>Re-enter Password*</label>
          <input onChange={(e) => setConfirmPassword(e.target.value)}
                className='w-full p-3 bg-white rounded-md shadow-2xl  '
                type='password'
                name='ConfirmPassword'
                id='ConfirmPassword' 
                required
                 placeholder='Password'
            />
         </div>
       </div>  

          <div className='grid grid-cols-2 gap-4'>
            <div className=' items-center'>
           <button
               type='submit' className=' text-white bg-blue-400 hover:shadow-xl cursor-pointer
               border-white px-8 py-3 mt-4 mb-2' 
               onClick={handleSignUp}>
               CREATE
           </button>

          </div>

           <div>
            <button 
            className=' text-red-600  hover:text-red-700 hover:bg-white cursor-pointer
               border-white px-8 py-3 mt-6 mb-2 '
               onClick={continueWithGoogle}>
             Continue with Google
           
            </button>
           </div>

          </div>
        
        </form> 
        
      </div>
  

</>
  )
}

export default SignUp