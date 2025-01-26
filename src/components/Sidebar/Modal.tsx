import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext, type ContextType } from './context'

const Modal = () => {
const {closeModal} = useGlobalContext() as ContextType
  return (
    <div className='fixed w-full h-[100vh] top-0 left-0 bg-black-rgba flex items-center justify-center'>
        <div className='p-10 bg-white w-[500px] h-[600px] relative text-red-500 flex items-center justify-center'>
            <button onClick={closeModal} className='absolute top-2 left-1 text-2xl'>
            <FaTimes/>
           
            </button>
            <h3 className='text-center text-3xl'>Modal Content</h3>
          
        </div>
    </div>
  )
}

export default Modal