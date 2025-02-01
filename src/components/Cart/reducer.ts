 export type CartType = {
    id:string;
    title:string;
    price:string;
    amount:number;
    img:string;

}
 export type StateType = {
    loading:boolean;
    cart:Map<string,CartType>
}
type ActionType = {
    type:'CLEAR_CART' | 'REMOVE' | "LOADING" | 'INCREASE' | 'DECREASE';
    payload?:string;
}
 export const reducer = (state:StateType,action:ActionType) =>{
    if(action.type === 'CLEAR_CART'){
        return {...state,cart:new Map()}
        
    }
    if(action.type === 'REMOVE'){
       
        const tempCart = new Map(state.cart)
        tempCart.delete(action.payload as string )
        return {...state,cart:tempCart}
        console.log(action.payload)
    }
    if(action.type === 'INCREASE'){
        const tempCart = new Map(state.cart)
        const tempId = action.payload as string
        const newItem = tempCart.get(tempId) as CartType
        console.log(newItem)
        const itemToUpdate = {...newItem,amount:newItem.amount + 1}
        tempCart.set(tempId,itemToUpdate)
        return {...state,cart:tempCart}
    }
    if(action.type === 'DECREASE'){
        
    }
    return state
}