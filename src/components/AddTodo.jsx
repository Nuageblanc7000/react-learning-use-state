import { useEffect } from "react";
import { useState, useContext } from "react";
import { loaderContext } from "../context/loaderContext";

export default function AddTodo({ addTodo }) {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const contextLoader = useContext(loaderContext);
  function handleChange(e) {
    setValue(e.target.value);
  }
  async function handleClick() {
    if (value.length) {
      setLoading(true);
      try {
        const response = await fetch("https://restapi.fr/api/wettodo", {
          method: "POST",
          body: JSON.stringify({
            content: value,
            edit: false,
            done: false,
          }),
          headers: {
            "Content-type": "application/json",
          },
        });
        if (response.ok) {
          const todo = await response.json();
          addTodo(todo);
          setValue("");
          setLoading(false);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
  return (
    <div>
      {!loading ? (
        <>
          <input
            onChange={handleChange}
            type="text"
            name="text"
            value={value}
          />
          <button onClick={handleClick}>ajouter</button>
        </>
      ) : (
        <img src={contextLoader} alt="" />
      )}
    </div>
  );
}
