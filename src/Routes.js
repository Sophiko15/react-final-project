import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  CategoryProductsPage,
  Homepage,
  Loginpage,
  ProductFormPage,
  Registerpage,
  SingleProductPage,
} from "./pages";
import { ProtectedRoute, isUserAdmin } from "./helpers";
import { useUser } from "./hooks";

const RoutesComponent = () => {
  const { userData } = useUser();
  const isAdmin = isUserAdmin(userData);
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/register" element={<Registerpage />} />
      {/* marto admins unda uchvenos */}
      <Route
        path="/products/new"
        element={
          <ProtectedRoute canAccess={isAdmin}>
            <ProductFormPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/products/:id/edit"
        element={
          <ProtectedRoute canAccess={isAdmin}>
            <ProductFormPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/products/categories/:categoryName"
        element={<CategoryProductsPage />}
      />
      <Route
        path="/products/categories/:categoryName/:id"
        element={<SingleProductPage />}
      />
    </Routes>
  );
};

export default RoutesComponent;