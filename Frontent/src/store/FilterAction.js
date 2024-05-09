import { createSlice } from "@reduxjs/toolkit";

const FilterSlice = createSlice({
  name: "filterProduct",
  initialState: null,
  reducers: {
    filterAction: (state, action) => {
      return action.payload;
    },
  },
});
export const FilterSliceAction = FilterSlice.actions;
export default FilterSlice;
