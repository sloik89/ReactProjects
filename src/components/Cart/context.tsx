import React, { createContext, ReactNode, useContext, useReducer, useState } from 'react';
import cartItems from './data';
import { CartType, reducer, StateType } from './reducer';
import { getTotals } from './utilis';
const CartContext = createContext<ContextProps | undefined>(undefined)
export type ContextProps = {
    clearCart:()=>void;
    removeItem:(id:string)=>void;
    decrease:(id:string)=>void;
    increase:(id:string)=>void;
    loading:boolean;
    cart:Map<string,CartType>;
    totalAmount:number;
    totalCost:number;
    
}
const initialState :StateType= {
    loading:false,
    cart:new Map(cartItems.map(item=>[item.id,item]))
} 
// ------
export const CartProvider = ({children}:{children: React.ReactNode}) => {
    const [state,dispatch] = useReducer(reducer,initialState)
    const {totalCost,totalAmount} = getTotals(state.cart)
    console.log(totalCost)
    const clearCart = () =>{
        dispatch({type:'CLEAR_CART'})
    }
    const removeItem = (id:string)=>{
        dispatch({type:'REMOVE',payload:id})
    }
    const increase = (id:string)=>{
        dispatch({type:'INCREASE',payload:id})
    }
    const decrease = (id:string)=>{
        dispatch({type:'DECREASE',payload:id})
    }
    return (
        <CartContext.Provider value={{...state,clearCart,removeItem,increase,decrease,totalAmount,totalCost}}>
            {children}
        </CartContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(CartContext)
}