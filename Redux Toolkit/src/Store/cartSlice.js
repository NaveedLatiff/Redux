import { createSlice } from "@reduxjs/toolkit"

let slice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addItem(state,action){
                 let existingItem=state.findIndex((x)=>x.id==action.payload.id)
                if(existingItem!==-1){
                    state[existingItem].quantity+=1
                    
                }
                else{
                    state.push({...action.payload})
                }
        },
        removeItem(state,action){
                 let existingItem=state.findIndex((x)=>x.id==action.payload.id)
                  if(existingItem!==-1){state.splice(existingItem,1)}
        },
        decreaseQuantity(state,action){
                  let existingItem=state.findIndex((x)=>x.id==action.payload.id)
                  if(existingItem!==-1){
                    if(state[existingItem].quantity>1){
                        state[existingItem].quantity-=1
                    }
                    else{
                        state.splice(existingItem,1)
                    }
                  }
            
        },
        deleteAll(state){
                state.length=0
        }
    }
})
export const {addItem,removeItem,decreaseQuantity,deleteAll}=slice.actions
export default slice.reducer

