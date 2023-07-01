import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
