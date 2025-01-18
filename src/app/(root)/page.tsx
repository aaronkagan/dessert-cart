import DesertCard from '@/components/desert-card';
import { Metadata } from 'next';
import { data as products } from '../../../public/data';
import Cart from '@/components/cart/cart';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <div className="max-w-[90%] mx-auto ">
      <h1 className="font-bold text-2xl">Desserts</h1>
      <div className="grid grid-cols-3 gap-10 mt-5">
        <section className="grid md:grid-cols-4 gap-5 col-span-2">
          {products.map((product) => (
            <DesertCard key={product.name} product={product}></DesertCard>
          ))}
        </section>
        <Cart />
      </div>
    </div>
  );
}
