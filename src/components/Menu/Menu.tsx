import React from 'react'

const Menu = () => {
  return (
    <section>
        <div>
            <div className='flex flex-col items-center'>
                <h1 className='text-5xl text-center'>Our Menu</h1>
                <span className='w-[60px] h-[5px] bg-pink-300 block mt-4 mb-4'></span>
            </div>
            <nav>
                <ul className='flex gap-5'>
                    {

                        ['all','breakfast','lunch','shakes'].map(item=>{
                            return (
                                <li>
                                    <button className='capitalize text-xl bg-orange-300 rounded-lg px-2 py-2 hover:scale-110 transition'>
                                    {item}
                                    </button>
                                </li>
                            )
                        })

                    }
                </ul>
            </nav>
        </div>
        <div></div>
    </section>
  )
}

export default Menu