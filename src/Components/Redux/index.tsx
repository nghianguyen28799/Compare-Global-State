import React, { useCallback } from "react";
import TrackingInfo from "../TrackingInfo/TrackingInfo";
import TodoList from "../TodoList/TodoList";
import { useAppDispatch, useAppSelector } from "./hook";
import {
  onChangeInput,
  onTodoAdd,
  onTodoChangeStatus,
  onTodoRemove,
} from "./todoSlice";

const Redux = () => {
  const { todos, lastUpdated, input } = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  const onChangeInputFunc = useCallback(
    (value: string) => {
      dispatch(onChangeInput({ value }));
    },
    [dispatch]
  );
  const onTodoAddFunc = useCallback(
    (value: string) => {
      dispatch(onTodoAdd({ value }));
    },
    [dispatch]
  );
  const onTodoChangeStatusFunc = useCallback(
    (id: string) => {
      dispatch(onTodoChangeStatus({ id }));
    },
    [dispatch]
  );
  const onTodoRemoveFunc = useCallback(
    (id: string) => {
      dispatch(onTodoRemove({ id }));
    },
    [dispatch]
  );

  return (
    <div>
      <TrackingInfo
        totalCompleted={todos.length}
        lastUpdated={lastUpdated || ""}
      />
      <TodoList
        todos={todos}
        input={input}
        onChangeInput={onChangeInputFunc}
        onTodoAdd={onTodoAddFunc}
        onTodoChangeStatus={onTodoChangeStatusFunc}
        onTodoRemove={onTodoRemoveFunc}
      />
    </div>
  );
};

export default Redux;
