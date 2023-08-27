import { Box, Drawer, styled } from "@mui/material"
import React from "react"
import { useCart, useUser } from "../../hooks"
import { Button, Text } from "../atoms"
import { useDispatch } from "react-redux"
import { clearCart, saveCart } from "../../redux/slice"

const StyledCartItem = styled(Box)(() => ({
  width: 400,
  display: "flex",
  alignItems: "center",
  padding: "5px 10px",
  marginBottom: 20,
}));

const StyledButtonContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
}));

const Styledimage = styled("img")(() => ({
  width: 70,
  height: 70,
  objectFit: "cover",
  borderRadius: 5,
}));

export const CartDrawer = ({ isCartOpen, setIsCartOpen }) => {
  const { cartItems } = useCart();
  const dispatch = useDispatch();
  const { userData } = useUser();
  const userId = userData?._id;
  return (
    <Drawer
      open={isCartOpen}
      onClose={() => setIsCartOpen(false)}
      anchor="right"
    >
      {cartItems?.map((item) => {
        const { product, quantity } = item;
        const { price, name, _id, image } = product;
        return (
          <StyledCartItem key={_id}>
            <Styledimage src={image} alt={`${name}-img`} />
            <Box sx={{ paddingLeft: 5 }}>
              <Text>{name}</Text>
              <Text>quantity: {quantity}</Text>
              <Text>total: ${price * quantity}</Text>
            </Box>
          </StyledCartItem>
        );
      })}
      <StyledButtonContainer>
        <Button
          onClick={() => {
            dispatch(clearCart());
            if (userId) {
              dispatch(saveCart({ cartItems: [], userId }));
            }
          }}
        >
          clear cart
        </Button>
        {!!userData && (
          <Button onClick={() => dispatch(saveCart({ cartItems, userId }))}>
            saveCart
          </Button>
        )}
      </StyledButtonContainer>
    </Drawer>
  );
};