import React, { useState } from 'react'
import { text } from './data'
const LoremGenerator = () => {
    const [count,setCount] = useState(1)
    const [para,setPara] = useState<string[]>([])
    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault()
        console.log(count)
        setPara(text.slice(0,count))
    }
    console.log(para)
  return (
    <section>
        <h2 className='text-2xl font-bold uppercase max-w-[300px]'>Tired of boring lorem ipsum?</h2>
        <form onSubmit={handleSubmit}>
            <label className='text-2xl ' htmlFor="number">Paragraphs:</label>
            <input className='p-1 rounded-lg font-bold text-xl bg-purple-300 ml-4' type="number" min='1' max='8' step='1' value={count} onChange={(e)=>setCount(parseInt( e.target.value))}/>
            <button type='submit' className='bg-green-600 p-2 rounded-lg font-bold ml-1 text-white hover:bg-green-400' >Generate</button>
        </form>
        <div>
            {para.map((item,idx)=>{
                return (
                    <p className='mb-3' key={idx}>{item}</p>
                )
            })}
        </div>
    </section>
  )
}
export default LoremGenerator