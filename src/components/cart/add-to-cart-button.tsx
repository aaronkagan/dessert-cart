'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import {
  addToCart,
  decreaseQty,
  increaseQty,
  removeFromCart,
  selectCart,
} from '@/lib/features/cart-slice';
import {
  decreaseStock,
  increaseStock,
  resetStock,
} from '@/lib/features/products-slice';

import { Product } from '@/types';

export default function AddToCartButton({ product }: { product: Product }) {
  const cart = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  let cartQty = 0;

  cart.forEach((elem) =>
    elem.name === product.name ? (cartQty = elem.qty) : null
  );

  return (
    <div className="border w-[10rem] rounded-full px-4 flex justify-center">
      {cartQty > 0 ? (
        <button className="flex gap-5 items-center">
          <span
            onClick={() => {
              if (cartQty > 1) {
                dispatch(decreaseQty(product.name));
                dispatch(increaseStock(product.name));
              } else {
                dispatch(removeFromCart(product.name));
                dispatch(resetStock(product.name));
              }
            }}
          >
            -
          </span>
          {cartQty}
          <span
            onClick={() => {
              dispatch(increaseQty(product.name));
              dispatch(decreaseStock(product.name));
            }}
          >
            +
          </span>
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch(addToCart(product));
            dispatch(decreaseStock(product.name));
          }}
        >
          + Add To Cart
        </button>
      )}
    </div>
  );
}
