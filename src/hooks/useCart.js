import { useSelector } from "react-redux";

export const useCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return {
    cartItems,
  };
};