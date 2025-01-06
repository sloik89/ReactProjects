import React from 'react';
type ItemsType = {
    id:number;
    title:string;
    price:number;
    desc:string;
    img:string;
    category:string;
}
const MenuItems = ({items}:{items:ItemsType[]}) => {
  return (
    <div className='grid gap-6 justify-center mt-5 md:grid-cols-3 '>
        {items.map(item=> {
            return (
                <article key={item.id} className='flex flex-col items-center bg-purple-300 rounded-lg'>            
                    <img className='max-w-[600px] w-full h-[200px] object-cover rounded-xl' src={item.img} alt="" />
                    <div className='px-6 py-2'>
                        <header className='flex justify-between mt-3 mb-3 items-center'>
                            <h5 className='text-lg font-bold capitalize'>{item.title}</h5>
                            <span className='block px-4 py-2 bg-orange-400 rounded-lg  text-white'>{item.price}</span>
                        </header>
                        <p>{item.desc}</p>
                    </div>
                </article>
            )
        })}
    </div>
  )
}

export default MenuItems