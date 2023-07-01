import React from "react";
import TrackingInfo from "../TrackingInfo/TrackingInfo";
import TodoList from "../TodoList/TodoList";
import { useTodoStore } from "./todoStore";

const Zustand = () => {
  const {
    todos,
    lastUpdated,
    input,
    onChangeInput,
    onTodoAdd,
    onTodoChangeStatus,
    onTodoRemove,
  } = useTodoStore((state) => state);

  return (
    <div>
      <TrackingInfo
        totalCompleted={todos.length}
        lastUpdated={lastUpdated || ""}
      />
      <TodoList
        todos={todos}
        input={input}
        onChangeInput={onChangeInput}
        onTodoAdd={onTodoAdd}
        onTodoChangeStatus={onTodoChangeStatus}
        onTodoRemove={onTodoRemove}
      />
    </div>
  );
};

export default Zustand;
