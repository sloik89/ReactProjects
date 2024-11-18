import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const SingleQuestion = ({id,info,title,activeId,toogleQuestion}:{id:number,info:string;title:string,activeId:number| null,toogleQuestion:(id:number)=>void}) => {
    const isActive = id === activeId
    // const [show,setShow] = useState(false)
    console.log('4')
  return (
    <div key={id} className='border drop-shadow-2xl p-2'>
                    <h3 className='flex justify-between items-center text-2xl'>{title} <button onClick={()=>toogleQuestion(id)} className='cursor-pointer text-xl '>  {isActive ? <AiOutlineMinus/> : <AiOutlinePlus/>   }  </button> </h3>
                    { isActive &&<p className='text-lg mt-3'>{info}</p>}
     </div>
  )
}

export default SingleQuestion