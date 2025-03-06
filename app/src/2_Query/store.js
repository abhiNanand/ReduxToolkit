import {configureStore} from '@reduxjs/toolkit';
import {apiSlice} from './apiSlice'; //Importing api slice


export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,//adding api reducer to the store.
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware), //adding rtk query to middleware
});