import React from 'react'
import { AppProvider, ContextType, useGlobalContext } from './context'
import Hero from './Hero'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Submenu from './Submenu'

const AppStrapi = () => {
    const {isSidebarOpen}  = useGlobalContext() as ContextType
  return (
    
        <div className='bg-indigo-500 p-6 rounded-md relative '>
            <Navbar/>
            <Hero/>
            <Sidebar/>
            <Submenu/>
        </div>
    
  )
}

export default AppStrapi