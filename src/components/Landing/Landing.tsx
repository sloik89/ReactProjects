import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/undraw.svg'
import { projects } from '../Landing/data'
const Landing = () => {
  return (
    <main>
        <header className='grid gap-6 md:grid-cols-2 items-center '>
            <div>
                <h1 className='text-5xl tracking-widest'>React Projects</h1>
                <p className='leading-7 text-lg mt-4 mb-4 tracking-wide'>Projects are the most practical way to learn any language, and <span className='font-bold tracking-widest text-xl underline underline-offset-2'>React</span>  is no exception. Soldify your knowledge of React by creating these cool projects </p>
            </div>
           <div>
                <img className='w-full block max-w-[400px]' src={img} alt="" />
           </div>
        </header>
        <div className='pt-[10rem]  '>
            <h2 className='text-5xl tracking-widest text-center'>Course Projects</h2>
            <div className='grid md:grid-cols-3 gap-6 mt-8   '>
                {projects.map((item)=>{
                    return (
                        <Link key={item.title} to={item.link} className=' transition ease-out hover:scale-105 border-2 border-purple-500 rounded-lg'>
                            <div className=' border-teal-600 rounded-lg '>
                                <img className='w-full h-[200px] object-cover block rounded-lg' src={item.image} alt="" />
                                <h3 className='text-center text-2xl p-2 bg-pink-100'>{item.title}</h3>
                            </div>
                        </Link>
                    )
                })}
            </div>
                
        </div>
       
        
    </main>
  )
}

export default Landing