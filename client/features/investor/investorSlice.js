import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchInvestor = createAsyncThunk(
  "investor/fetchInvestor",
  async () => {
    try {
      const response = await axios.get("/investor");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const createInvestor = createAsyncThunk(
  "investor/createInvestor",
  async (data) => {
    try {
      const response = await axios.post("/investor", data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const investorSlice = createSlice({
  name: "investor",
  initialState: {
    investor: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchInvestor.fulfilled, (state, action) => {
      state.investor = action.payload;
      state.error = null;
    });
    builder.addCase(fetchInvestor.rejected, (state, action) => {
      state.investor = null;
      state.error = action.error.message;
    });
    builder.addCase(createInvestor.fulfilled, (state, action) => {
      state.investor = action.payload;
      state.error = null;
    });
    builder.addCase(createInvestor.rejected, (state, action) => {
      state.investor = null;
      state.error = action.error.message;
    });
  },
});

export const selectInvestor = (state) => state.investor.investor;
export const selectInvestorError = (state) => state.investor.error;

export default investorSlice.reducer;
