import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    set: (state, action) => {
      state = action.payload;
    },
  },
});

export const { set } = sessionSlice.actions;

export default sessionSlice.reducer;
