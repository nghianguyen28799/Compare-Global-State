import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { generateString } from "../../Utils/utils";

export type TodoType = {
  id: string;
  text: string;
  completed: boolean;
};

export type TodoState = {
  todos: TodoType[];
  lastUpdated: string;
  input: string;
};

// Define the initial state using that type
const initialState: TodoState = {
  input: "",
  lastUpdated: "",
  todos: [{ id: "test", text: "test", completed: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    onChangeInput: (state, action: PayloadAction<{ value: string }>) => {
      state.input = action.payload.value;
    },
    onTodoAdd: (state, action: PayloadAction<{ value: string }>) => {
      state.todos = [
        ...state.todos,
        {
          id: generateString(),
          text: action.payload.value,
          completed: false,
        },
      ];
      state.input = "";
    },
    onTodoChangeStatus: (state, action: PayloadAction<{ id: string }>) => {
      state.lastUpdated = new Date().toLocaleString();
      state.todos = state.todos.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
    },
    onTodoRemove: (state, action: PayloadAction<{ id: string }>) => {
      state.todos = state.todos.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
  },
});

export const { onChangeInput, onTodoAdd, onTodoChangeStatus, onTodoRemove } =
  todoSlice.actions;

export default todoSlice.reducer;
