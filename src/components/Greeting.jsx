import React from "react";
import { Typography } from "@mui/material";

const currentTime = new Date().getHours();

let greeting;
let greetingColor;

if (currentTime > 16 || currentTime < 5) {
  greeting = "Good Evening";
  greetingColor = "#f06292";
} else if (currentTime > 11) {
  greeting = "Good Afternoon";
  greetingColor = "#4dd0e1";
} else {
  greeting = "Good Morning";
  greetingColor = "#4db6ac";
}

function Greeting() {
  return (
    <Typography
      variant="h3"
      align="center"
      sx={{ mt: 12, mb: 4, color: greetingColor }}
    >
      {greeting}
    </Typography>
  );
}

export default Greeting;
