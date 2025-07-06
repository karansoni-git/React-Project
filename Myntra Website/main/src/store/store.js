import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";

const myntraStore = configureStore({
  reducer: {
    useItemsSlice: itemsSlice.reducer,
    useFetchStatusSlice: fetchStatusSlice.reducer,
    useBagSlice: bagSlice.reducer,
  },
});

export default myntraStore;
