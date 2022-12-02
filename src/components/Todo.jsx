export default function Todo({ content, toggleEditTodo, deleteTodo }) {
  return (
    <div className="card">
      <p>{content}</p>
      <button onClick={toggleEditTodo} className="btn btn-primary">
        edit
      </button>
      <button onClick={deleteTodo} className="btn btn-secondary">
        delete
      </button>
    </div>
  );
}
