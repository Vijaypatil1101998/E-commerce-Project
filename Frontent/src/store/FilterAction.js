import { createSlice } from "@reduxjs/toolkit";

const FilterSlice = createSlice({
  name: "filterProduct",
  initialState: [],
  reducers: {
    filterAction: (state, action) => {
      return action.payload;
    },
  },
});
export const FilterSliceAction = FilterSlice.actions;
export default FilterSlice;
