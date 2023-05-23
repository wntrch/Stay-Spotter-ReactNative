import { configureStore } from "@reduxjs/toolkit";
import listingsReducer from "./slices/listingsSlice";
import favoritesReducer from "./slices/favoritesSlice";

export const store = configureStore({
  reducer: {
    listings: listingsReducer,
    favorites: favoritesReducer,
  },
});

export default store;
