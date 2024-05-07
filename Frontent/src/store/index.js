import { configureStore } from "@reduxjs/toolkit";
import fetchStatusSlice from "./FetchStatusSlice";
import itemSlice from "./ItemSlice";
import bagSlice from "./BagSlice";
import FilterSlice from "./FilterAction";
const MyntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: bagSlice.reducer,
    filterProduct: FilterSlice.reducer,
  },
});

export default MyntraStore;
