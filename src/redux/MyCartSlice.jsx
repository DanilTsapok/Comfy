// import { createSlice } from "@reduxjs/toolkit";

// const MyCartSlice = createSlice({
//   name: "cart",
//   initialState: { list: [], total: 0 },
//   reducers: {
//     addProductsToMyCart(state, action) {
//       const check = state.list.findIndex(
//         (product) => product.id === action.payload.id
//       );
//       if (check !== -1) {
//       } else {
//         state.list.push(action.payload);
//       }
//     },
//   },
// });
// export const { addProductsToMyCart } = MyCartSlice.actions;
// export default MyCartSlice.reducer;
