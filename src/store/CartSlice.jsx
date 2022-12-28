import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        isLoading: true
    },
    reducers: {
        add(state, action) {
            state.cart.push(action.payload);
        },

        remove(state, action) {
            return state.cart.filter(item => item.id !== action.payload)
        }
    }
})
export const { add, remove } = cartSlice.actions;
export const getState = (state) => state;
export const getCart = (state) => state.cart.cart;
export default cartSlice.reducer;