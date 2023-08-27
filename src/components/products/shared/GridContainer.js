import { Grid } from "@mui/material";
import React from "react";

export const GridContainer = ({ children }) => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        justifyContent: "center", 
        "& > .MUIGrid-item": {
          paddingRight: 0,
        },
      }}
      rowGap={2}
      columnGap={3}
    >
      {children}
    </Grid>
  );
};