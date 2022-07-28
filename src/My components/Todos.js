import React from "react";
import { TodoItem } from "./todoItem";
export const Todos = ({ todos, onDelete }) => {
  return (
    <div className="container w-50">
      <h3 className="my-3">Todo List</h3>
      {todos.length === 0
        ? "No Todos to Display"
        : todos.map((todo) => {
            return (
              <>
                <TodoItem todo={todo} key={todo.srNo} onDelete={onDelete} />
              </>
            );
          })}
    </div>
  );
};
