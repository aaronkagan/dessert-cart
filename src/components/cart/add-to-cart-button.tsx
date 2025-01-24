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
import Image from 'next/image';

export default function AddToCartButton({ product }: { product: Product }) {
  const dispatch = useAppDispatch();
  const cartQty = getCartQty(product.name);

  return (
    <div className="border border-[#231818] w-[10rem] rounded-full px-4 py-2 flex justify-center">
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
          className="text-[#231818] font-bold flex items-center gap-2 text-sm"
        >
          <Image
            src="/images/icon-add-to-cart.svg"
            alt="add to cart"
            height={10}
            width={10}
            className="w-4 h-4"
          />{' '}
          Add To Cart
        </button>
      )}
    </div>
  );
}
