import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartItems:[]
}

export const cartSlice=createSlice({
        name:'cartSlice',
        initialState, //the name is only initialState
        reducers:{
            addItem:(state,action)=>{
                 
                 console.log(action.payload);
                
                state.cartItems.push(action.payload);
            },
            incrementItem:(state,action)=>{
             
                state.cartItems.find((ob)=>{ if(ob.id==action.payload){ob.count++}}); //new point
             },
             clearCart:(state)=>{
                state.cartItems=[];
             }
        }
})

export const {addItem,incrementItem,clearCart}=cartSlice.actions;
const cartReducer=cartSlice.reducer;
export default cartReducer;