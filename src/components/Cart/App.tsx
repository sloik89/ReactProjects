import React from 'react'
import CartContainer from './CartContainer'
import Navbar from './Navbar'
import { CartProvider } from './context'
const App = () => {
  return (

    <CartProvider>
        <main className=' w-[80vw] max-w-[1100px]'>
            <Navbar/>
            <CartContainer/>
        </main>
    </CartProvider>
  )
}

export default App