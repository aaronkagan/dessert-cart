import { selectCart } from './lib/features/cart-slice';
import { useAppSelector } from './lib/hooks';
import { CartItem } from './types';

export function getCartQty(productName: string) {
  const cart = useAppSelector(selectCart);

  let cartQty = 0;

  cart.forEach((elem) =>
    elem.name === productName ? (cartQty = elem.qty) : null
  );

  return cartQty;
}

export function getCartTotal(cart: CartItem[]) {
  return cart
    .map((item) => item.price * item.qty)
    .reduce((acc, currVal) => (acc += currVal), 0)
    .toFixed(2);
}
