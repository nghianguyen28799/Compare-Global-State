import { useCallback } from "react";
import TodoList from "../TodoList/TodoList";
import TrackingInfo from "../TrackingInfo/TrackingInfo";
import { inputSignal, lastUpdatedSignal, todosSignal } from "./todo.signal";
import { generateString } from "../../Utils/utils";

const onChangeInput = (value: string) => {
  inputSignal.value = value;
};

const onTodoAdd = (value: string) => {
  todosSignal.value = [
    ...todosSignal.value,
    {
      id: generateString(),
      text: value,
      completed: false,
    },
  ];
  inputSignal.value = "";
};

const onTodoChangeStatus = (id: string) => {
  todosSignal.value = todosSignal.value.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        completed: !item.completed,
      };
    }
    return item;
  });
  lastUpdatedSignal.value = new Date().toLocaleString();
};

const onTodoRemove = (id: string) => {
  todosSignal.value = todosSignal.value.filter((item) => {
    return item.id !== id;
  });
};

const Signal = () => {
  return (
    <div>
      <TrackingInfo
        totalCompleted={todosSignal.value.length}
        lastUpdated={lastUpdatedSignal.value}
      />
      <TodoList
        todos={todosSignal.value}
        input={inputSignal.value}
        onChangeInput={onChangeInput}
        onTodoAdd={onTodoAdd}
        onTodoChangeStatus={onTodoChangeStatus}
        onTodoRemove={onTodoRemove}
      />
    </div>
  );
};

export default Signal;
