import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const filmmakerSlice = createSlice({
  name: "filmmaker",
  initialState: {
    filmmaker: null,
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
});

export const {
  fetchFilmmakerStart,
  fetchFilmmakerSuccess,
  fetchFilmmakerFailure,
} = filmmakerSlice.actions;

export const fetchFilmmaker = (filmmakerId) => async (dispatch) => {
  dispatch(fetchFilmmakerStart());
  try {
    const response = await axios.get(`/api/filmmakers/${filmmakerId}`);
    dispatch(fetchFilmmakerSuccess(response.data));
  } catch (error) {
    dispatch(fetchFilmmakerFailure(error.message));
  }
};

export default filmmakerSlice.reducer;

