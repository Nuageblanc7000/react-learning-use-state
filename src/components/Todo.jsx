export default function Todo({ content, updatedTodo, deleteTodo }) {
  return (
    <div className="card">
      <p>{content}</p>
      <button onClick={updatedTodo} className="btn btn-primary">
        edit
      </button>
      <button onClick={deleteTodo} className="btn btn-secondary">
        delete
      </button>
    </div>
  );
}
