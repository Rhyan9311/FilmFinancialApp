import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import invPrefSlice from '../features/investmentPreferences/invPrefSlice';

const store = configureStore({
  reducer: { auth: authReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  invPref: invPrefSlice,

});

export default store;
export * from '../features/auth/authSlice';
