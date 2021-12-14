import React, { useState } from "react";
import { Typography, TextField } from "@mui/material";

function UserName() {
  const [name, setName] = useState("");
  function getName(e) {
    setName(e.target.value);
  }
  return (
    <>
      <Typography variant="h4" sx={{ mb: 1 }}>
        Hello {name}
      </Typography>
      <TextField
        variant="outlined"
        size="small"
        label="What is your name?"
        onChange={getName}
      />
    </>
  );
}

export default UserName;
