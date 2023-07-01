import { signal } from "@preact/signals-react";

export type TodoType = {
  id: string;
  text: string;
  completed: boolean;
};

export const lastUpdatedSignal = signal<string>("");

export const inputSignal = signal<string>("");

export const todosSignal = signal<TodoType[]>([
  { id: "test", text: "test", completed: false },
]);
