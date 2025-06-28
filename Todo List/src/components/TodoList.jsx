function TodoList({ todoTaskName, todoDueDate, handleDeleteButton }) {
  return (
    <div className="row">
      <div className="col-6">{todoTaskName}</div>
      <div className="col-4">{todoDueDate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleDeleteButton(todoTaskName)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoList;
