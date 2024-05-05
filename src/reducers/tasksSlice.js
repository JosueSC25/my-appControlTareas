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
        },removeTask: (state,action) =>{
            const taskIndexToRemove = state.value.findIndex(task => task.name === action.payload.name);
            if (taskIndexToRemove !== -1) {
                state.value.splice(taskIndexToRemove, 1);
            }  
        }
    }
})

export const {addTask, removeTask} = tasksSlice.actions;
export default tasksSlice.reducer;