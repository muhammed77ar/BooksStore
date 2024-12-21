import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";
import booksSlice from "./BooksSlice";
import cartReducer from "./CartSlice";
import genresSlice from "./GenresSlice";
import notificationsSlice from "./NotificationsSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        books: booksSlice,
        cart: cartReducer, 
        genres: genresSlice,
        notifications : notificationsSlice
    },
});

export default store;
