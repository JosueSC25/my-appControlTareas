import { createSlice } from "@reduxjs/toolkit";

export const changeOptionSlice = createSlice({
    name:'option',
    initialState:{
        value:'tasks'
    },
    reducers:{
        changeOption:(state, action) =>{
            state.value=action.payload;
        }
    }
})

export const {changeOption} = changeOptionSlice.actions;
export default changeOptionSlice.reducer;