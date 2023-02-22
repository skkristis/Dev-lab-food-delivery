import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: 1,
      restaurant: {
        name: "Rest name #1",
        address: "Vilnius, Gedimino pr. 1",
      },
      customer: {
        name: "Customer #1",
        address: "Vilnius, Ausros Vartu g. 1",
      },
      payment: {
        total: 125,
        method: "card",
      },
      status: "pending",
    },
    {
      id: 2,
      restaurant: {
        name: "Rest name #2",
        address: "Vilnius, Gedimino pr. 2",
      },
      payment: {
        total: 225,
        method: "cash",
      },
      customer: {
        name: "Customer #2",
        address: "Vilnius, Ausros Vartu g. 2",
      },
      status: "pending",
    },
    {
      id: 3,
      restaurant: {
        name: "Rest name #3",
        address: "Vilnius, Gedimino pr. 3",
      },
      payment: {
        total: 325,
        method: "card",
      },
      customer: {
        name: "Customer #3",
        address: "Vilnius, Ausros Vartu g. 3",
      },
      status: "pending",
    },
  ],
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    add: (state, action) => {
      state.list = [action.payload, ...state.list];
    },
    edit: (state, action) => {
      state.list = state.list.map((order) =>
        order.id === action.payload.id ? action.payload : order
      );
    },
    remove: (state, action) => {
      state.list = state.list.filter((order) => order.id !== action.payload);
    },
  },
  extraReducers: (builder) => {},
});

export const { add, edit, remove } = ordersSlice.actions;

export default ordersSlice.reducer;
