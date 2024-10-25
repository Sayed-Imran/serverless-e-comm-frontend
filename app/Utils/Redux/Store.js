import { configureStore } from '@reduxjs/toolkit';
import loaderReducer from './LoaderSlice'

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
  },
});