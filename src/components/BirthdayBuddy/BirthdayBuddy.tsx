
import { useState } from 'react'
import '../../components/Tours/Fetch'
import data from './data'

const BirthdayBuddy = () => {
  const [people,setPeople] = useState(data)
  console.log(people)
  return (
    <div className='bg-slate-50 rounded-xl  p-4 flex flex-col gap-5 drop-shadow-xl'>
       <h3 className='text-3xl capitalize tracking-wide text-center mb-3'>{people.length} birthdays today</h3>
      {people.map(person=>{
        return (
          <article key={person.id} className='flex gap-6 items-center'>
           <img className='rounded-full' src={person.image} alt="" />
           <div>
            <h4 className='text-2xl font-bold tracking-normal'>{person.name}</h4>
            <p className='text-slate-400 text-xl'> {person.age}</p>
           </div>
          </article>
        )
      })}
      <button onClick={() => {setPeople([])}} className='text-xl tracking-wide uppercase bg-purple-600 text-white rounded-2xl p-2 hover:bg-purple-400'>clear</button>
    </div>
  )
}

export default BirthdayBuddy