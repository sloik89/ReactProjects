import React from 'react'
import { toast } from 'react-toastify'
import Values from 'values.js'
import { ColorsType } from './ColorGenerator'
const Colors = ({colors}:{colors:ColorsType[]}) => {
  return (
    <div className='flex flex-wrap gap-2'>
        {colors.map((color,idx)=>{
            const {rgb,hex,weight} = color
            console.log(rgb)
            const copyToClipboard = async(hex:string) =>{
                if(navigator.clipboard){
                    console.log(navigator.clipboard)
                    await navigator.clipboard.writeText(`#${hex}`)
                    toast.success('color copied')
                } else {
                    toast.error('no clipboard')
                }
            }
            return(
                <div className='w-[100px] h-[100px] cursor-pointer' key={idx} style={{backgroundColor:`rgb(${rgb.toString()})`}} onClick={()=>copyToClipboard(hex)}>
                    <p>{hex}</p>
                    <p className={`${idx >10 ? 'text-white' : 'text-black'}`}>{weight}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Colors