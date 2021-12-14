import React from "react";
import { Typography, Divider } from "@mui/material";

const year = new Date().getFullYear();

function CopyRight() {
  return (
    <>
      <Divider sx={{ mt: 1, mb: 1 }} />
      <Typography variant="body2" align="center">
        Copyright © Saddam {year}
      </Typography>
    </>
  );
}

export default CopyRight;
