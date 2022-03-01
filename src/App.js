import React from "react";
import "./App.css";
import { Button, Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
//import components
import Tombol from "./component/Tombol";
import Deletebutton from "./component/DeleteButton";
import TodoHeader from "./component/TodoHeader";
import TodoComponent from "./component/TodoComponent";
import { todoContainerStyle } from "./component/TodoComponent";

function addition(a, b) {
  return a + b;
}

var formStyle = {
  display: "flex",
  flexDirection: "column",
  //gap antara component, supaya g terlalu dempet
  gap: "10px",
  width: "40%",
  padding: 10,
  borderRadius: 10,
  backgroundColor: "lightblue",
  margin: "auto",
};

function App() {
  const [todoList, setTodoList] = React.useState([]);
  //form states
  //title state
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleChangeTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const handleSaveChanges = (e) => {
    addNewTodo(title, description);
  };

  // const handleEdit = (e) => {
  //   editTodo(title, description);
  // };

  // const handleDelete = (e) => {
  //   deleteTodo(title, description);
  // };

  //description state

  function addNewTodo(title, description) {
    const newTodo = {
      title: title,
      description: description,
    };
    //todoList.push(newTodo); same sama setstat id bawah
    setTodoList([...todoList, newTodo]);
  }

  function deleteTodo(todoTitle, todoDescription) {
    setTitle(todoTitle);
    setDescription(todoDescription);
    const newTodoList = todoList.filter((element) => {
      return (
        element.title !== todoTitle || element.description !== todoDescription
      );
    });
    setTodoList(newTodoList);
  }

  const editTodo = (oldTodo, todoTitle, todoDescription) => {
    setTitle(todoTitle);
    setDescription(todoDescription);
    const oldTodo = {
      title: todoTitle,
      description: todoDescription,
    };
    const newTodoList = todoList;
    const indexOfOldTodo = todoList.indexOf(oldTodo);
    newTodoList[indexOfOldTodo] = newTodo;
  };

  return (
    <div className="App">
      <TodoHeader title="test" additionFunc={addition} />

      {/* Method 2 with destructuring */}
      <div style={todoContainerStyle}>
        {todoList.map(({ title, description }) => {
          return (
            <div>
              <TodoComponent
                todoTitle={title}
                todoDescription={description}
                handleChangeDescription={handleChangeDescription}
                handleChangeTitle={handleChangeTitle}
                handleSaveChanges={(e) => {
                  editTodo(title, description);
                }}
                handleDelete={(e) => {
                  deleteTodo(title, description);
                }}
              />
            </div>
          );
        })}
      </div>
      <div>
        <Tombol
          handleChangeDescription={handleChangeDescription}
          handleChangeTitle={handleChangeTitle}
          handleSaveChanges={handleSaveChanges}
          display={"Card Page"}
        />
      </div>
      {/* <form style={formStyle}>
        <h1>Todo from</h1>
        <label>Todo Title</label>
        <input
          type="text"
          onChange={(e) => {
            //listens changes while user is typing
            setTitle(e.target.value);
          }}
        />
        <label>Todo Description</label>
        <input
          type="text"
          onChange={(e) => {
            setDescription(e.target.value);
            console.log(e.target.value);
            console.log(description);
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(description);
            addNewTodo(title, description);
          }}
        >
          Submit
        </button>
        </form> */}
    </div>
  );
}

export default App;
