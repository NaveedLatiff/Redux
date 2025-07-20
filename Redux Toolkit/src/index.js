import prodReducer from './Store/productSlice.js'
import cartReducer from './Store/cartSlice.js'
import { configureStore } from '@reduxjs/toolkit'


export let store = configureStore({
    reducer: {
        products: prodReducer,
        cart: cartReducer

    }
})
