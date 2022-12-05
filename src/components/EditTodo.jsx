import { useState } from "react";

export default function EditTodo({ todo, updatedTodo }) {
  async function editTodo() {
    let { _id, ...newTodo } = todo;

    newTodo = { ...newTodo, content: value, edit: false };
    const response = await fetch(`https://restapi.fr/api/wettodo/${_id}`, {
      method: "PATCH",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (response.ok) {
      newTodo = await response.json();
      updatedTodo(newTodo);
    }
  }
  const [value, setValue] = useState(todo.content);
  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <div>
      <input onChange={handleChange} type="text" name="" id="" value={value} />
      <button onClick={editTodo}>sauvegarder</button>
      <button onClick={() => updatedTodo({ ...todo, edit: false })}>
        cancel
      </button>
    </div>
  );
}
