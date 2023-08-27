import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, canAccess }) => {
  if (canAccess) {
    return children;
  }
  return <Navigate to="/" />
};