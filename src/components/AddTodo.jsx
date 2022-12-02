import { useState } from "react";

export default function AddTodo({ addTodo }) {
  const [value, setValue] = useState("");
  function handleChange(e) {
    setValue(e.target.value);
    console.log(value);
  }
  return (
    <div>
      <input onChange={handleChange} type="text" name="text" value={value} />
      <button
        onClick={() => {
          if (value) {
            addTodo(value);
            setValue("");
          }
        }}
      >
        ajouter
      </button>
    </div>
  );
}
