'use client';

import { removeFromCart, selectCart } from '@/lib/features/cart-slice';
import { resetStock } from '@/lib/features/products-slice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Image from 'next/image';

export default function Cart() {
  const cart = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  return (
    <aside className="w-full bg-white rounded-lg p-5 h-fit">
      <h2 className="font-bold text-[#b93c11] text-xl">
        Your Cart ({cart.length})
      </h2>
      <section>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div
              key={item.name}
              className="flex gap-4 border-b-[1px] py-1 mt-2"
            >
              <div className="flex justify-between w-full">
                <div className="w-full">
                  <div className="flex flex-col gap-1">
                    <p className="font-bold text-sm">{item.name}</p>
                    <div className="flex items-center">
                      <p className="mr-5 text-[#b93c11] font-semibold">
                        {item.qty}x
                      </p>
                      <p className="mr-2 opacity-50">
                        <span className="text-xs">@</span>$
                        {item.price.toFixed(2)}
                      </p>
                      <p className="font-semibold">
                        ${(item.price * item.qty).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  dispatch(removeFromCart(item.name));
                  dispatch(resetStock(item.name));
                }}
              >
                <Image
                  src="/images/icon-remove-item.svg"
                  className="w-3 h-3"
                  width={50}
                  height={50}
                  alt="remove item"
                />
              </button>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center mt-5">
            <Image
              src="/images/illustration-empty-cart.svg"
              alt="empty cart"
              height={150}
              width={150}
            />
            <p className="text-center mt-5 text-[#796662] font-bold">
              Your added items will appear here
            </p>
          </div>
        )}
      </section>
    </aside>
  );
}
