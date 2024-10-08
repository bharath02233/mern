import { createSlice } from "@reduxjs/toolkit";
const initialState={count:0};

const counterSlice=createSlice({
name:"CounterSlice",
initialState,
reducers:{inc:(state,action)=>{state.count++}}

})
export const {inc}=counterSlice.actions;
const countReducer=counterSlice.reducer;
export default countReducer;
