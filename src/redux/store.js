import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import persistStore from "redux-persist/es/persistStore";
// import { tasksReducer } from "./tasksSlice";
// import { filtersReducer } from "./filtersSlice";

export const store = configureStore({ reducer });
export const persistor = persistStore(store)