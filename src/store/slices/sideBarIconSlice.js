import { createSlice } from "@reduxjs/toolkit";
import { Value } from "sass";



const sideBarIconSlice = createSlice({
    name: "sideBarIcon",
    initialState:{
        value : true,
    },
    reducers:{
        changeIcon : (state)=>{
            state.value = !state.value
        }
    }
})


export const {changeIcon} = sideBarIconSlice.actions
export default sideBarIconSlice.reducer




