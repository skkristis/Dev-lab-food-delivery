import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    changeAmount: (state, action) => {
      state.list = state.list
        .map((dish) => {
          if (dish.id === action.payload.id) {
            return action.payload.index === 1
              ? { ...dish, quantity: dish.quantity + 1 }
              : { ...dish, quantity: dish.quantity - 1 };
          }
          return dish;
        })
        .filter((dish) => {
          return dish.quantity > 0;
        });
    },
  },
  extraReducers: () => {},
});

export const { add, changeAmount } = cartSlice.actions;

export default cartSlice.reducer;
