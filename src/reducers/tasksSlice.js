import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
    name:'tasks',
    initialState:{
        value:[{
            'name':'Actividad 2',
            'description':'realizar actividad semana 2',
            'dueDate':'29/04/2024'
        }]
    },
    reducers:{
        addTask:(state, action) =>{
            state.value.push(action.payload);
        }
    }
})

export const {addTask} = tasksSlice.actions;
export default tasksSlice.reducer;