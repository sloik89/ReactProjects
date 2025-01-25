import { nanoid } from 'nanoid';
import React, { FormHTMLAttributes, ReactElement, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

type listState = {
    id:string
    name:string;
    completed:boolean;
}
const setLocalStorage = (items:{id:string;name:string;completed:boolean}[]) =>{   
    localStorage.setItem('list',JSON.stringify(items))   
}
const getLocalStorage = ()=>{
    
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list') as any) : []

}
const GrocceryBud = () => {
const [list,setList] = useState<listState[]>(getLocalStorage())
const handleSubmit = (e:React.SyntheticEvent<HTMLFormElement> ) =>{
    e.preventDefault()
    
    const data = new FormData(e.target as any)
    const formText = data.get('text')?.toString()
    console.log(formText)
    if (!formText) return
    console.log(formText)
    const newItems = [...list,{name:formText,completed:true,id:nanoid()}]
    setList(newItems)
    const form = e.target as any
    setLocalStorage(newItems)
    toast.success('Item added')
    form.reset()
  
}
const removeItem = (id:string) =>{
    const newList = list.filter(item=>item.id !==id)
    setList(newList)
    setLocalStorage(newList)
    toast.success('Item removed')
    console.log(id)
}
const handleChange = (id:string) =>{
    console.log(id)
    const newList = list.map(item=>{
        if(item.id === id){
            return {...item,completed:!item.completed}
        } else {
            return item
        }
    })
    setList(newList)
    setLocalStorage(newList)
    toast.success('Item edited')
    console.log(newList)
}
  return (
    <div>
        <form className='bg-white p-4 rounded-lg shadow-lg' onSubmit={handleSubmit}>
            <h4 className='text-3xl text-center capitalize tracking-wider mb-6'>grocery bud</h4>
            <div >
                <input type="text" name='text' className='bg-indigo-100 rounded-lg text-md py-1 px-1 min-w-[250px]'  />
                <button type='submit' className='bg-indigo-500 p-1 text-white rounded-md capitalize ml-2'>add item</button>
            </div>
        </form>
        <div>
            <ul>
            {list.map((item,idx) => {
                return (
                    <li key={item.id} className='border-2 flex justify-between relative'>
                        <input type='checkbox' onChange={()=>handleChange(item.id)} checked={!item.completed} />
                        <p className={`text-lg ${!item.completed && 'line-through'}`}>
                        {item.name}
                        </p>
                        <button onClick={()=>removeItem(item.id)}>delete</button>
                        {!item.completed && (<div className='w-[100%] h-[2px] bg-red-500 absolute top-4 left-0'></div>)}
                        
                    </li>
                )
            })}

            </ul>
           
        </div>
        <ToastContainer/>
    </div>
  )
}

export default GrocceryBud