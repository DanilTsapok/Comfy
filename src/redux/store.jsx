import { configureStore } from "@reduxjs/toolkit";
import MyCartReducer from "./MyCartSlice";
export const store = configureStore({
  reducer: {
    cart: MyCartReducer,
  },
});
