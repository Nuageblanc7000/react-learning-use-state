import "./assets/styles/App.scss";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { useState } from "react";
import { useEffect } from "react";
import { getAllByAltText } from "@testing-library/react";
function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    async function getAll() {
      try {
        const response = await fetch("https://restapi.fr/api/wettodo");
        if (response.ok) {
          const todos = await response.json();
          if (Array.isArray(todos)) {
            setTodoList(todos);
          } else {
            setTodoList([todos]);
          }
        }
      } catch (e) {
        console.log(e);
      }
    }
    getAll();
  }, []);
  function addTodo(todo) {
    setTodoList([...todoList, todo]);
  }

  async function deleteTodo(id) {
    try {
      const response = await fetch(`https://restapi.fr/api/wettodo/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setTodoList(todoList.filter((todo) => todo._id !== id));
      }
    } catch (e) {}
  }
  function updatedTodo(newTodo) {
    setTodoList(todoList.map((t) => (t._id === newTodo._id ? newTodo : t)));
  }

  return (
    <div className="card">
      <AddTodo addTodo={addTodo} />
      <TodoList
        todoList={todoList}
        deleteTodo={deleteTodo}
        updatedTodo={updatedTodo}
      />
    </div>
  );
}

export default App;
