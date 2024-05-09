import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], // Initial state with an empty array of products
};

const sortSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    sortProductsByLowPrice(state) {
      state.products.sort((a, b) => a.current_price - b.current_price);
    },
    sortProductsByHighPrice(state) {
      state.products.sort((a, b) => b.current_price - a.current_price);
    },
  },
});

export const sortSliceActions = sortSlice.actions;

export default sortSlice;
