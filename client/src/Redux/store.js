import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice"
import booksSlice from "./BooksSlice"
import { cartSlice } from "./CartSlice";

const store = configureStore({
    reducer : {
        auth : authSlice,
        books : booksSlice,
        cart: cartSlice, 
    }
})

export default store;