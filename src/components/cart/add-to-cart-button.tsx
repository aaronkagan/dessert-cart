'use client';

import { useAppDispatch } from '@/lib/hooks';
import {
  addToCart,
  decreaseQty,
  increaseQty,
  removeFromCart,
} from '@/lib/features/cart-slice';
import {
  decreaseStock,
  increaseStock,
  resetStock,
} from '@/lib/features/products-slice';

import { Product } from '@/types';
import { getCartQty } from '@/utils';

export default function AddToCartButton({ product }: { product: Product }) {
  const dispatch = useAppDispatch();
  const cartQty = getCartQty(product.name);

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
              if (product.stock > 0) {
                dispatch(increaseQty(product.name));
                dispatch(decreaseStock(product.name));
              }
            }}
          >
            +
          </span>
        </button>
      ) : (
        <button
          onClick={() => {
            if (product.stock > 0) {
              dispatch(addToCart(product));
              dispatch(decreaseStock(product.name));
            }
          }}
        >
          + Add To Cart
        </button>
      )}
    </div>
  );
}
