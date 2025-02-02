import { CartType } from './reducer'
export const getTotals =(cart:Map<string,CartType>) =>{
    console.log(cart)
    let totalAmount = 0
    let totalCost = 0
    for(let {amount,price} of cart.values()){
        totalAmount += amount
        totalCost += amount * Number(price)
    }
    return {totalAmount,totalCost}
}