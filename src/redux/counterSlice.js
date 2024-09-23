import { createSlice } from "@reduxjs/toolkit";

// return cheyunah kondu oru variable value store cheyunnnu
// ie counterSlice(same filename koduthu enne ullu)
const counterSlice =createSlice({
// createSlice predefined aanu.atu nammk return actions and reducer simply
name:'counterSlice',
initialState :{count:0},
// initialstate(state) create akunbol immutable venam so object here used
reducers:{
    // reducers(actions perform cheyaan) used counterslice reducer used configurestore
    // actions define,first argument eppozhum initial state value ayirikum
    // increement is key assign fn 
    increment:(state)=>{
        // state il varunna value initialstate aanu
        state.count++;
    },
    decrement:(state)=>{
        state.count--;
    },
    reset :(state)=>{
        return {...state,count:0}
    },
    // action for handleincreement amount
    incrementByAmount:(state,valueFromComponent)=>{
        state.count += +valueFromComponent.payload
    }
}
})
export const {increment,decrement,reset,incrementByAmount}=counterSlice.actions
export default counterSlice.reducer