import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      //already destructured items are coming from dispatch function in FetchItems element
      return action.payload;
      //destructure here or while dispatching the items through dispatch
      // let { items } = action.payload;
      // return items;
    },
  },
});

export const itemsActions = itemsSlice.actions;
export default itemsSlice;
