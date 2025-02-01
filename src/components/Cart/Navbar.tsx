import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
const Navbar = () => {
  return (
    <nav>
        <div className='flex justify-between py-4 px-4 bg-indigo-500'>
            <h4 className='text-4xl text-white'>useReducer</h4>
            <div className='relative'>
                <FaCartPlus className='text-white text-4xl'/>
                <div className='bg-pink-400 absolute top-0 right-0 w-[20px] h-[20px] flex items-center justify-center rounded-full'>
                    <p className='text-white font-bold'>2</p>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar