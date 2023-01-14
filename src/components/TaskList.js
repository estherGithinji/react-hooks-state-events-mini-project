import React from "react";
import { TASKS } from "../data";
import Task from "./Task";


function TaskList({ tasks }) {

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {TASKS.map((TASK) => (
        <Task key={TASK.text} cartegory={TASK.category} text={TASK.text}/>
      ))}
    </div>
  );
}

export default TaskList;

