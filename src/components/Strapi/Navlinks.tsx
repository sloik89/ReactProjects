import React from 'react'
import { ContextType, useGlobalContext } from './context'
import { sublinks } from './data'

const Navlinks = () => {
    const {setPageId} = useGlobalContext() as ContextType
   return (
    <div className='hidden lg:flex w-full justify-center items-center'>
        <ul className='flex gap-4 '>
        {sublinks.map((item) => {
            const {page,pageId} = item
            return (
                <button className='text-white' key={pageId} onMouseEnter={() =>setPageId(pageId)}>
                    {page}
                </button>
            )
        })}
        </ul>
       
    </div>
  )
}

export default Navlinks