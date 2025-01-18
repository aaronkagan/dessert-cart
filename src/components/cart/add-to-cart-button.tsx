'use client';

import { useAppSelector } from '@/lib/hooks';
import { selectCart } from '@/lib/features/cart/cart-slice';
import { Product } from '@/types';

export default function AddToCartButton({ product }: { product: Product }) {
  const cart = useAppSelector(selectCart);

  const cartQty = cart.reduce(
    (_, currVal) => (currVal.name === product.name ? currVal.qty : 0),
    0
  );

  return (
    <div className="border w-[10rem] rounded-full px-4 flex justify-center">
      {cartQty > 0 ? (
        <button className="flex gap-5 items-center">
          <span>-</span>
          {cartQty} <span>+</span>
        </button>
      ) : (
        <button>+ Add To Cart</button>
      )}
    </div>
  );
}
