import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/auth.service";

import { setupListeners } from "@reduxjs/toolkit/query";
import loginReducer from "../features/user/loginSlice";
import { productApi } from "../services/product.service";
import cartReducer from "../features/cart/CartSlice";
import { orderApi } from "../services/order.service";

const store=configureStore({
    reducer:{
        loginr:loginReducer,
        cart:cartReducer,
        [authApi.reducerPath]:authApi.reducer,
        [productApi.reducerPath]:productApi.reducer,
        [orderApi.reducerPath]:orderApi.reducer   
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(authApi.middleware,productApi.middleware,orderApi.middleware)
})

setupListeners(store.dispatch);  //important line
export default store;