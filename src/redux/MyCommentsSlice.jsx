import { createSlice } from "@reduxjs/toolkit";
import MyCartSlice from "./MyCartSlice";

const MyCommentsSlice = createSlice({
  name: "comments",
  initialState: [],
  reducers: {
    addComments(state, action) {
      let myIndex = -1;
      state.map((item, index) => {
        if (item.id == action.payload.id) {
          myIndex = index;
        }
      });
      if (myIndex == -1) {
        state.push({
          id: action.payload.id,
          name: action.payload.name,
          value: action.payload.value,
          advantages: action.payload.advantages,
          disadvantages: action.payload.disadvantages,
          qty: action.payload.qty,
        });
      } else {
        state[myIndex].qty = state[myIndex].qty + 1;
      }
    },
  },
});

export const { addComments } = MyCommentsSlice.actions;
export default MyCartSlice.reducer;
