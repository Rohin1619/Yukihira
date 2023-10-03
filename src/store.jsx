import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './stores/slices/cartSlice';

const store = configureStore({
    reducer:{
        cart: cartReducer,
    }
})

export default store;