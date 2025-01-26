import React from 'react'
import { FaCalendar, FaDochub, FaHome, FaProjectDiagram, FaTerminal, FaTimes } from 'react-icons/fa'
import { useGlobalContext, type ContextType } from './context'
import { social } from './data'

const Sidebar = () => {
    const {closeSidebar, isSidebarOpen} = useGlobalContext() as ContextType
    console.log(isSidebarOpen)
  return (
    <div className={`fixed top-0 left-0 w-[300px] transition-all   h-[100vh] bg-white ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} `}>
        <div className='relative flex flex-col border-2 h-full justify-center items-center'>
            <button onClick={closeSidebar} className='absolute top-2 right-1 text-2xl  '>
                        <FaTimes/>
                    
            </button>
            <ul className='flex flex-col gap-4'>
                <li className='flex items-center gap-2'>
                    <FaHome/>
                    <p>Home</p>
                </li>
                <li className='flex items-center gap-2'>
                    <FaCalendar/>
                    <p>Calendar</p>
                </li>
                <li className='flex items-center gap-2'>
                    <FaDochub/>
                    <p>Documents</p>
                </li>
                <li className='flex items-center gap-2'>
                    <FaProjectDiagram/>
                    <p>Projects</p>
                </li>
                <li className='flex items-center gap-2'>
                    <FaTerminal/>
                    <p>Team</p>
                </li>
            </ul>
            <div className='flex gap-3 mt-6'>
                {social.map(item=>{
                    return <a key={item.id} href={item.url}>{item.icon}</a>
                })}
            </div>
        </div>
        
        </div>
  )
}

export default Sidebar