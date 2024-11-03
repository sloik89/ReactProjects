import React, { useEffect, useState } from 'react'
import useFetchProjects, { type Projects } from './Fetch'
// space id 87og6nphvq4f
//  J780m9YoTjiK2dAjkEdOslFFr2HJ3_bkqgtUsfNsflk
const Tours = () => {
  const {loading,projects}= useFetchProjects()
  const [tours,setTours] = useState<Projects[]>([])
  const [showDesc,setShowDesc] = useState<string | null>(null)
  console.log(tours)
  useEffect(()=>{
    if(!loading){
      setTours(projects)
    }
  },[loading])
  
  const handleTour =(id:string) =>{
    setTours(tours.filter(item=>item.id!==id))
    console.log(id)
  }
  const refreshTours = () => {
    setTours(projects)
  }
  const handleShowDesc = (id:string) => {
    if(id === showDesc) {
      console.log('jestem')
      setShowDesc(null)
      return
    }
    console.log(showDesc)
    setShowDesc(id)
  }
  return (
    <div className=''>
      {loading ? (<div >
        <h1 className='text-4xl font-bold'>Loading...</h1>
      </div>) : tours.length === 0 ? (<div>
        <h3>No tours</h3>
        <button onClick={refreshTours}>refresh</button>
      </div>) : (<div className='mt-4'>
        <div className='mb-5'>
        <h1 className='text-3xl capitalize text-center mb-4 '>Our Tours</h1>
        <div className='w-16 h-1 bg-teal-600 mx-auto mt-2'></div>
        </div>
          <div className='grid gap-y-6 gap-x-6 md:grid-cols-2 xl:grid-cols-3'>
          {tours.map((tour) => {
          return (
            <div key={tour.id} className='relative flex flex-col items-center'>
              <h2 className='capitalize font-bold text-xl text-center mb-2'>{tour.title}</h2>
              <img className='h-[200px] w-[350px] object-cover' src={tour.img} alt="" />
              <p className='max-w-[300px] mx-auto text-md font-medium mt-2 relative'>{ showDesc === tour.id ? tour.description : tour.description.slice(0,100)}
                <button className='text-indigo-800 text-3xl absolute bottom-0 right-5 ' onClick={()=>handleShowDesc(tour.id)}>...</button>
              </p>

              <p className=' text-white flex items-center justify-center  font-bold absolute top-8 right-0 w-20 h-8 rounded-lg bg-teal-400'>{((Math.random() * 200) + 100).toFixed(1)} $</p>
              <button onClick={()=>handleTour(tour.id)} className='transition duration-450 capitalize border-2 rounded-xl border-indigo-500 w-[50%] mt-4 hover:border-teal-500'>remove</button>
            </div>
          )
        })}
          </div>
       
      </div>)}
    </div>
  )
}

export default Tours