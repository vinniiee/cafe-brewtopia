import { createSlice } from "@reduxjs/toolkit";

export const initialSortState = {
  sortBy: "",
  withMilk: "",
  served: "",
};

const sortSlice = createSlice({
  name: "sort",
  initialState:initialSortState,
  reducers: {
    updateSortParams(state, action) {
      return { ...state, ...action.payload };
    },
    resetSortParams() {
      return initialSortState;
    },
  },
});

export const { updateSortParams,resetSortParams } = sortSlice.actions;
export const sortReducer = sortSlice.reducer;
