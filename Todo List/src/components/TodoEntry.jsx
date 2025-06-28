import { useState } from "react";

function TodoEntry({ handleAddClick }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDuedate] = useState("");

  let handleTodoNameChange = (event) => {
    setTodoName(event.target.value);
  };
  let handleDueDateChange = (event) => {
    setDuedate(event.target.value);
  };

  let handleAddButton = () => {
    handleAddClick(todoName, dueDate);
    setTodoName("");
    setDuedate("");
  };
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input
            placeholder="Enter To Do"
            type="text"
            value={todoName}
            onChange={handleTodoNameChange}
            id="input"
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDueDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleAddButton}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoEntry;
