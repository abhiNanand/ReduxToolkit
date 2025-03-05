import {createSlice}  from '@reduxjs/toolkit';

const initialState = { value:0, }

export const counterSlice = createSlice({
    name:'counterr',
    initialState,
    reducers:{
        increment:(state) => {
            state.value +=1;
        },
        decrement:(state)=>{
            
            state.value-=1;
            
        },
        incrementByAmount:(state,action)=>
        {
            state.value = state.value + action.payload
        },
    }
})


// Action creators are generated for each case reducer function
export const {increment,decrement,incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;


//console.log(actions)
 
        // increment:(state) => {
        //     state.value +=1;
        // },
        // incrementByAmount:(state,action)=>
        // {
        //     state.value = state.value + action.payload
        // },