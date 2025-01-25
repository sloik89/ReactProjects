import React, { useRef, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import logo from '../../assets/logo.png'
import { links, social } from './data'
const temp ="transition-all h-0 overflow-hidden  ${showLinks ? 'h-[170px]' :''}`"
const Navbar = () => {
    const [showLinks,setShowLinks] = useState(false)
    const linksContainer = useRef<HTMLElement | null>(null)
    const ulContainer = useRef(null)
    const handleShow = () => {
        
        setShowLinks(!showLinks)
    }
   
   
  return (
    <nav className='border-2 border-red-500 w-[80vw] max-w-[1200px] '>
        <div className='justify-between md:flex md:items-center'>
            <div className='flex justify-between items-center px-4' >
                <img className='w-24' src={logo} alt="" />
                <button className='text-2xl text-pink-600 md:hidden' onClick={handleShow}><FaBars/></button>
            </div>
            <div className={`transition-all overflow-hidden md:h-auto ${showLinks ? 'h-[170px]':'h-0'}`} ref={linksContainer} >
                    <ul ref={ulContainer} className='md:flex' >
                        {links.map((item,idx)=>{
                            return(
                                <li className='' key={item.id}>
                                    <a className='text-xl capitalize tracking-wider py-2 pl-4 transition  duration-300 block ease-in   hover:bg-purple-400 ' href={item.url}>{item.text}</a>
                                </li>
                            )
                        })}
                    </ul>
            </div>
             <div className='hidden md:flex md:gap-2 pr-6'>
                        {
                            social.map((item)=>{
                                return(
                                    <a className='text-lg' href="">{item.icon}</a>
                                )
                            })
                        }
            </div>              
        </div>
    </nav>
  )
}

export default Navbar