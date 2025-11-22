import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice'
import sideBarIconChange from './slices/sideBarIconSlice'
import Counter from "../components/Counter";



export const store = configureStore({
    reducer :{
        counter : counterReducer,
        sideBarIcon : sideBarIconChange,
        // user : useReducer 
    }
})









