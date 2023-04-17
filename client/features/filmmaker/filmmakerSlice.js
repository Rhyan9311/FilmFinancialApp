import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFilmmaker = createAsyncThunk(
  "filmmakers/fetchFilmmaker",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/filmmakers/${id}`);
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState = {
  info: {},
};
export const filmmakerSlice = createSlice({
  name: "filmmakers",
  initialState: {
    filmmaker: {},
    isLoading: false,
    error: null,
  },

  reducers: {
    fetchFilmmakerStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchFilmmakerSuccess(state, action) {
      state.isLoading = false;
      state.filmmaker = action.payload;
    },
    fetchFilmmakerFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilmmaker.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFilmmaker.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filmmaker = action.payload;
      })
      .addCase(fetchFilmmaker.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  fetchFilmmakerStart,
  fetchFilmmakerSuccess,
  fetchFilmmakerFailure,
} = filmmakerSlice.actions;

export default filmmakerSlice.reducer;
