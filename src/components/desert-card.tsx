import { Product } from '@/types';
import AddToCartButton from './cart/add-to-cart-button';
import Image from 'next/image';

export default function DesertCard({ product }: { product: Product }) {
  return (
    <article className="flex flex-col">
      <Image
        src={`/images/${product.image.desktop}`}
        alt={product.name}
        width={100}
        height={100}
        priority={true}
        className="w-full object-cover"
      />
      <div className="flex justify-center my-4">
        <AddToCartButton product={product} />
      </div>
      <h3>{product.category}</h3>
      <h2>{product.name}</h2>
      <p>${product.price.toFixed(2)}</p>
    </article>
  );
}
