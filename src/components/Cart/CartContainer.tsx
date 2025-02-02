import React from 'react'
import CartItem from './CartItem'
import { ContextProps, useGlobalContext } from './context'
import cartItems from './data'

const CartContainer = () => {
    const {cart,clearCart,removeItem,totalCost} = useGlobalContext() as ContextProps
    
    const cartArray = Array.from(cart.entries())
    const testMap = new Map<string | number,string>([['20','sss'],[51,'xxxx'],[2222,'sssss']])
 
    if(cartArray.length === 0){
        return <section>
            <header>
                <h2>your bag</h2>
                <h4>currently empty</h4>
            </header>

        </section>
    }
  return (
    <section className=' '>
        <header>
            <h2 className='text-4xl uppercase font-semibold tracking-wider text-center'>your bag</h2>
        </header>
        <div className='flex flex-col gap-5'>
            {cartArray.map(elem=>{
                const [id,item] = elem
                return(
                    <CartItem key={id} {...item}/>
                )
            })}
        </div>
        <footer className='mt-6 pb-10'>
            <hr className='border-2 border-pink-300'/>
            <div className='flex flex-col gap-4 items-center mt-5'>
                <h5 className='capitalize font-bold text-2xl'>
                    total:<span className='text-3xl tracking-wider pl-3'>{`${totalCost.toFixed(2)}$`}</span>
                </h5>
                <button onClick={clearCart} className='capitalize text-white tracking-widest bg-purple-500 rounded-md px-2 py-1'>
                    clear cart
                </button>
            </div>
        </footer>
    </section>
  )
}

export default CartContainer