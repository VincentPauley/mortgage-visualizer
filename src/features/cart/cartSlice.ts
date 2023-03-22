import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increaseAmount: state => {
      console.log('hitting');
      state.amount += 1;
    }
  }
});

export const { increaseAmount } = cartSlice.actions;

export default cartSlice.reducer;
