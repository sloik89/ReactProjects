
import { useEffect, useState } from 'react';
import { MdPlayArrow } from "react-icons/md";
import useFetchProjects, { Projects } from './TabsFetch';

const Tabs = () => {
    const {loading,projects}= useFetchProjects()
    const [tasks,setTasks] = useState<Projects[] >([])
    const [index,setIndex] = useState(0)
    console.log(projects)
    
    useEffect(()=>{
        if(!loading){

            setTasks(projects)
        }
    },[loading])

    if(loading){
        return <h1>Loading...</h1>
    }
   
   
  return (
    <section className='grid md:grid-cols-2  '>
        <div className='flex gap-x-5 justify-center mb-6 md:flex-col '>
            {tasks?.map((item,idx)=>{
                return(
                    <button className={`text-xl p-2 font-bold transition-all hover:text-[22px] ${idx === index ? 'text-[22px]' : ''} `} onClick={()=>setIndex(idx)} key={item.id} >
                        {item.company}
                    </button>
                )
            })}
        </div>
        <div>
            <h1 className='text-4xl font-bold mb-2'>  {tasks[index]?.title} </h1>
            <span className='inline-block px-3 py-1 bg-slate-400 uppercase tracking-wider'>{tasks[index]?.company}</span>
            <h3 className='text-slate-500 text-xl mt-2 mb-6'>{ new Date(tasks[index]?.dates).toLocaleDateString() } -  Present</h3>
            <ul className='flex flex-col gap-4'>
                <li className='flex items-center'> <span className='text-2xl'><MdPlayArrow/> </span> {tasks[index]?.tempDescription.substring(Math.floor(Math.random() * 10),55)}</li>
                <li  className='flex items-center gap-1'> <span className='text-2xl'><MdPlayArrow /> </span> {tasks[index]?.tempDescription.substring(70,255)}</li>
                <li  className='flex items-center gap-1'> <span className='text-2xl'><MdPlayArrow /> </span> {tasks[index]?.tempDescription.substring(100,190)}</li>
            </ul>
            
        </div>
        </section>
  )
}

export default Tabs