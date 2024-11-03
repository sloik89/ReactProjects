import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/undraw.svg'
const Landing = () => {
  return (
    <main>
        <header className='grid gap-6 md:grid-cols-2 items-center'>
            <div>
                <h1 className='text-5xl tracking-widest'>React Projects</h1>
                <p className='leading-7 text-lg mt-4 mb-4 tracking-wide'>Projects are the most practical way to learn any language, and <span className='font-bold tracking-widest text-xl underline underline-offset-2'>React</span>  is no exception. Soldify your knowledge of React by creating these cool projects </p>
            </div>
           <div>
                <img className='w-full block max-w-[400px]' src={img} alt="" />
           </div>
        </header>
        <div className='pt-[10rem]'>
            <h2 className='text-5xl tracking-widest text-center'>Course Projects</h2>
      

        </div>
       
        
    </main>
  )
}

export default Landing