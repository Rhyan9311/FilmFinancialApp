import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFilmmakers } from "../../../server/api/filmmaker";

export const fetchAllFilmmakers = createAsyncThunk(
  "allFilmmakers/fetchAllFilmmakers",
  async () => {
    const response = await getFilmmakers();
    return response.data;
  }
);

const allFilmmakersSlice = createSlice({
  name: "allFilmmakers",
  initialState: {
    filmmakers: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchAllFilmmakers.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchAllFilmmakers.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.filmmakers = action.payload;
    },
    [fetchAllFilmmakers.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default allFilmmakersSlice.reducer;
