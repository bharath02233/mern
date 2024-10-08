import { configureStore } from "@reduxjs/toolkit";
import jsonApi from "../services/jsonapi";

const store=configureStore({
    reducer:{ [jsonApi.reducerPath]:jsonApi.reducer
},
middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(jsonApi.middleware),
})

export default store;