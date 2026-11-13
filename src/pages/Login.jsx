
import React, {useState}from 'react'
import { Link, useNavigate, useLocation} from 'react-router-dom'
import {auth,} from '../config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import AuthNaviBar from '../components/AuthNavBar'




const Login = () => {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');
   const [loading, setLoading] = useState(false);


   const navigate = useNavigate();
   const location = useLocation();

   //Check if a previous location was explicitly passed in React Router state
   const from = location.state?.from;



   const handleLogin = async (e) => {
      e.preventDefault();
      setError('');
      setLoading(true);

      try {
         //authenticate the user with Firebase
         await signInWithEmailAndPassword(auth, email, password);

         if (from) {
            // 1. Go to the exact route passed in location.state
            navigate(from, { replace: true });
          } 
       else {
        // 3. Default fallback if they opened /login directly in a new tab
        navigate('/addjob', { replace: true });
      }
          
         } catch (err) {
         setError('Invalid email or password. Please try again.');
      } finally {
         setLoading(false);
      }  
   };  



    return (
<>
   <AuthNaviBar />
 
    <div className='mx-auto bg-slate-500 rounded-lg shadow-2xl relative mx-6 w-full sm:w-2/5 mt-30 mb-30'>
         <form onSubmit={handleLogin}
         className='space-y-6 px-5 py-12 bg-stone-100 w-full text-stone-700'>
            <p className='text-4xl font-bold text-stone-600 '>Sign In</p>

             <div className='text-stone-500 '>If you have not created an account yet, then please{' '}
             <Link to='/SignUp' className='hover:underline text-red-600 '
            > sing up</Link>{' '} first
             </div>

             {error && (
               <div className=' p-3 text-sm text-red-600 text-center font-medium mt-4'>
                {error}  
               </div>
             )}
            
        <div>
           <label className='block mb-2 text-lg font-medium' htmlFor='email'>
            Login:</label>
           <input className='w-full p-3 bg-white rounded-md shadow-2xl'
                 type='email'
                 name='email'
                 id='email' 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 required
                 placeholder='Email address'
           />
        </div>

        <div>
          <label className='block mb-2 text-lg font-medium ' htmlFor='password'>
            Password:</label>
          <input className='w-full p-3 bg-white rounded-md shadow-2xl  '
                type='password'
                name='Password'
                id='Password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                 placeholder='Password'
            />
         </div>

          <div className='flex flex-col sm:flex-row justify-center gap-6 items-center'>
           <button
               type='submit'
               disabled={loading}
               className=' text-white bg-blue-400 hover:shadow-xl cursor-pointer
               border-white px-8 py-3 mt-4 mb-2' >
               {loading ? 'Signing in...' : 'SIGN IN'}
               
           </button>

         <div className='text-white bg-green-600 hover:shadow-xl cursor-pointer
               border-white px-8 py-3 mt-4 mb-2 '>
             <Link to='/resetpassword'
            > FORGOT PASSWORD?
            </Link> 
         </div>

           </div>
        
        </form> 
      </div>
  
   
</>
  )
}

export default Login