import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: '' };

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {
    getGreetings(state, action) {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

export const greetingsActions = greetingsSlice.actions;

export default greetingsSlice.reducer;
