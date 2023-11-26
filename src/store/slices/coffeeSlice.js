import { createSlice } from "@reduxjs/toolkit";

const coffeesSlice = createSlice({
  name: "coffees",
  initialState: [],
  reducers: {
    updateCofeeList(state, action) {
      state = action.payload;
    },
  },
});


export const {updateCofeeList} = coffeesSlice.actions;
export const coffeesReducer = coffeesSlice.reducer;