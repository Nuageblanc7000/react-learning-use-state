import "./assets/styles/App.scss";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { useState } from "react";
function App() {
  const [todoList, setTodoList] = useState([]);
  function addTodo(content) {
    setTodoList([
      ...todoList,
      {
        id: crypto.randomUUID(),
        content,
        edit: false,
        done: false,
      },
    ]);
  }
  function toggleEditTodo(id) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, edit: !todo.edit } : todo
      )
    );
  }
  function editTodo(id, content) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, content, edit: false } : todo
      )
    );
  }
  function deleteTodo(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  return (
    <div className="card">
      <AddTodo addTodo={addTodo} />
      <TodoList
        todoList={todoList}
        toggleEditTodo={toggleEditTodo}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
