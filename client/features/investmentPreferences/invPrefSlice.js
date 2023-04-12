import { createSlice } from "@reduxjs/toolkit";

export const invPrefFormSlice = createSlice({
  name: "invPrefForm",
  initialState: {},
  reducers: {
    setInvestmentPreferences: (state, action) => {
      return {
        age: action.payload.age,
        riskTolerance: action.payload.riskTolerance,
        investmentAmount: action.payload.investmentAmount,
        investmentLength: action.payload.investmentLength,
      };
    },
  },
});

export const { setInvestmentPreferences } = invPrefFormSlice.actions;

export default invPrefFormSlice.reducer;
