import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    toggleFavorite: (favorites, action) => {
      if (favorites.includes(action.payload)) {
        return favorites.filter((favorite) => favorite !== action.payload);
      } else {
        return [...favorites, action.payload];
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesReducer = favoritesSlice.reducer;
