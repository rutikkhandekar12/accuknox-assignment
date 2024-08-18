import { configureStore } from "@reduxjs/toolkit";
import  categoriesReducer from "./slice/catagoriesSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: "root",
    storage
}

const persistedReducer = persistReducer(persistConfig, categoriesReducer)

const store = configureStore({
    reducer: {
        categories: persistedReducer
    }
})

const persistor = persistStore(store);

export {store, persistor};