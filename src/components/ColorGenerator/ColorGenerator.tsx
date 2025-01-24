import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Values from 'values.js'
import Colors from './Colors'
import FormColor from './FormColor'
export type ColorsType = {
    alpha:number;
    rgb:Number[];
    type:string;
    weight:number;
    hex:string
}
const ColorGenerator = () => {
const [colors,setColors] = useState<ColorsType[]>(new Values('#f15025').all(10))
console.log(colors)
const addColor =(color:string) =>{
    try{
        const newColor = new Values(color).all(10)
        setColors(new Values(color).all(10))
    }
    catch(err:any){
        console.log(err)
        toast.error(err.message)
    }
    

}
  return (
    <div>
        <FormColor addColor={addColor}/>
        <Colors colors = {colors} />
        <ToastContainer/>
     </div>
  )
}

export default ColorGenerator