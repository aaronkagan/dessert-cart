import { selectCart } from './lib/features/cart-slice';
import { useAppSelector } from './lib/hooks';

export function getCartQty(productName: string) {
  const cart = useAppSelector(selectCart);

  let cartQty = 0;

  cart.forEach((elem) =>
    elem.name === productName ? (cartQty = elem.qty) : null
  );

  return cartQty;
}
