import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define initial state as an empty array
const initialState = [];

export const fetchAllInvestors = createAsyncThunk("allInvestors", async () => {
  try {
    const response = await axios.get(`/api/investors`);
    console.log("Data received from backend:", response.data);
    return response.data;
  } catch (err) {
    console.log("Error fetching data:", err);
  }
});

const investorSlice = createSlice({
  name: "investor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllInvestors.fulfilled, (state, action) => {
      console.log("Action payload:", action.payload);
      return action.payload;
    });
  },
});

export const selectInvestors = (state) => {
  console.log(state);
  return state.investors;
};

export default investorSlice.reducer;
