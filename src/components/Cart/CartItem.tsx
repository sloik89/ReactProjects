import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { ContextProps, useGlobalContext } from './context';
type CartItem =  {
    id:string;
    title:string;
    price:string;
    amount:number;
    img:string;
}
const CartItem = ({img,title,price,id,amount}:CartItem) => {
     const {removeItem,decrease,increase} = useGlobalContext() as ContextProps
  return (
    <article className='flex items-center'>
        <img className='max-w-[150px]' src={img} alt="" />
        <div className='flex-1 pl-6'>
            <h3 className='font-bold text-lg'>{title}</h3>
            <h3>{price}</h3>
            <button onClick ={()=>removeItem(id)}>remove</button>
        </div>
        <div className='  flex flex-col gap-4 items-center'>
            <button className='text-2xl text-blue-500' onClick={()=>increase(id)} >
                <FaChevronUp/> 
            </button>
            <span className='text-black'>{amount}</span>
            <button className='text-2xl text-blue-500'>
            <FaChevronDown/>
            </button>
        </div>
    </article>
  )
}

export default CartItem