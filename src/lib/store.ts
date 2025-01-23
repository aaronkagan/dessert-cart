import { configureStore } from '@reduxjs/toolkit';
import CartReducer from '@/lib/features/cart-slice';

export function makeStore() {
  return configureStore({
    reducer: {
      cart: CartReducer,
    },
  });
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
