import { configureStore } from "@reduxjs/toolkit";
import {
  resetSortParams,
  sortReducer,
  updateSortParams,
} from "./slices/sortSlice";
import { coffeesReducer, updateCofeeList } from "./slices/coffeeSlice";

const store = configureStore({
  reducer: {
    sort: sortReducer,
    coffes: coffeesReducer,
  },
});
export { store, updateSortParams, resetSortParams, updateCofeeList };
