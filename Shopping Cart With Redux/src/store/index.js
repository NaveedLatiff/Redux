import {combineReducers, createStore} from 'redux'
import cartReducer, { ADD_ITEM, ADD_QUANTITY, addItem, addQuantity, DECREASE_QUANTITY, decreaseQuantity, REM_ITEM, } from './cartReducer.js'
import prodReducer from './prodReducer.js'

let reducer=combineReducers({
    products:prodReducer,
    cart:cartReducer
})



export let store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__?.())

console.log(store.getState())
