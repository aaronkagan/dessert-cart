import { RootState } from '@/lib/store';
import { CartItem, Product } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: CartItem[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.push({
        name: action.payload.name,
        price: action.payload.price,
        qty: 1,
        image: action.payload.image.thumbnail,
      });
    },
    // Using the item name as the payload
    removeFromCart: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.name !== action.payload);
    },
    // Using the item name as the payload
    increaseQty: (state, action: PayloadAction<string>) => {
      return state.map((item) =>
        item.name === action.payload ? { ...item, qty: item.qty + 1 } : item
      );
    },
    // Using the item name as the payload
    decreaseQty: (state, action: PayloadAction<string>) => {
      return state.map((item) =>
        item.name === action.payload ? { ...item, qty: item.qty - 1 } : item
      );
    },
    resetCart: (state) => {
      state.length = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  resetCart,
} = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart;
export default cartSlice.reducer;
