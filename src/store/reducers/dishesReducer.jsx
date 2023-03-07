import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {
    add: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    addList: (state, action) => {
      const uniqueDishes = action.payload.filter(
        (dish) => !state.list.some((item) => dish.id === item.id)
      );
      state.list = [...uniqueDishes, ...state.list];
    },
    update: (state, action) => {
      state.list = state.list.map((dish) =>
        dish.id === action.payload.id ? action.payload : dish
      );
    },
    remove: (state, action) => {
      state.list = state.list.filter((dish) => dish.id !== action.payload);
    },
  },
  extraReducers: () => {},
});

export const { add, addList, update, remove } = dishesSlice.actions;

export default dishesSlice.reducer;
