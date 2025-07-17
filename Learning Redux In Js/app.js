import {createStore} from 'redux'
let span=document.querySelector("span")
let intialeState={
    post:0,
    name:"Naveed",
    age:19
}
let increment='post/increment'
let decrement='post/decrement'
let increaseBy='post/increaseBy'
let decreaseBy='post/decreaseBy'


function reducer(state=intialeState,action){
    if(action.type==increment){
        return {...state,post:state.post+1}
    }else if(action.type==decrement){
        return {...state,post:state.post-1}
    }else if(action.type==increaseBy){
        return {...state,post:state.post+action.payload}
    }else if(action.type==decreaseBy){
        return {...state,post:state.post-action.payload}
    }
    return state
}



const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__?.())

// Whenever the state change subscribe will call
let unsubscribe=store.subscribe(()=>{
    // It will print the state
    console.log(store.getState())
    span.innerText=store.getState().post
})
    span.innerText=store.getState().post

console.log(store)
// In this we give the action
store.dispatch({type:increment})
store.dispatch({type:increaseBy,payload:2})
// Suscribe will stop when we call the unsubscribe //
// unsubscribe()
store.dispatch({type:increment})





// console.log(state)
// state=reducer(state,{type:'count/increment'})
// console.log(state)
// state=reducer(state,{type:'count/decrement'})
// console.log(state)
// state=reducer(state,{type:'count/decrementBy',payload:3})
// console.log(state)
// state=reducer(state,{type:'count/incrementBy',payload:10})
// console.log(state)