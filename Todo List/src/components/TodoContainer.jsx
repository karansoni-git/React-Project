import TodoList from "./TodoList";
function TodoContainer({ Data, handleDeleteButton }) {
  return (
    <div className="container todoitems">
      {Data.map((todo) => (
        <TodoList
          key={todo.taskName}
          todoTaskName={todo.taskName}
          todoDueDate={todo.dueDate}
          handleDeleteButton={handleDeleteButton}
        ></TodoList>
      ))}
    </div>
  );
}

export default TodoContainer;
