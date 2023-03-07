import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const restaurantsManagementSlice = createSlice({
  name: 'restaurantsManagement',
  initialState,
  reducers: {
    add: (state, action) => {
      state.list = [action.payload, ...state.list];
    },
    update: (state, action) => {
      state.list = state.list.map((restaurant) =>
        restaurant.id === action.payload.id ? action.payload : restaurant
      );
    },
    remove: (state, action) => {
      state.list = state.list.filter(
        (restaurant) => restaurant.id !== action.payload
      );
    },
  },
  extraReducers: () => {},
});

export const { add, update, remove } = restaurantsManagementSlice.actions;

export default restaurantsManagementSlice.reducer;
