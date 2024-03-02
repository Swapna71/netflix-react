import { createSlice } from "@reduxjs/toolkit";


const configSlige=createSlice({
    name:'config',
    initialState:{
        lang: 'en',
    },
    reducers:{
        onLanguageChange: (state, action)=>{
            state.lang=action.payload;
        }
    }
})
export const {onLanguageChange}=configSlige.actions
export default configSlige.reducer;