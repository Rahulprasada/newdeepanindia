"use client";

import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import ErrorIcon from "@mui/icons-material/Error";

const FailurePopup = ({ open, message, onClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert
        onClose={onClose}
        severity="error"
        variant="filled"
        icon={<ErrorIcon fontSize="inherit" />}
        sx={{ width: "100%" }}
      >
        {message || "Operation failed!"}
      </Alert>
    </Snackbar>
  );
};

export default FailurePopup;