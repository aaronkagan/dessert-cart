'use client';

import { useAppSelector } from '@/lib/hooks';
import DesertCard from './desert-card';
import { selectProducts } from '@/lib/features/products-slice';
export default function CardsSection() {
  const products = useAppSelector(selectProducts);

  return (
    <section className="grid md:grid-cols-3 gap-5 md:col-span-2">
      {products.map((product) => (
        <DesertCard key={product.name} product={product}></DesertCard>
      ))}
    </section>
  );
}
