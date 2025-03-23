import { createSlice } from "@reduxjs/toolkit";

let CartSlice=createSlice({
    name:"cart",
    initialState:{
        cartitem:[]
    },
    reducers:{
      additem:(state,action)=>{
        state.cartitem.push(action.payload)
      },
      
      clearcart:(state)=>{
        state.cartitem.length=0
      }
    }
})

export default CartSlice.reducer
export const {additem,clearcart}=CartSlice.actions