import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartReducer, productReducer, userReducer } from "./slice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

export * from "./slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistedStore = persistStore(store);