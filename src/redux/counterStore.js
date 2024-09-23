import { configureStore } from "@reduxjs/toolkit"
import counterSlice  from "./counterSlice"
// react appl provide cheyanm so we stored a variable and 
// it export and configutmethod inside data is object type
const counterStore =configureStore({
    reducer:{
       counterReducer : counterSlice
    //    counterslice  means export akiyah conterslice.reducer(reducer)
    }
})

export default counterStore