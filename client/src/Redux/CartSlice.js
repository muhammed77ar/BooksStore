import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.books.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.books.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.books = state.books.filter((item) => item.id !== action.payload.id);
    },
    resetCart: (state) => {
      state.books = [];
    },
  },
});

export const { addToCart, removeItem, resetCart } = cartSlice.actions;
export const getAllbooks = (state) => state.cart.books;

export default cartSlice.reducer;
