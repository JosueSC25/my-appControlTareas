import { configureStore } from "@reduxjs/toolkit";
import goalReducer from "./reducers/goalsSlice";
import taskReducer from "./reducers/tasksSlice";
import optionReducer from "./reducers/changeOptionSlice";


export default configureStore({
    reducer:{
        goals:goalReducer,
        tasks:taskReducer,
        option:optionReducer,
    }
})