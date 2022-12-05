import EditTodo from "./EditTodo";
import Todo from "./Todo";

export default function TodoList({ todoList, updatedTodo, deleteTodo }) {
  return (
    <div>
      {todoList.length ? (
        todoList.map((todo) =>
          !todo.edit ? (
            <Todo
              key={todo._id}
              content={todo.content}
              deleteTodo={() => deleteTodo(todo._id)}
              updatedTodo={() => updatedTodo({ ...todo, edit: !todo.edit })}
            />
          ) : (
            <EditTodo key={todo._id} todo={todo} updatedTodo={updatedTodo} />
          )
        )
      ) : (
        <p>"aucune todo"</p>
      )}
    </div>
  );
}
