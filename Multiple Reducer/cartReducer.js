export let ADD_ITEM='cart/addItem'
export let REM_ITEM='cart/removeItem'
export let ADD_QUANTITY='cart/addQuantity'
export let DECREASE_QUANTITY='cart/decreaseQuantity'

// Action Creators
export function addItem(productId){
    return {type:ADD_ITEM,payload:{productId,quantity:1}}
}

export function removeItem(productId){
    return {type:REM_ITEM,payload:{productId}}
}

export function addQuantity(productId){
    return {type:ADD_QUANTITY,payload:{productId,quantity:1}}
}
export function decreaseQuantity(productId){
    return {type:DECREASE_QUANTITY,payload:{productId,quantity:1}}
}

export default function cartReducer(state=[],action){
    switch(action.type){
        case ADD_ITEM:
            return [...state,action.payload]
        case REM_ITEM:
            return state.filter((x)=> x.productId!==action.payload.productId )
        case ADD_QUANTITY:
            return state.map((x)=>{
               return x.productId===action.payload.productId?{...x,quantity:x.quantity+1}:x
            })
        case DECREASE_QUANTITY:
            return state.map((x)=>{
               return x.productId===action.payload.productId ?{...x,quantity:x.quantity-1}:x
            }).filter((x)=>x.quantity>0)
            
            default:    
            return state
    }
        }

