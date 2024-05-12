import { createSlice } from '@reduxjs/toolkit';

export const goalsSlice = createSlice({
    name:'goals',
    initialState:{
        value:[]
    },
    reducers:{
        addGoal:(state, action) =>{
            state.value.push(action.payload);
            fetch("http://localhost:3001/goals/addGoals",{
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
        initAddGoal:(state, action) =>{
            state.value.push(action.payload);
        },
        removeGoal: (state,action) =>{
            const goalIndexToRemove = state.value.findIndex(goal => goal.name === action.payload.name);
            if (goalIndexToRemove !== -1) {
                state.value.splice(goalIndexToRemove, 1);
            fetch("http://localhost:3001/goals/removeGoals/"+action.payload,{
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

export const {addGoal, initAddGoal, removeGoal} = goalsSlice.actions;
export default goalsSlice.reducer;