import React from 'react'
import { ContextType, useGlobalContext } from './context'
import { sublinks } from './data'

const Submenu = () => {
  const {pageId} = useGlobalContext() as ContextType
  const currentPage = sublinks.find((i)=>i.pageId === pageId)
  console.log(currentPage)
  return (
    <div className='bg-white absolute top-14 left-0 w-full'>
      <h5>{currentPage?.page}</h5>
      <div className={` grid   ${currentPage?.links.length > 2 ? 'grid-cols-3' :'grid-cols-1'}`}>
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