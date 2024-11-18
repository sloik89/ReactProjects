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
            <div className='grid grid-cols-3 gap-6 mt-8   '>
                {projects.map((item)=>{
                    return (
                        <Link to={item.link} className='bg-slate-200 transition ease-out hover:scale-105'>
                            <div className='bg-slate-200 border border-teal-600 rounded-lg'>
                                <img className='w-full h-[250px]  object-cover block rounded-lg' src={item.image} alt="" />
                                <h3 className='text-center text-2xl p-2'>{item.title}</h3>
                            </div>
                        </Link>
                    )
                })}
            </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa distinctio sapiente unde. Facilis officia, quasi veritatis nemo obcaecati suscipit deserunt quae ad unde similique, modi tempora aut ipsum. Placeat, soluta!gggggggggggggggggggggggggggggggggggggg</p>
        </div>
       
        
    </main>
  )
}

export default Landing