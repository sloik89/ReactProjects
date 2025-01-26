import React from 'react'
import { FaBars } from 'react-icons/fa'
import { ContextType, useGlobalContext } from './context'
import Navlinks from './Navlinks'
const Navbar = () => {
const {openSidebar} = useGlobalContext() as ContextType
  return (
    <nav className='w-[80vw] max-w-[900px]'>
        <div className='flex justify-between'>
            <h3 className=' tracking-widest text-3xl font-bold text-white'>strapi</h3>
            <button onClick={openSidebar} className='ease-in text-3xl bg-slate-300 p-2 rounded-lg hover:bg-slate-200 hover:scale-105 lg:hidden '>
                <FaBars/>
            </button>
            <Navlinks/>
        </div>
    </nav>
  )
}

export default Navbar