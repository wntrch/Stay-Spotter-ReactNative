import { configureStore } from "@reduxjs/toolkit";
import { listingsReducer } from "../data/listingsSlice";

export const store = configureStore({
  reducer: {
    listings: listingsReducer,
  },
});
