import React, { useState } from "react";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";

function TodoForm(props) {
  const [task, setTask] = useState("");

  function getTask(e) {
    setTask(e.target.value);
  }

  function submitTask(e) {
    e.preventDefault();

    if (task.trim().length === 0) {
      return;
    }

    props.addTodo(task);

    setTask("");
  }

  return (
    <Box component="form" autoComplete="off" onSubmit={submitTask}>
      <TextField
        variant="standard"
        fullWidth
        label="What do you need to do?"
        value={task}
        onChange={getTask}
      />
    </Box>
  );
}

export default TodoForm;
