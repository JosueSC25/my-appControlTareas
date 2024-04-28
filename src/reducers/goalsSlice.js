import { createSlice } from '@reduxjs/toolkit';

export const goalsSlice = createSlice({
    name:'goals',
    initialState:{
        value:[{
            'name':'Graduarme del TDS',
            'description':'Ganar todos los cursos',
            'dueDate':'01/12/1996'
        }]
    },
    reducers:{
        addGoal:(state, action) =>{
            state.value.push(action.payload);
        },
        removeGoal: (state,action) =>{
            const goalIndexToRemove = state.value.findIndex(goal => goal.name === action.payload.name);
            if (goalIndexToRemove !== -1) {
                state.value.splice(goalIndexToRemove, 1);
            }  
        }
    }
})

export const {addGoal, removeGoal} = goalsSlice.actions;
export default goalsSlice.reducer;