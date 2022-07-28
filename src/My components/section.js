import React from "react";

export const Section = ({ todo, onDelete }) => {
  return (
    <div className="card mx-auto my-3">
      <div className="card-header">{todo.srNo}</div>
      <div className="card-body">
        <h5 className="card-title">{todo.title}</h5>
        <p className="card-text">{todo.desc}</p>
        <a
          href="#"
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(todo)}
        >
          delete
        </a>
      </div>
    </div>
  );
};
