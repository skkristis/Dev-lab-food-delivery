import { createSlice } from '@reduxjs/toolkit';
import customer from '../../features/client/mocks/customer';

const initialState = customer;

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    edit: (state, action) => {
      state = { ...state, ...action.payload };
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
    setPreferPayment: (state, action) => {
      state.payment.prefer = action.payload;
    },
    addCard: (state, action) => {
      state.payment.cards = [action.payload, ...state.payment.cards];
    },
    editCard: (state, action) => {
      state.payment.cards = state.payment.cards.map((card) =>
        card.id === action.payload.id ? { ...card, ...action.payload } : card
      );
    },
    setPrimaryCard: (state, action) => {
      state.payment.cards = state.payment.cards
        .map((card) => (card.primary ? { ...card, primary: false } : card))
        .map((card) =>
          card.id === action.payload ? { ...card, primary: true } : card
        );
    },
    removeCard: (state, action) => {
      state.payment.cards = state.payment.cards.filter(
        (card) => card.id !== action.payload
      );
    },
  },
  extraReducers: () => {},
});

export const {
  edit,
  addAddress,
  editAddress,
  setPrimaryAddress,
  removeAddress,
  setPreferPayment,
  addCard,
  editCard,
  setPrimaryCard,
  removeCard,
} = customerSlice.actions;

export default customerSlice.reducer;
