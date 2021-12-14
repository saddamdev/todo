import React, { useState } from "react";
import { Box } from "@mui/system";
import {
  Checkbox,
  IconButton,
  Divider,
  Stack,
  Button,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import DoneAllIcon from "@mui/icons-material/DoneAll";

function TodoList(props) {
  function createTodo(todo) {
    return (
      <Box
        key={todo.id}
        sx={{
          width: "100%",
          my: 1,
          p: 1,
          backgroundColor: "#fafafa",
          display: "flex",
        }}
      >
        <Box>
          <Checkbox
            checked={todo.isComplete}
            sx={{
              color: "#9fa8da",
              "&.Mui-checked": {
                color: "#9fa8da",
              },
            }}
            onChange={() => props.completeTodo(todo.id)}
          />
        </Box>
        <Box
          component="span"
          sx={{
            flexGrow: 1,
            p: 1,
            textDecoration: todo.isComplete ? "line-through" : "none",
          }}
        >
          {todo.title}
        </Box>
        <Box>
          <IconButton onClick={() => props.deleteTodo(todo.id)}>
            <ClearIcon sx={{ color: "#ef9a9a" }} />
          </IconButton>
        </Box>
      </Box>
    );
  }

  const [filter, setFilter] = useState("all");

  function handleChange(e) {
    setFilter(e.target.value);
    props.filterTodos(filter);
  }

  return (
    <>
      {props.filterTodos(filter).map(createTodo)}
      <Divider sx={{ mt: 1, mb: 1 }} />
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button
          variant="outlined"
          endIcon={<DoneAllIcon />}
          onClick={props.completeAllTodos}
        >
          Check All
        </Button>
        <Typography variant="body1">
          {props.remaining()} items remaining
        </Typography>
      </Stack>
      <Divider sx={{ mt: 1, mb: 1 }} />
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <FormControl component="fieldset">
          <RadioGroup row value={filter} onChange={handleChange}>
            <FormControlLabel value="all" control={<Radio />} label="All" />
            <FormControlLabel
              value="active"
              control={<Radio />}
              label="Active"
            />
            <FormControlLabel
              value="completed"
              control={<Radio />}
              label="Completed"
            />
          </RadioGroup>
        </FormControl>
        <Button variant="text" onClick={props.clearCompleted}>
          clear completed
        </Button>
      </Stack>
    </>
  );
}

export default TodoList;
