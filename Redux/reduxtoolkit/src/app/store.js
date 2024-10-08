import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/toodo/todoSlice'
import countReducer from '../features/counter/counterSlice'
import countriesApi from '../services/countriesApi'

export default configureStore({
    reducer:{countr:countReducer,todor:todoReducer,
        [countriesApi.reducerPath]:countriesApi.reducer,
    },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(countriesApi.middleware),
   
})

