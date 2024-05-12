import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
    name:'tasks',
    initialState:{
        value:[],
    },
    reducers:{
        addTask:(state, action) =>{
            state.value.push(action.payload);
            fetch("http://localhost:3001/tasks/addTask",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"galileo24"
                },
                body:JSON.stringify(action.payload)
            }).catch((err)=>{
                console.log(err);
            })
        },
        initAddTask:(state, action) =>{
            state.value.push(action.payload);
        },
        removeTask: (state,action) =>{
            const taskIndexToRemove = state.value.findIndex(task => task.name === action.payload.name);
            if (taskIndexToRemove !== -1) {
                state.value.splice(taskIndexToRemove, 1);
                fetch("http://localhost:3001/tasks/removeTask/"+action.payload,{
                    method:"DELETE",
                    headers:{
                        "Content-Type":"application/json",
                        "Authorization":"galileo24"
                    },  
                }).catch(err=>{
                    console.log(err);
                })
            }  
        }
    }
 })

export const {addTask, initAddTask, removeTask} = tasksSlice.actions;
export default tasksSlice.reducer;