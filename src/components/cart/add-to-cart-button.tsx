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
    <div className="w-[10rem] rounded-full flex justify-center">
      {cartQty > 0 ? (
        <button className="flex w-full justify-between items-center bg-[#c43d10] text-white rounded-full px-4 py-2">
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
            className=" rounded-full w-4 h-4 flex items-center justify-center border"
          >
            {' '}
            <Image
              width={8}
              height={8}
              src="/images/icon-decrement-quantity.svg"
              alt="decrement quantity"
            />
          </span>
          {cartQty}
          <span
            onClick={() => {
              if (product.stock > 0) {
                dispatch(increaseQty(product.name));
                dispatch(decreaseStock(product.name));
              }
            }}
            className=" rounded-full w-4 h-4 flex items-center justify-center border"
          >
            <Image
              width={8}
              height={8}
              src="/images/icon-increment-quantity.svg"
              alt="increment quantity"
            />
          </span>
        </button>
      ) : product.stock > 0 ? (
        <button
          onClick={() => {
            if (product.stock > 0) {
              dispatch(addToCart(product));
              dispatch(decreaseStock(product.name));
            }
          }}
          className="text-[#231818] font-bold flex items-center gap-2 text-sm px-4 py-2 border rounded-full w-full justify-center border-[#c43d10]"
        >
          <Image
            src="/images/icon-add-to-cart.svg"
            alt="add to cart"
            height={10}
            width={10}
            className="w-4 h-4"
          />
          Add To Cart
        </button>
      ) : (
        <button
          onClick={() => {
            if (product.stock > 0) {
              dispatch(addToCart(product));
              dispatch(decreaseStock(product.name));
            }
          }}
          className="font-bold flex items-center gap-2 text-sm px-4 py-2 border rounded-full w-full justify-center bg-black text-white"
        >
          Out of Stock
        </button>
      )}
    </div>
  );
}
