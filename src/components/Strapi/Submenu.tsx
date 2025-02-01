import React from 'react'
import { ContextType, useGlobalContext } from './context'
import { sublinks } from './data'

const Submenu = () => {
  const {pageId,setPageId} = useGlobalContext() as ContextType
  const currentPage = sublinks.find((i)=>i.pageId === pageId)
  console.log(currentPage?.links.length)
  const handleMouseLeave = () =>{
    setPageId(null)
  }
  return (
    <div className={`bg-white absolute top-16 left-0 w-full h-0 overflow-hidden transition-all  rounded-lg  ${currentPage?.links.length ? 'h-auto p-5' : ''} `} onMouseLeave={handleMouseLeave}>
      <h5 className='text-2xl capitalize mb-2 tracking-wider'>{currentPage?.page}</h5>
      <div className={` grid transition-all   ${currentPage && currentPage.links && currentPage.links.length >=  3 ? 'grid-cols-3' :'grid-cols-1'} `}>
        {currentPage?.links?.map((item,idx) => {
          const {icon,id,label,url} = item
          return (
            <a href="" key={id} className='flex items-center gap-2'>
              <span>{icon}</span>
              <span>{label}</span>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Submenu