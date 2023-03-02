import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      // state.list = [...state.list, action.payload];

      let existingItem = state.list.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          list: state.list.map((dish) => {
            return dish.id === action.payload.id
              ? {
                  ...dish,
                  quantity: dish.quantity + action.payload.quantity,
                }
              : dish;
          }),
        };
      }
      return { ...state, list: [...state.list, action.payload] };
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
