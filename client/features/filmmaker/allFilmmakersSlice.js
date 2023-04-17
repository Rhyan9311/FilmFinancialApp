// // Import necessary functions and modules
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Define initial state
// // const initialState = null;
// // const initialState = [];
// // console.log([]);

// // Define initial state as an empty array
// const initialState = [];

// // Make a synchronous request to fetch the filmmakers data from the backend API
// axios
//   .get("/api/filmmakers")
//   .then((response) => {
//     // If the request is successful, set the response data as the initial state
//     console.log(response.data);
//     return response.data;
//   })
//   .catch((error) => {
//     // If the request fails, log the error message
//     console.log(error);
//   });

// // Create an async thunk to fetch filmmakers data from the backend API
// export const fetchFilmmakers = createAsyncThunk("allFilmmakers", async () => {
//   try {
//     const { data } = await axios.get(`/api/filmmakers`);
//     console.log("Data received from backend:", data);
//     return data;
//   } catch (err) {
//     console.log("Error fetching data:", err);
//   }
// });

// // Define the filmmakers slice with a name, initial state, and reducers
// const filmmakersSlice = createSlice({
//   name: "filmmakers",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     // Add a case for when the async thunk has been fulfilled
//     builder.addCase(fetchFilmmakers.fulfilled, (state, action) => {
//       console.log("Action payload:", action.payload);
//       // Add the received filmmakers to the state array
//       return action.payload;
//     });
//   },
// });

// // Create a selector to retrieve the filmmakers state
// export const selectFilmmakers = (state) => {
//   console.log(state);
//   return state.filmmakers || [];
// };

// // Export the filmmakers reducer
// export default filmmakersSlice.reducer;

// // export const selectFilmmakers = createSelector(
// //   (state) => state.filmmakers,
// //   (filmmakers) => {
// //     console.log("Filmmakers in selector:", filmmakers);
// //     return filmmakers;
// //   }
// // );

// Import necessary functions and modules
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define initial state as an empty array
const initialState = [];

// Create an async thunk to fetch filmmakers data from the backend API
export const fetchFilmmakers = createAsyncThunk("allFilmmakers", async () => {
  try {
    const response = await axios.get(`/api/filmmakers`);
    console.log("Data received from backend:", response.data);
    return response.data;
  } catch (err) {
    console.log("Error fetching data:", err);
  }
});

// Define the filmmakers slice with a name, initial state, and reducers
const filmmakersSlice = createSlice({
  name: "filmmakers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add a case for when the async thunk has been fulfilled
    builder.addCase(fetchFilmmakers.fulfilled, (state, action) => {
      console.log("Action payload:", action.payload);
      // Add the received filmmakers to the state array
      return action.payload;
    });
  },
});

// Create a selector to retrieve the filmmakers state
export const selectFilmmakers = (state) => {
  console.log(state);
  // return state.filmmakers || [];
  return state.filmmakers;
};

// Export the filmmakers reducer
export default filmmakersSlice.reducer;
