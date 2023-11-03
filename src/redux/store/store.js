import { configureStore } from "@reduxjs/toolkit";
// import manipulasiMakeUp from "../action/manipulasiMakeUp";
import rootReducer from "../reducers"
import thunk from "redux-thunk"

export default configureStore({
    // reducer: {
    //     kotakMakeUp : manipulasiMakeUp
    // },
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})