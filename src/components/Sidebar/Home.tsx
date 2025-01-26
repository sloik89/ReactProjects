import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext, type ContextType } from './context'
import Modal from './Modal'
import Sidebar from './Sidebar'

const Home = () => {
    const {isModalOpen,isSidebarOpen,openModal,openSidebar} = useGlobalContext() as ContextType
    console.log(isSidebarOpen)
  return (
    <main>
        <button onClick={openSidebar}  className='text-4xl fixed top-6 left-4 animate-bounce text-purple-600'>
            <FaBars/>
        </button>
        <button onClick={openModal} className='bg-indigo-500 rounded-lg py-2 px-4 text-white capitalize'>
            show modal
        </button>
        {isModalOpen&& <Modal/>}
        {/* {isSidebarOpen && <Sidebar/>} */}
        <Sidebar/>
    </main>
  )
}

export default Home