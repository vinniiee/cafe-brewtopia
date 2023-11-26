import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortBy: "",
  withMilk: "",
  served: "",
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    updateSortParams(state, action) {
      return { ...state, ...action.payload };
    },
    resetSortParams() {
      return initialState;
    },
  },
});

export const { updateSortParams,resetSortParams } = sortSlice.actions;
export const sortReducer = sortSlice.reducer;
