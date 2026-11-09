import React from 'react'
import { Outlet } from 'react-router-dom'
import AuthNaviBar from '../components/AuthNavBar'

const AuthLayout = () => {
  return (
    <div>

      <AuthNaviBar />
      <Outlet />
      
    </div>
  )
}

export default AuthLayout