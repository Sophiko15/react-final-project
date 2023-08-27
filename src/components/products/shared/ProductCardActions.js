import React from "react";
import { isUserAdmin } from "../../../helpers";
import { Button, Text } from "../../atoms";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addToCart,
  deleteProduct,
  removeFromCart,
  setSelecdetProduct,
} from "../../../redux/slice";
import { Box } from "@mui/material";
import { useCart } from "../../../hooks";

export const ProductCardActions = ({ userData, product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useCart();
  
  if (isUserAdmin(userData)) {
    return (
      <>
        <Button
          onClick={() => {
            navigate(`/products/${product._id}/edit`);
            dispatch(setSelecdetProduct(product));
          }}
        >
          edit
        </Button>
        <Button
          onClick={() => {
            dispatch(deleteProduct(product._id));
          }}
        >
          delete
        </Button>
      </>
    );
  }
  const isProductInCart = cartItems.find(
    (item) => item.product._id === product._id
  );

  return (
    <Box>
      {!isProductInCart ? (
        <Button onClick={() => dispatch(addToCart(product))}>
          add to cart
        </Button>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button onClick={() => dispatch(removeFromCart(product._id))}>
            -
          </Button>
          <Text>{isProductInCart.quantity}</Text>
          <Button onClick={() => dispatch(addToCart(product))}>+</Button>
        </Box>
      )}
    </Box>
  );
};