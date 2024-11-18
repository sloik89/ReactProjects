
import { useState } from 'react'
import SingleQuestion from './SingleQuestion'
import data from './acordian'
const Acordian = () => {
    const [questions,setQuestion] = useState(data)
    const [activeId,setActiveId] = useState<null | number>(null)
    const toogleQuestion = (id:number) =>{
        const newId = id === activeId ? null : id
        setActiveId(newId)
    }
  return (
    <div className='bg-white p-5 rounded w-[700px] grid gap-4 drop-shadow-xl'>
        <h2 className='text-center text-4xl tracking-wider font-semibold '> Questions</h2>
        {questions.map(item=>{
            return (
              <SingleQuestion key={item.id} {...item} activeId={activeId} toogleQuestion={toogleQuestion}/>
            )
        })}
    </div>
  )
}

export default Acordian