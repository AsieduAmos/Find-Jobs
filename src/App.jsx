import React from 'react'

import { createBrowserRouter, createRoutesFromElements,
   Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import JobPage from './pages/JobPage'
import AddJob from './pages/AddJob'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ResetPassword from './pages/ResetPassword'
import PageNotFound from './pages/PageNotFound'
import JobDetails, {jobLoader} from './pages/JobDetails'



const App = () => {

  const addJob = async (newJob) => {
    const res = await fetch('http://localhost:7000/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
      
    });
    return;
  };
      

  const router = createBrowserRouter(
   createRoutesFromElements(
    
   
    <Route path='/' element={<MainLayout />} >
         <Route index element={<HomePage />} />
         <Route path='addjob' element={<AddJob submitJob={addJob}/>} />
         <Route path='jobpage' element={<JobPage/>} />
         <Route path='jobpage/:id' element={<JobDetails/>} loader={jobLoader}  />
         <Route path='login' element={<Login/>} />
         <Route path='signup' element={<SignUp/>} />
         <Route path='resetpassword' element={<ResetPassword/>} />
         <Route path='*' element={<PageNotFound />} />
         
       

    </Route>
   
   )
  )

  return (
   <RouterProvider router={router} />
   
  )
}

export default App