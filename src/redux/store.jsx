import { configureStore } from "@reduxjs/toolkit";
import MyCartReducer from "./MyCartSlice";
import MyProductReducer from "./MyProductSlice";
import MyCommentsReducer from "./MyCommentsSlice";
export const store = configureStore({
  reducer: {
    products: MyProductReducer,
    cart: MyCartReducer,
    comments: MyCommentsReducer,
  },
});
