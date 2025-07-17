import { productsList  } from "./data.js";
import {createStore} from 'redux'


let ADD_ITEM='cart/addItem'
let REM_ITEM='cart/removeItem'
let ADD_QUANTITY='cart/addQuantity'
let DECREASE_QUANTITY='cart/decreaseQuantity'

let initialeState={
    products:productsList,
    cart:[]
}

function reducer(state=initialeState,action){
    switch(action.type){
        case ADD_ITEM:
            return {...state,cart:[...state.cart,action.payload]}
        case REM_ITEM:
            return {...state,cart:state.cart.filter((x)=> x.productId!==action.payload.productId )}
        case ADD_QUANTITY:
            return {...state,cart:state.cart.map((x)=>{
               return x.productId===action.payload.productId?{...x,quantity:x.quantity+1}:x
            })}
        case DECREASE_QUANTITY:
            
            return {...state,cart:state.cart.map((x)=>{
               return x.productId===action.payload.productId ?{...x,quantity:x.quantity-1}:x
            }).filter((x)=>x.quantity>0)
        }    
            default:    
            return state
    }
    
}

let store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__?.())

store.dispatch({type:ADD_ITEM,payload:{productId:1,quantity:1}})
store.dispatch({type:ADD_ITEM,payload:{productId:2,quantity:1}})
store.dispatch({type:ADD_ITEM,payload:{productId:3,quantity:1}})
store.dispatch({type:REM_ITEM,payload:{productId:2}})
// store.dispatch({type:REM_ITEM,payload:{productId:1}})
store.dispatch({type:ADD_QUANTITY,payload:{productId:3}})
store.dispatch({type:ADD_QUANTITY,payload:{productId:3}})
store.dispatch({type:ADD_QUANTITY,payload:{productId:3}})
store.dispatch({type:ADD_QUANTITY,payload:{productId:1}})
store.dispatch({type:DECREASE_QUANTITY,payload:{productId:1}})


console.log(store.getState())

