import TodoHeader from "./components/TodoHeader";
import TodoEntry from "./components/TodoEntry";
import TodoContainer from "./components/TodoContainer";
import EmptyMsg from "./components/EmptyMsg";
import "./App.css";
import { useState } from "react";

function App() {
  let [todoItems, setTodoItems] = useState([
    { taskName: "Complete React Course", dueDate: "15/05/2025" },
  ]);

  let handleAddClick = (newTaskName, newDueDate) => {
    //if any of the input box is empty it will not not add in list
    if (newTaskName === "" || newDueDate === "") {
      if (newTaskName === "") {
        alert("Please enter a task");
        document.querySelector("#input").focus();
      } else {
        alert("Please enter a date");
        document.querySelector("#input").focus();
      }
    } else {
      //add newtask to the todoItems.
      const newTodoItems = [
        ...todoItems,
        { taskName: newTaskName, dueDate: newDueDate },
      ];
      //add newTodoItems to setTodoItems.
      setTodoItems(newTodoItems);
      //after adding item focus go to to do input field.
      document.querySelector("#input").focus();
    }
  };

  let handleDeleteButton = (todoName) => {
    //useing filter method we filter all items from todoItems except that we want to delete.
    let updatedTodoList = todoItems.filter(
      (item) => item.taskName !== todoName
    );
    setTodoItems(updatedTodoList);
  };

  return (
    <center className="todo-container">
      <TodoHeader />
      <TodoEntry handleAddClick={handleAddClick} />
      <EmptyMsg Data={todoItems} />
      <TodoContainer
        Data={todoItems}
        handleDeleteButton={handleDeleteButton}
      ></TodoContainer>
    </center>
  );
}

export default App;
