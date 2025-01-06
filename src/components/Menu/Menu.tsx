
import React, { useState } from 'react'

import data from './dataMenu'
import MenuItems from './MenuItems'
const Menu = () => {
    const [menu,setMenu] = useState(data)
    const handleFilters = (word:string) => {
        if(word=== 'all'){
            setMenu(data)
            return 
        }
        setMenu(data.filter(item=>item.category ===word))
        console.log(word)
    }
  return (
    <section>
        <div>
            <div className='flex flex-col items-center'>
                <h1 className='text-5xl text-center'>Our Menu</h1>
                <span className='w-[60px] h-[5px] bg-pink-300 block mt-4 mb-4'></span>
            </div>
            <nav className='flex justify-center'>
                <ul className='flex gap-5 '>
                    {
                        [...new Set(data.map(item=>item.category)),'all'].map(item=>{
                            return (
                                <li key={item}>
                                    <button onClick={()=>handleFilters(item)} className='capitalize text-xl bg-orange-300 rounded-lg px-2 py-2 hover:scale-110 transition'>
                                    {item}
                                    </button>
                                </li>
                            )
                        })
                        

                    }
                </ul>
            </nav>
        </div>
        <div className='min-h-[100vh]'>
                    <MenuItems items={menu}/>
        </div>
    </section>
  )
}

export default Menu