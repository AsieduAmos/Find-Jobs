import React from 'react'
import { Outlet } from 'react-router-dom'
import NaviBar from '../components/NaviBar'
import Foot from '../components/Foot'

const MainLayout = () => {
  return (
    <>
      
      <Outlet /> 
      
    </>
  )
}

export default MainLayout