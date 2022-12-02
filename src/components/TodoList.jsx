import EditTodo from "./EditTodo";
import Todo from "./Todo";

export default function TodoList({
  todoList,
  toggleEditTodo,
  editTodo,
  deleteTodo,
}) {
  return (
    <div>
      {todoList.length ? (
        todoList.map((todo) =>
          !todo.edit ? (
            <Todo
              key={todo.id}
              content={todo.content}
              toggleEditTodo={() => toggleEditTodo(todo.id)}
              deleteTodo={() => deleteTodo(todo.id)}
            />
          ) : (
            <EditTodo
              toggleEditTodo={() => toggleEditTodo(todo.id)}
              todo={todo}
              editTodo={editTodo}
            />
          )
        )
      ) : (
        <p>"aucune todo"</p>
      )}
    </div>
  );
}
