import React from "react";
import { useEffect } from "react";
import Tombol from "./Tombol";
import Deletebutton from "./DeleteButton";


export var todoContainerStyle = {
    display : "flex",
    flexDirection : "column",
    backgroundColor: "green",
    //padding top and botton 10px, left and right 0px
    padding: "10px 0px",
    //font-color = white
    color: "white",
    //margin 10px top&bottom, 0px left and right
    gap : 10,
};

const TodoComponent = ({ 
  todoTitle, 
  todoDescription, 
  handleSaveChanges, 
  handleChangeTitle, 
  handleChangeDescription, 
  handleDelete, 
  oldTodo = {},
}) => {
  useEffect(() => {
    oldTodo = {
      title : todoTitle,
      description : todoDescription
    }
  })
  return (
    <div style={todoContainerStyle}>
      <header>
        <strong>{todoTitle}</strong>
      </header>
      <p>{todoDescription}</p>
      <Tombol 
        display = "edit" 
        defaultDescription = {todoDescription} 
        defaultTitle = {todoTitle}
        handleChangeDescription = {handleChangeDescription}
        handleChangeTitle = {handleChangeTitle}
        handleSaveChanges = {handleSaveChanges}
        
      />
      <Deletebutton handleDelete={handleDelete} description={todoDescription} title = {todoTitle}/>
    </div>
  );
};

export default TodoComponent //expect you to export and imoprt the same name */
