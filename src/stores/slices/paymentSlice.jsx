import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    savedCart: [],
};

const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        saveCart: (state, action) => {
            state.savedCart = action.payload;
        },
        openDialog: (state) => {
            state.isOpen = true;
        },
        closeDialog: (state) => {
            state.isOpen = false;
        },
        setSelectedOption: (state, action) => {
            state.selectedOption = action.payload;
        },
    },
});

export const { saveCart, openDialog, closeDialog, setSelectedOption } = paymentSlice.actions;
export default paymentSlice.reducer;