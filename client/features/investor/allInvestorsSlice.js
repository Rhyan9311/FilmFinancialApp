import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllInvestors = createAsyncThunk(
  "investors/fetchAllInvestors",
  async () => {
    try {
      const { data } = await axios.get(`/api/investors`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const investorSlice = createSlice({
  name: "investor",
  initialState: {
    investors: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllInvestors.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllInvestors.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.investors = action.payload;
      })
      .addCase(fetchAllInvestors.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default investorSlice.reducer;
