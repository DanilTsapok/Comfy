import { configureStore } from "@reduxjs/toolkit";
import MyCartReducer from "./MyCartSlice";
import MyProductReducer from "./MyProductSlice";
export const store = configureStore({
  reducer: {
    products: MyProductReducer,
    cart: MyCartReducer,
  },
});
