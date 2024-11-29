import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice"
import booksSlice from "./BooksSlice"

const store = configureStore({
    reducer : {
        auth : authSlice,
        books : booksSlice
    }
})

export default store;