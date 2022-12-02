import { useState } from "react";

export default function EditTodo({ toggleEditTodo, todo, editTodo }) {
  const [value, setValue] = useState(todo.content);
  function handleChange(e) {
    setValue(e.target.value);
    console.log(value);
  }
  return (
    <div>
      <input onChange={handleChange} type="text" name="" id="" value={value} />
      <button onClick={() => editTodo(todo.id, value)}>sauvegarder</button>
      <button onClick={toggleEditTodo}>cancel</button>
    </div>
  );
}
