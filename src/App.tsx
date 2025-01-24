import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Acordian from './components/Acordian/Acordian.tsx'
import BirthdayBuddy from './components/BirthdayBuddy/BirthdayBuddy.tsx'
import Landing from './components/Landing/Landing.tsx'
import MainPage from './components/MainPage/MainPage.tsx'
import Menu from './components/Menu/Menu.tsx'
import Reviews from './components/Reviews/Reviews.tsx'
import Slider from './components/Slider/Slider.tsx'
import Tabs from './components/Tabs/Tabs.tsx'
import Tours from './components/Tours/Tours.tsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<MainPage/>,
    children:[
      {
        index:true,
        element:<Landing/>
      },
      {
        path:'reviews',
        element:<Reviews/>
      },
      {
        path:'birthBuddy',
        element:<BirthdayBuddy/>
      },
      {
        path:'tours',
        element:<Tours/>
      },
      {
        path:'acordian',
        element:<Acordian/>
      },
      {
        path:'menu',
        element:<Menu/>
      },
      {
        path:'tabs',
        element:<Tabs/>
      },
      {
        path:'slider',
        element:<Slider/>
      }
    ]
  }
]

)
function App() {
 
  return (
    <div className='align-element '>

      {/* <BirthdayBuddy/> */}
      {/* <Tours/> */}
      {/* <Reviews/> */}
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
