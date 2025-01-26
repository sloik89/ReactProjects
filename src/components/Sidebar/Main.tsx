import React from 'react'
import Home from './Home'
import Modal from './Modal'
import Sidebar from './Sidebar'
import { ThemeProvider } from './context'

const Main = () => {
   
  return (
    <ThemeProvider>
    <div>
        <Home/>
       
    </div>
    </ThemeProvider>
  )
}

export default Main