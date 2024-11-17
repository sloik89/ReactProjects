
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { reviews } from './data'

const Reviews = () => {
    const [index,setIndex] = useState(0)
    const {id,image,text,name,job} = reviews[index]
    const handleClick = (flag:string)=>{  
        if(flag === 'prev'){
            console.log(flag)
            setIndex((prev)=>{
                const tempIndex = prev <= 0 ? reviews.length - 1 :prev - 1
                console.log(tempIndex)
                return tempIndex
            })
        } else if(flag === 'next'){
            setIndex((prev)=>{
                const tempIndex = prev >= reviews.length -1 ? 0  :prev + 1
                return tempIndex
            })
            console.log(flag)
        }else if(flag === 'random'){
            setIndex(Math.floor(Math.random() * reviews.length ))
        }
    }
  return (
    <div>
        <article className='flex flex-col items-center relative '>
            <div className='relative  w-[200px] image-container'>
                <img className='rounded-full  h-[200px] w-[200px] ' src={image} alt={name} />
                <div className='text-violet-700 bg-pink-400 flex items-center justify-center absolute top-0 right-4  rounded-full w-10 h-10 '><FaQuoteRight/></div>
            </div>
            <div className='flex flex-col gap-2 items-center'>
                <h3 className='text-2xl font-bold capitalize mt-2'>{name}</h3>
                <h4 className='uppercase text-lg text-blue-600'>{job}</h4>
                <p className='max-w-[250px] text-center'>{text}</p>
            </div>
            <button onClick={()=>handleClick('prev')} className='absolute text-2xl bottom-[50%] text-violet-600  left-[-100px] hover:scale-110'><FaChevronLeft/></button>
            <button onClick={()=>handleClick('next')} className='absolute text-2xl bottom-[50%] text-violet-600  hover:scale-110  right-[-100px]'><FaChevronRight/></button>
            <button onClick={()=>handleClick('random')} className='bg-purple-600 text-white p-2 rounded-xl capitalize mt-4'>Random user</button>
        </article>
        
    </div>
  )
}

export default Reviews