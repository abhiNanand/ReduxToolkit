import {configureStore} from '@reduxjs/toolkit';
import  counterReducer from './CounterSlice.js';
 
 
export const store=configureStore({
    reducer:{
        coounter:counterReducer,
    },
});

 
 
 
 