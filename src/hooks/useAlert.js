import { useState } from "react";

export const useAlert = () => {
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const showAlert = (message, severity) => {
    setAlertState((prevState) => ({
      ...prevState,
      open: true,
      message,
      severity,
    }));
  };

  const handleClose = () => {
    setAlertState((prev) => ({
      ...prev,
      open: false,
      message: "",
      severity: "success",
    }));
  };

  return {
    alertState,
    showAlert,
    handleClose,
  };
};