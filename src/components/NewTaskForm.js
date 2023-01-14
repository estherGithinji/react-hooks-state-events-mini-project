import React, { useState } from "react";

function NewTaskForm({cartegory, tasks}) {
  const [text, setText ]= useState ();
  const [category, setCategory] = useState ();
  const [submittedData, setSubmittedData] = useState ([])

  const displayCartegory = cartegory.map((cart) => {
    return <option>{cart}</option>
  })

  function handleCategory(e) {
    setCategory(e.target.value);
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  function onSubmitTodo(e) {
    e.preventDefault();
    const formData = {
      text: text,
      category: category
    }
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray)
    tasks.push({ text,cartegory })
  }

  console.log(text);
  console.log(category);
  console.log(submittedData);
  console.log(tasks)

  return (
    <form className="new-task-form" onSubmit={onSubmitTodo}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategory}>
          {/* render <option> elements for each category here */}
          {displayCartegory}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
