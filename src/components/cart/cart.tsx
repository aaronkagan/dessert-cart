'use client';

import { removeFromCart, selectCart } from '@/lib/features/cart-slice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Image from 'next/image';

export default function Cart() {
  const cart = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  return (
    <aside className="w-full">
      <h2>Your Cart ({cart.length})</h2>
      <section>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.name} className="flex gap-4">
              <div className="flex justify-between w-full">
                <table className="w-full">
                  <tbody>
                    <tr className="flex justify-between">
                      <td>{item.name}</td>
                      <td className="bg-red-50">${item.price.toFixed(2)}</td>
                      <td>{item.qty}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button onClick={() => dispatch(removeFromCart(item.name))}>
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
          <p>Your cart is empty</p>
        )}
      </section>
    </aside>
  );
}
