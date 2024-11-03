import React from 'react'
import { Outlet } from 'react-router-dom'
import Landing from '../Landing/Landing'

const MainPage = () => {
  return (
    <div>
       
        <Outlet/>
        </div>
  )
}

export default MainPage