import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoggedIn:window.localStorage.getItem("token")?true:false, 
    role:window.localStorage.getItem('role') || null,
    username:window.localStorage.getItem('username'),
    validUser:false
}
export const loginSlice=createSlice({
    name:'loginSlice',
    initialState,
    reducers:{
        setUser:(state,action)=>{

         state.isLoggedIn=true;
    
         state.role=action.payload.role;
        state.username=action.payload.username;  //doubt
        
        },
        logout:(state)=>{
            state.isLoggedIn=false;
            state.username='';
            state.role='';
            state.validUser=false;
            window.localStorage.clear();
        },
        setValidUser:(state)=>{
          state.validUser=true;
         
        }
         
    }

});
export const {setUser,logout,setValidUser}=loginSlice.actions;
const loginReducer=loginSlice.reducer;
export default loginReducer;
