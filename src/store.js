import { configureStore } from "@reduxjs/toolkit";
import  categoriesReducer from "./slice/catagoriesSlice";

const store = configureStore({
    reducer: {
        categories: categoriesReducer
    }
})

export default store;