import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import auth from '../../services/AuthService';

const initialState = {
  data: null,
  errors: null,
};

export const add = createAsyncThunk(
  'user/add',
  async ({ email, password } = {}) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      try {
        await auth.login(email, password);
      } catch (e) {
        return { data: null, errors: e };
      }
    }

    const response = await auth.me();
    return { data: response, errors: null };
  }
);

export const remove = createAsyncThunk(
  'user/remove',
  async () => await auth.logout()
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(add.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(remove.fulfilled, () => {
        return { data: null, errors: null };
      });
  },
});

export default userSlice.reducer;
