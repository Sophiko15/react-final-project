import { Snackbar, Alert as MUIlert } from "@mui/material"

export const Alert = ({ open, handleCLose, severity, message }) => (
  <Snackbar
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    open={open}
    autoHideDuration={3000}
    onClose={handleCLose}
  >
    <MUIlert open={open} duration={3000} severity={severity}>
      {message}
    </MUIlert>
  </Snackbar>
);