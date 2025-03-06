import {configureStore} from '@reduxjs/toolkit';
import  counterReducer from './CounterSlice.js';
 
 
export const store=configureStore({
    reducer:{
        coounter:counterReducer,
    },
});

 
 
 
// Acha, toh tum Redux Toolkit (@reduxjs/toolkit) use kar rahe ho, jisme hum slice banate hain instead of manually writing reducers. Tumhara question hai ki reducer keyword ka role kya hai aur jab hum reducer function bana hi nahi rahe, toh ye reducer kaha se aa raha hai? Samjhata hoon.

// 1. reducer Keyword Kya Hai?
// Jab hum configureStore ka use karte hain Redux Toolkit me, toh hume reducers ka ek object dena padta hai. Is object me hum alag-alag slices ke reducers ko combine karte hain.