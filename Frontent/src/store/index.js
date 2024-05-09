import { configureStore } from "@reduxjs/toolkit";
import fetchStatusSlice from "./FetchStatusSlice";
import itemSlice from "./ItemSlice";
import bagSlice from "./BagSlice";
import FilterSlice from "./FilterAction";
import sortSlice from "./SortSlice";
const MyntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: bagSlice.reducer,
    filterProduct: FilterSlice.reducer,
    products: sortSlice.reducer,
  },
});

export default MyntraStore;
