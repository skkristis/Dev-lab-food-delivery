import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const restaurantsClientSlice = createSlice({
  name: 'restaurantsClient',
  initialState,
  reducers: {
    addToRestaurantList: (state, action) => {
      state.list = [...state.list, ...action.payload];
    },
  },
});

export const { addToRestaurantList } = restaurantsClientSlice.actions;

export default restaurantsClientSlice.reducer;
