import React, { ChangeEvent, useCallback, useState } from "react";
import "./TodoList.sass";
import { Button, Input, Space, Tooltip } from "antd";
import { CheckCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import { TodoType } from "../Signal/todo.signal";

type TodoListProps = {
  todos: TodoType[];
  input: string;
  onChangeInput: (value: string) => void;
  onTodoAdd: (value: string) => void;
  onTodoChangeStatus: (id: string) => void;
  onTodoRemove: (id: string) => void;
};

const TodoList = (props: TodoListProps) => {
  const statusTitle = useCallback((completed: boolean) => {
    return completed ? "Incomplete" : "Complete";
  }, []);

  const statusColor = useCallback((completed: boolean) => {
    return completed ? "green" : "#80808078";
  }, []);

  const onAdd = useCallback(() => {
    if (props.input) {
      props.onTodoAdd(props.input);
    }
  }, [props]);
  return (
    <div className="wrapper">
      <div className="todo-list">
        <Space direction="vertical">
          {props.todos.map((todo) => (
            <Input
              key={todo.id}
              disabled
              size="large"
              addonAfter={
                <Space direction="horizontal">
                  <Tooltip title={statusTitle(todo.completed)}>
                    <Button
                      onClick={() => props.onTodoChangeStatus(todo.id)}
                      type="text"
                      icon={
                        <CheckCircleOutlined
                          style={{ color: statusColor(todo.completed) }}
                        />
                      }
                    />
                  </Tooltip>

                  <Tooltip title="Delete">
                    <Button
                      onClick={() => props.onTodoRemove(todo.id)}
                      type="text"
                      icon={<DeleteOutlined style={{ color: "red" }} />}
                    />
                  </Tooltip>
                </Space>
              }
              value={todo.text}
            />
          ))}
        </Space>
      </div>
      <Space.Compact block style={{ paddingTop: "10px" }}>
        <Input
          size="large"
          value={props.input}
          onChange={(e) => props.onChangeInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onAdd();
            }
          }}
        />
        <Button size="large" type="primary" onClick={onAdd}>
          Add
        </Button>
      </Space.Compact>
    </div>
  );
};

export default TodoList;
