import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    isFetchDone: false,
    isCurrentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.isFetchDone = true;
    },
    markFetchingStarted: (state) => {
      state.isCurrentlyFetching = true;
    },
    markFetchingFinished: (state) => {
      state.isCurrentlyFetching = false;
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
