import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";
import booksSlice from "./BooksSlice";
import cartReducer from "./CartSlice";  // Use cartReducer here

const store = configureStore({
    reducer: {
        auth: authSlice,
        books: booksSlice,
        cart: cartReducer,  // Use cartReducer in the store
    },
});

export default store;
