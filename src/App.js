import "./App.css";
import Header from "./My components/header";
import { Todos } from "./My components/Todos";
import { Footer } from "./My components/footer";
import React, { useState } from "react";
import AddTodo from "./My components/AddTodo";
function App() {
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const addTodo = (title, desc) => {
    if (title && desc) {
      let srNo = todos.length === 0 ? 1 : todos[todos.length - 1].srNo + 1;
      const myTodo = {
        srNo: srNo,
        title: title,
        desc: desc,
      };
      setTodos([...todos, myTodo]);
      console.log(myTodo);
    }
  };

  const [todos, setTodos] = useState([
    {
      srNo: 1,
      title: "Go to market",
      desc: "Go to market to do this job done1",
    },
    {
      srNo: 2,
      title: "Go to mall",
      desc: "Go to market to do this job done2",
    },
    {
      srNo: 3,
      title: "Go to park",
      desc: "Go to market to do this job done3",
    },
  ]);
  return (
    <>
      <Header title="MyTodoList" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
