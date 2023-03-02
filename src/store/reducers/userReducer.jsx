import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import auth from '../../services/AuthService';

const initialState = {
  data: null,
};

export const add = createAsyncThunk('user/add', async ({ email, password }) => {
  await auth.login(email, password);
  return await auth.me();
});

export const remove = createAsyncThunk('user/remove', () => auth.logout());

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(add.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(remove.fulfilled, (state) => {
        state.data = null;
      });
  },
});

export default userSlice.reducer;
