import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "../slices/userslice";
import  fruitsReducer  from "../slices/fruitsSlice";

const store = configureStore({
    reducer:{
        usersInfo:userReducer,
        fruitsInfo:fruitsReducer,
    },
})

export default store