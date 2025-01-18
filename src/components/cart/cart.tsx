'use client';

import { selectCart } from '@/lib/features/cart/cart-slice';
import { useAppSelector } from '@/lib/hooks';

export default function Cart() {
  const cart = useAppSelector(selectCart);

  return (
    <aside className="w-full">
      <h2>Your Cart ({cart.length})</h2>
      <section>
        {cart.length > 0 ? (
          cart.map((item) => <div key={item.name}>{JSON.stringify(item)}</div>)
        ) : (
          <p>Your cart is empty</p>
        )}
      </section>
    </aside>
  );
}
