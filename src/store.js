import { configureStore } from "@reduxjs/toolkit";
import goalReducer from "./reducers/goalsSlice";
import taskReducer from "./reducers/tasksSlice";


export default configureStore({
    reducer:{
        goals:goalReducer,
        tasks: taskReducer
    }
})