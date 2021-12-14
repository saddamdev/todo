import React from "react";
import { Box } from "@mui/system";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import { Typography } from "@mui/material";

function NoTodo() {
  return (
    <Box sx={{ mt: 1, textAlign: "center" }}>
      <NoteAltIcon sx={{ fontSize: 96, color: "#80deea" }} />
      <Typography variant="h6">Add some todos...</Typography>
    </Box>
  );
}

export default NoTodo;
