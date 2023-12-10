import { createSlice } from "@reduxjs/toolkit";

const MyCartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProductsToMyCart(state, action) {
      let myIndex = -1;
      state.map((item, index) => {
        if (item.id == action.payload.id) {
          myIndex = index;
        }
      });
      if (myIndex == -1) {
        state.push({
          id: action.payload.id,
          subname: action.payload.subname,
          price: action.payload.price,
          qty: action.payload.aty + 1,
        });
      } else {
        state[myIndex].qty = state[myIndex].qty + 1;
      }
    },
    removeMyCartItem(state, action) {
      let myIndex = -1;
      state.map((item, index) => {
        if (item.id == action.payload.id) {
          myIndex = index;
        }
      });
      if (myIndex == -1) {
      } else {
        state[myIndex].qty = state[myIndex].qty - 1;
      }
    },
    deleteItem(state, action) {
      return (state = state.filter((item) => item.id != action.payload));
    },
  },
});

export const { addProductsToMyCart, removeMyCartItem, deleteItem } =
  MyCartSlice.actions;
export default MyCartSlice.reducer;
