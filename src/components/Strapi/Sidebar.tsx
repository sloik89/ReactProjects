import React, { useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import { ContextType, useGlobalContext } from './context'
import { sublinks } from './data'

const Sidebar = () => {
    const {isSidebarOpen,closeSidebar} = useGlobalContext() as ContextType
    

    
  return (
     
    <aside className={`fixed top-0 left-0 w-full h-full bg-white ${isSidebarOpen ? 'block' : 'hidden'} lg:hidden`}>
      <div className='p-8 relative'>
        <button className='text-3xl absolute right-6 top-6' onClick={closeSidebar}>
          <FaTimes/>
        </button>
        <div>
          {
            sublinks.map((item)=>{
              const {pageId,page,links} = item
              return (
                <article key={pageId}>
                  <h4 className='capitalize tracking-wide text-2xl mb-4 text-blue-700'>{page}</h4>
                  <div className='grid grid-cols-2 md:grid-cols-3'>
                    {links.map((link)=>{
                      const {url,icon,label,id} = link
                      return(
                        <a key={id} href={url} className='flex items-center gap-2'>
                          <span>{icon}</span>
                          <span className='text-lg capitalize'>{label}</span>
                        </a>
                      )
                    })}
                  </div>
                </article>
              )
            })
          }
        </div>
      </div>

    </aside>
  )
}

export default Sidebar