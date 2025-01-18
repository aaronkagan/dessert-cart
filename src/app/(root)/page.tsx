import DesertCard from '@/components/desert-card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

import { data as products } from '../../../public/data';

export default async function Home() {
  return (
    <div className="max-w-[90%] mx-auto ">
      <h1 className="font-bold text-2xl">Desserts</h1>
      <section className="grid md:grid-cols-4 gap-5 mt-5 max-w-[60%]">
        {products.map((product) => (
          <DesertCard key={product.name} product={product}></DesertCard>
        ))}
      </section>
      <aside></aside>
    </div>
  );
}
