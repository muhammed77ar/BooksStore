import { createSlice } from '@reduxjs/toolkit';

// Get cart data from localStorage, or use an empty array if not found
const loadCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
};

const initialState = loadCartFromLocalStorage();

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.find((item) => item.id === action.payload.id);
            if (existingItem) {
                // Update quantity of existing item
                const updatedState = state.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + action.payload.quantity }
                        : item
                );
                // Save the updated cart to localStorage
                localStorage.setItem('cart', JSON.stringify(updatedState));
                return updatedState;
            } else {
                // Add new item to the cart
                const updatedState = [...state, action.payload];
                // Save the updated cart to localStorage
                localStorage.setItem('cart', JSON.stringify(updatedState));
                return updatedState;
            }
        },
        removeItem: (state, action) => {
            const updatedState = state.filter((item) => item.id !== action.payload); // Use payload directly
            localStorage.setItem('cart', JSON.stringify(updatedState));
            return updatedState;
        },
        resetCart: () => {
            // Remove cart from localStorage when resetting
            localStorage.removeItem('cart');
            return [];
        },
        incrementQuantity: (state, action) => {
            const updatedState = state.map((item) =>
                item.id === action.payload
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            localStorage.setItem('cart', JSON.stringify(updatedState));
            return updatedState;
        },
        decrementQuantity: (state, action) => {
            const updatedState = state.map((item) =>
                item.id === action.payload && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
            localStorage.setItem('cart', JSON.stringify(updatedState));
            return updatedState;
        },
    },
});

export const { addToCart, removeItem, resetCart, incrementQuantity, decrementQuantity} = cartSlice.actions;
export default cartSlice.reducer;
