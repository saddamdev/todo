import React, { useState } from "react";
import { Typography } from "@mui/material";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import NoTodo from "./NoTodo";

function Todo() {
  const [taskList, setTaskList] = useState([
    { id: 1, title: "Type your name.", isComplete: false },
    { id: 2, title: "Add some todos.", isComplete: true },
    { id: 3, title: "Check out the features.", isComplete: false },
  ]);
  const [taskId, setTaskId] = useState(4);

  function addTask(todo) {
    setTaskList((prevTasks) => [
      ...prevTasks,
      { id: taskId, title: todo, isComplete: false },
    ]);

    setTaskId((prevTaskId) => prevTaskId + 1);
  }

  function filterTaskList(filter) {
    if (filter === "all") {
      return taskList;
    } else if (filter === "active") {
      return taskList.filter((todo) => !todo.isComplete);
    } else if (filter === "completed") {
      return taskList.filter((todo) => todo.isComplete);
    }
  }

  function completeTask(id) {
    const updatedTaskList = taskList.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    setTaskList(updatedTaskList);
  }

  function deleteTask(id) {
    setTaskList([...taskList].filter((todo) => todo.id !== id));
  }

  function completeAllTasks() {
    const updatedTaskList = taskList.map((todo) => {
      todo.isComplete = true;

      return todo;
    });

    setTaskList(updatedTaskList);
  }

  function remaining() {
    return taskList.filter((todo) => !todo.isComplete).length;
  }

  function clearCompleted() {
    setTaskList([...taskList].filter((todo) => !todo.isComplete));
  }

  return (
    <>
      <Typography variant="h4" sx={{ mt: 2 }}>
        Todo
      </Typography>
      <TodoForm addTodo={addTask} />
      {taskList.length > 0 ? (
        <TodoList
          filterTodos={filterTaskList}
          completeTodo={completeTask}
          deleteTodo={deleteTask}
          completeAllTodos={completeAllTasks}
          remaining={remaining}
          clearCompleted={clearCompleted}
        />
      ) : (
        <NoTodo />
      )}
    </>
  );
}

export default Todo;
