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
      state.list = state.list.map((merchant) =>
        merchant.id === action.payload.id ? action.payload : merchant
      );
    },
    remove: (state, action) => {
      state.list = state.list.filter(
        (merchant) => merchant.id !== action.payload
      );
    },
    addItem: (state, action) => {
      state.list = state.list.map((merchant) => {
        if (merchant.id !== action.payload.merchant_id) {
          return merchant;
        }
        return {
          ...merchant,
          items: [...merchant.items, action.payload],
        };
      });
    },
    updateItem: (state, action) => {
      state.list = state.list.map((merchant) => {
        if (merchant.id !== action.payload.merchant_id) {
          return merchant;
        }

        return {
          ...merchant,
          items: merchant.items.map((item) =>
            item.id === action.payload.id ? action.payload : item
          ),
        };
      });
    },
    removeItem: (state, action) => {
      state.list = state.list.map((merchant) => {
        if (merchant.id !== action.payload.merchant_id) {
          return merchant;
        }
        return {
          ...merchant,
          items: merchant.items.filter((item) => item.id !== action.payload),
        };
      });
    },
  },
  extraReducers: () => {},
});

export const { add, update, remove, addItem, updateItem, removeItem } =
  restaurantsManagementSlice.actions;

export default restaurantsManagementSlice.reducer;
