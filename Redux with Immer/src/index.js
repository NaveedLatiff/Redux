import {combineReducers, createStore} from 'redux'
import prodReducer from './Store/productSlice.js'
import cartReducer, { addItem, decreaseQuantity, removeItem } from './Store/cartSlice.js'


let reducer=combineReducers({
    products:prodReducer,
    cart:cartReducer
    
})

export let store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__?.())
console.log(store.getState())



console.log(store.getState())
