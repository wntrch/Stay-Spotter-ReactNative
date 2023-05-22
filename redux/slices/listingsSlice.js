import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchListings = createAsyncThunk(
  "listings/fetchListings",
  async () => {
    const response = await fetch("listings");
    if (!response.ok) {
      return Promise.reject("Unable to fetch, status: " + response.status);
    }
    const data = await response.json();
    return data;
  }
);

const listingsSlice = createSlice({
  name: "listings",
  initialState: { isLoading: true, errMess: null, listingsArray: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchListings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errMess = null;
        state.listingsArray = action.payload;
      })
      .addCase(fetchListings.rejected, (state, action) => {
        state.isLoading = false;
        state.errMess = action.error ? action.error.message : "Fetch failed";
      });
  },
});

export default listingsReducer = listingsSlice.reducer;
