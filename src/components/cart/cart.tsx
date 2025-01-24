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
            <div key={item.name} className="flex gap-4">
              <div className="flex justify-between w-full">
                <table className="w-full">
                  <tbody>
                    <tr className="flex justify-between">
                      <td>{item.name}</td>
                      <td className="bg-red-50">
                        ${(item.price * item.qty).toFixed(2)}
                      </td>
                      <td>{item.qty}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button
                onClick={() => {
                  dispatch(removeFromCart(item.name));
                  dispatch(resetStock(item.name));
                }}
              >
                <Image
                  src="/images/icon-remove-item.svg"
                  className="w-4 h-4"
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
