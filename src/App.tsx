import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BirthdayBuddy from './components/BirthdayBuddy/BirthdayBuddy.tsx'
import Landing from './components/Landing/Landing.tsx'
import MainPage from './components/MainPage/MainPage.tsx'
import Reviews from './components/Reviews/Reviews.tsx'
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
