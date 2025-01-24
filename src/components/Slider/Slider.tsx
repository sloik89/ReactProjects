import React, { useState } from 'react'
import { FaChevronCircleLeft, FaChevronCircleRight, FaQuoteRight } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { longList, shortList } from './data'
const nextSlide = 'translate-x-[100%]'
const Slider = () => {
    const [list,seList] = useState(longList)
    const [currentPerson,setCurrentPerson] = useState(0)
    const handlePerson = (info:string) => {
        if(info === 'prev'){
            setCurrentPerson((prevState) => {
                let newState = prevState === 0 ? longList.length - 1 : prevState - 1
                return newState
                 
            })
        } else {
            setCurrentPerson((prevState) => {
                let newState = prevState >= longList.length - 1 ? 0 : prevState + 1
                return newState

            })
        }
        console.log(info)

    }
  return (
    <section className='relative'>
        <div className='mx-auto w-[80vw] max-w-[800px] relative h-[450px] overflow-hidden'>
        {list.map((person,idx)=>{
            return <article key={person.id} className='absolute top-0 left-0 w-full h-full grid gap-3 justify-center items-center justify-items-center duration-200 ease-in ' style={{transform:`translateX(${100 * (idx - currentPerson)}%)`,
            opacity:`${idx === currentPerson ? 1 : 0}`,
            visibility:`${idx === currentPerson ? 'visible' : 'hidden'}`}}>
                <div className='relative w-fit'>

                <img className=' block rounded-full w-[150px] h-[150px]  object-cover border-2 border-pink-300 mb-[1rem]' src={person.image} alt="" />
                <span className='absolute h-6 w-6 rounded-full bg-red-500 border-2 border-gray-500 top-0 right-0'></span>
                </div>
                <h5 className='font-bold capitalize text-2xl text-violet-600'>{person.name}</h5>
                <p className='capitalize text-lg font-bold'>{person.title}</p>
                <p className='max-w-80 leading-8 text-lg text-slate-600'>{person.quote}</p>
                <FaQuoteRight className='text-4xl text-pink-600'/>
            </article>
        })}
        </div>
        <button type='button' className='absolute top-[50%] left-0 text-2xl  duration-300 hover:text-3xl' onClick={()=>handlePerson('prev')}> 
            <FaChevronCircleLeft/>
        </button>
        <button type='button' className='absolute top-[50%] right-0 text-2xl duration-300 hover:text-3xl' onClick={()=>handlePerson('next')}> 
            <FaChevronCircleRight/>
        </button>
    </section>
  )
}

export default Slider