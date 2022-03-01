import React from "react";


  
//callback function template for java script component
//Components must be declared with capitalized first letter
const TodoHeader = (props) => {
    console.log(props);
    const title = props.title;
    const addition = props.additionFunc;
    return (
      <h1>
        {title} {addition(1, 2)}
      </h1>
    );
  };
  
  //Deconstruction templates
  /*
  const TodoGeader = ({title, additionFunc}) => {
    return (
      <h1>
        {title} : {additionFunc(1,2)}
      </h1>
    )
  }
  */

  export default TodoHeader;