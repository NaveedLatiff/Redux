import { produce } from "immer"

let ADD_ITEM='cart/addItem'
let REMOVE_ITEM='cart/RemoveItem'
let DECREASE_QUANTITY='cart/decreaseQuantity'
let DEL_ALL='cart/delAll'

export function addItem(productId,productTitle,productImage,productPrice){
    return {type:ADD_ITEM,payload:{productId,quantity:1,productTitle,productImage,productPrice}}
}
export function removeItem(productId){
    return {type:REMOVE_ITEM,payload:{productId}}
}
export function decreaseQuantity(productId){
    return {type:DECREASE_QUANTITY,payload:{productId}}
}
export function deleteAll(){
    console.log("hii")
    return {type:DEL_ALL}
}

export default function cartReducer(state=[],action){
    return produce(state,(newState)=>{
        switch(action.type){
            case ADD_ITEM:{
                  let existingItem=newState.findIndex((x)=>x.productId==action.payload.productId)
                if(existingItem!==-1){
                    newState[existingItem].quantity+=1
                    
                }
                else{
                    newState.push({...action.payload})
                }
                break;
            }
            case REMOVE_ITEM:{
                  let existingItem=newState.findIndex((x)=>x.productId==action.payload.productId)
                  if(existingItem!==-1){newState.splice(existingItem,1)}
                  break
            }
            case DECREASE_QUANTITY:{
                  let existingItem=newState.findIndex((x)=>x.productId==action.payload.productId)
                  if(existingItem!==-1){
                    if(newState[existingItem].quantity>1){
                        newState[existingItem].quantity-=1
                    }
                    else{
                        newState.splice(existingItem,1)
                    }
                  }
                  
                break;
            }
            case DEL_ALL:{
                newState.length=0
                
                }

        }
           
    })
}


