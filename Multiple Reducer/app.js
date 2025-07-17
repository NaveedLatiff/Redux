import {combineReducers, createStore} from 'redux'
import cartReducer, { ADD_ITEM, ADD_QUANTITY, addItem, addQuantity, DECREASE_QUANTITY, decreaseQuantity, REM_ITEM, removeItem } from './cartReducer.js'
import prodReducer from './prodReducer.js'

let reducer=combineReducers({
    products:prodReducer,
    cart:cartReducer
})



let store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__?.())

store.dispatch({type:ADD_ITEM,payload:{productId:1,quantity:1}})
store.dispatch({type:ADD_ITEM,payload:{productId:2,quantity:1}})
store.dispatch({type:ADD_ITEM,payload:{productId:3,quantity:1}})
store.dispatch({type:REM_ITEM,payload:{productId:2}})
store.dispatch({type:REM_ITEM,payload:{productId:1}})
store.dispatch({type:ADD_QUANTITY,payload:{productId:3}})
store.dispatch({type:ADD_QUANTITY,payload:{productId:3}})
store.dispatch({type:ADD_QUANTITY,payload:{productId:3}})
store.dispatch({type:ADD_ITEM,payload:{productId:1,quantity:1}})
store.dispatch({type:ADD_QUANTITY,payload:{productId:1}})
store.dispatch({type:ADD_QUANTITY,payload:{productId:1}})

store.dispatch(addItem(17))
store.dispatch(removeItem(1))
store.dispatch(addQuantity(17))
store.dispatch(addQuantity(17))
store.dispatch(decreaseQuantity(3))
store.dispatch(decreaseQuantity(3))
store.dispatch(decreaseQuantity(3))

console.log(store.getState())
