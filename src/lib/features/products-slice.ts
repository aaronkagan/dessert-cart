import { RootState } from '@/lib/store';
import { Product } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { data } from '../../../public/data';

const initialState: Product[] = [...data];

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    increaseStock: (state, action: PayloadAction<string>) => {
      return state.map((item) =>
        item.name === action.payload ? { ...item, stock: item.stock + 1 } : item
      );
    },
    decreaseStock: (state, action: PayloadAction<string>) => {
      return state.map((item) => {
        return item.name === action.payload
          ? { ...item, stock: item.stock - 1 }
          : item;
      });
    },
    resetStock: (state, action: PayloadAction<string>) => {
      return state.map((item, index) =>
        item.name === action.payload
          ? { ...item, stock: initialState[index].stock }
          : item
      );
    },
  },
});

export const { increaseStock, decreaseStock, resetStock } =
  productsSlice.actions;
export const selectProducts = (state: RootState) => state.products;
export default productsSlice.reducer;
