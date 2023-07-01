import { create } from "zustand";
import { generateString } from "../../Utils/utils";
import { todosSignal } from "../Signal/todo.signal";

export type TodoType = {
  id: string;
  text: string;
  completed: boolean;
};

export type TodoState = {
  todos: TodoType[];
  lastUpdated: string;
  input: string;
  onChangeInput: (value: string) => void;
  onTodoAdd: (value: string) => void;
  onTodoChangeStatus: (id: string) => void;
  onTodoRemove: (id: string) => void;
};

export const useTodoStore = create<TodoState>((set) => ({
  todos: [{ id: "test", text: "test", completed: false }],
  lastUpdated: "",
  input: "",

  onChangeInput: (value: string) => {
    set({ input: value });
  },

  onTodoAdd: (value: string) => {
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: generateString(),
          text: value,
          completed: false,
        },
      ],
    }));
    set(() => ({
      input: "",
    }));
  },

  onTodoChangeStatus: (id: string) => {
    set((state) => ({
      lastUpdated: new Date().toLocaleString(),
      todos: state.todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    }));
  },

  onTodoRemove: (id: string) => {
    set((state) => ({
      todos: state.todos.filter((item) => {
        return item.id !== id;
      }),
    }));
  },
}));
