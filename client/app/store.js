// import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import authReducer from '../features/auth/authSlice';
// import invPrefSlice from '../features/investmentPreferences/invPrefSlice';
// // import allFilmmakersSlice from '../features/filmmaker/allFilmmakersSlice';

// const store = configureStore({
//   reducer:
//   { auth: authReducer },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
//   invPrefForm: invPrefSlice,
//   // allFilmmakers: allFilmmakersSlice,

// });

// export default store;
// export * from '../features/auth/authSlice';
// // export * from '../features/filmmakers/allFilmmakersSlice';

// // import { configureStore } from '@reduxjs/toolkit';
// // import logger from 'redux-logger';
// // import authReducer from '../features/auth/authSlice';
// // import invPrefSlice from '../features/investmentPreferences/invPrefSlice';
// // import allFilmmakersSlice from '../features/filmmakers/allFilmmakersSlice';

// // const store = configureStore({
// //   reducer: {
// //     auth: authReducer,
// //     invPrefForm: invPrefSlice,
// //     allFilmmakers: allFilmmakersSlice
// //   },
// //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
// // });

// // export default store;
// // export * from '../features/auth/authSlice';
// // export * from '../features/filmmakers/allFilmmakersSlice';

import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import invPrefSlice from "../features/investmentPreferences/invPrefSlice";
import investorSlice from "../features/investor/investorSlice";
import filmmakerSlice from "../features/filmmaker/filmmakerSlice";
import allFilmmakersSlice from "../features/filmmaker/allFilmmakersSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    invPrefForm: invPrefSlice,
    investor: investorSlice,
    filmmaker: filmmakerSlice,
    allFilmmakers: allFilmmakersSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
