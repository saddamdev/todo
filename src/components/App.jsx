import React from "react";
import { CssBaseline, Container } from "@mui/material";
import Greeting from "./Greeting";
import UserName from "./UserName";
import Todo from "./Todo";
import CopyRight from "./CopyRight";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Greeting />
        <UserName />
        <Todo />
        <CopyRight />
      </Container>
    </React.Fragment>
  );
}

export default App;
