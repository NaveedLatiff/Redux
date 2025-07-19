import { createStore } from 'redux'
import {productsList} from './data.js'

export default function prodReducer(state=productsList){
    return state
}

