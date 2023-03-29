import { configureStore } from '@reduxjs/toolkit';
import greetingsSlice from './greetingsSlice';

const store = configureStore({
  reducer: { greeting: greetingsSlice },
});

export default store;
