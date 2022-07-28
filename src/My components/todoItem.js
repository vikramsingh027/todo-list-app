import React from "react";
// import { Todos } from "./Todos";
import { Section } from "./section";

export const TodoItem = ({ todo, onDelete }) => {
  return <Section todo={todo} onDelete={onDelete} />;
};
