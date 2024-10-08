
import { createSlice } from "@reduxjs/toolkit";

const initialState={to:['hello','hrw']}
const todoSlice=createSlice({
   name:'todo',
   initialState,
   reducers:{add:(state,action)=>{state.to.push(action.payload)}}

})
export const {add}=todoSlice.actions;
const todoReducer=todoSlice.reducer;
export default todoReducer;