import { CartItem } from './types';

export function getCartTotal(cart: CartItem[]) {
  return cart
    .map((item) => item.price * item.qty)
    .reduce((acc, currVal) => (acc += currVal), 0)
    .toFixed(2);
}
