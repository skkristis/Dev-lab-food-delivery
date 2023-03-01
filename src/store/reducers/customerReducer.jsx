import { createSlice } from '@reduxjs/toolkit';
import customer from '../../features/client/mocks/customer';

const initialState = customer;

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    add: (state, action) => {
      state = action.payload;
    },
    edit: (state, action) => {
      state = { ...state, ...action.payload };
    },
    remove: (state) => {
      state = {};
    },
    addAddress: (state, action) => {
      state.addressBook = [action.payload, ...state.addressBook];
    },
    editAddress: (state, action) => {
      state.addressBook = state.addressBook.map((address) =>
        address.id === action.payload.id
          ? { ...address, ...action.payload }
          : address
      );
    },
    setPrimaryAddress: (state, action) => {
      state.addressBook = state.addressBook
        .map((address) =>
          address.primary ? { ...address, primary: false } : address
        )
        .map((address) =>
          address.id === action.payload
            ? { ...address, primary: true }
            : address
        );
    },
    removeAddress: (state, action) => {
      state.addressBook = state.addressBook.filter(
        (address) => address.id !== action.payload
      );
    },
  },
  extraReducers: () => {},
});

export const {
  add,
  edit,
  remove,
  addAddress,
  editAddress,
  setPrimaryAddress,
  removeAddress,
} = customerSlice.actions;

export default customerSlice.reducer;
