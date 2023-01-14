import React from "react";

function Task({cartegory, text}) {

  function deleteTask() {
    
  }

  return (
    <div className="task">
      <div className="label">{cartegory}</div>
      <div className="text">{text}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
