import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Acordian from './components/Acordian/Acordian.tsx'
import BirthdayBuddy from './components/BirthdayBuddy/BirthdayBuddy.tsx'
import Cart from './components/Cart/App.tsx'
import ColorGenerator from './components/ColorGenerator/ColorGenerator.tsx'
import GrocceryBud from './components/GrocceryBud/GrocceryBud.tsx'
import Landing from './components/Landing/Landing.tsx'
import LoremGenerator from './components/LoremGenerator/LoremGenerator.tsx'
import MainPage from './components/MainPage/MainPage.tsx'
import Menu from './components/Menu/Menu.tsx'
import Navbar from './components/Navbar/Navbar.tsx'
import ReactSlick from './components/ReactSlickSlider/ReactSlick.tsx'
import Reviews from './components/Reviews/Reviews.tsx'
import Main from './components/Sidebar/Main.tsx'
import Slider from './components/Slider/Slider.tsx'
import StrapiProvider from './components/Strapi/StrapiProvider.tsx'
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
      },
      {
        path:'slickSlider',
        element:<ReactSlick/>
      },
      {
        path:'generator',
        element:<LoremGenerator/>
      },
      {
        path:'colorgenerator',
        element:<ColorGenerator/>
      },
      {
        path:'groccerybud',
        element:<GrocceryBud/>
      },
      {
        path:'navbar',
        element:<Navbar/>
      },
      {
        path:'sidebar',
        element:<Main/>
      },
      {
        path:'strapi',
        element:<StrapiProvider/>
      },
      {
        path:'cart',
        element:<Cart/>
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
