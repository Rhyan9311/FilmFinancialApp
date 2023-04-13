import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFilmmakers } from "../../../server/api/filmmaker";
import axios from "axios";

// export const fetchAllFilmmakers = createAsyncThunk(
//   "filmmakers/fetchAllFilmmakers",
//   async () => {
//     const response = await getFilmmakers();
//     return response.data;
//   }
// );

export const fetchAllFilmmakersAsync = createAsyncThunk(
  "filmmakers/fetchAllFilmmakers",
  async () => {
    try {
      const { data } = await axios.get(`/api/filmmakers`);
      return data;
    } catch (err) {
      console.log(err);
    }
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
