//user slice
export { userReducer, authenticateUser, logout } from "./userSlice";

//product slice
export {
  productReducer,
  setSelecdetProduct,
  saveProduct,
  deleteProduct ,
  fetchHomePageProducts,
  fetchCategoryProducts,
} from "./productSlice";

//cart slice
export {
  cartReducer,
  clearCart,
  addToCart,
  removeFromCart,
  //async actions
  fetchCart,
  saveCart,
} from "./cartSlice";