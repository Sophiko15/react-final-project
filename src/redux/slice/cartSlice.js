import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers";

export const saveCart = createAsyncThunk(
  "cart/saveCart",
  async ({ userId, cartItems }, { rejectWithValue, dispatch }) => {
    try {
      await axiosInstance.put(`/users/${userId}/cart`, {
        products: cartItems,
      });
      dispatch(fetchCart({ userId }));
    } catch (error) {
      return rejectWithValue("could not save cart");
    }
  }
);

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async ({ userId }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(`/users/${userId}/cart`);
      return data;
    } catch (error) {
      return rejectWithValue("could not fetch cart");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    error: null,
    cartItems: [],
  },
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    addToCart: (state, action) => {
      const productId = action.payload._id;

      //shevamowmot kalatashi tu gvaqvs es producti
      const productInCart = state.cartItems.find(
        (item) => item.product._id === productId
      );

      // tu es produqti kalatashi gvxvdeba
      if (productInCart) {
        const updatedCart = state.cartItems.map((cartElement) => {
          return cartElement.product._id === productId
            ? { ...cartElement, quantity: cartElement.quantity + 1 }
            : { ...cartElement };
        });
        state.cartItems = updatedCart;
      } else {
        //Tu es produqti ar aris kalatashi
        state.cartItems.push({ product: action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;

      //gavarkviot raodenoba tu aris ertze meti
      const productInCart = state.cartItems.find(
        (item) => item.product._id === productId
      );

      if (productInCart.quantity > 1) {
        const updatedCart = state.cartItems.map((cartElement) => {
          return cartElement.product._id === productId
            ? { ...cartElement, quantity: cartElement.quantity - 1 }
            : { ...cartElement };
        });
        state.cartItems = updatedCart;
        //unda gamovaklot erti
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.product._id !== productId
        );
        //unda amovshalot
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.loading = false;
      state.cartItems = action.payload.cart;
    });
    builder.addCase(fetchCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export const { clearCart, addToCart, removeFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;