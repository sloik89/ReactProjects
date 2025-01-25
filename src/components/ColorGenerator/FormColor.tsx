import React, { useState } from 'react'
type FormProps = {
    addColor:(color:string)=>void
}
const FormColor = ({addColor}:FormProps) => {
    const [color,setColor] = useState('')
    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault()
        
        addColor(color)
    }
  return (
    <div>
        <h4 className='text-3xl tracking-wider capitalize mb-3'>color generator</h4>
        <form className='mb-6' onSubmit={handleSubmit} >
            <input type="color" placeholder='#f15025' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setColor(e.target.value)} value={color} />
            <input type="text" placeholder='#f15025' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setColor(e.target.value)} value={color} />
            <button className='bg-violet-600 p-1 tracking-wide rounded-lg capitalize text-white text-xl ml-2 hover:bg-violet-500' >submit</button>
        </form>
    </div>
  )
}

export default FormColor