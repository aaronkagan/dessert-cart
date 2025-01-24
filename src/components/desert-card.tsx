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
        className="w-full object-cover rounded-lg"
      />
      <div className="mx-auto flex justify-center my-4 -translate-y-9 bg-white w-fit rounded-full">
        <AddToCartButton product={product} />
      </div>
      <div>
        <h3 className="text-[#978a86]">{product.category}</h3>
        <h2 className="text-[#231818] font-bold">{product.name}</h2>
        <p className="text-[#ad6b55] font-semibold">
          ${product.price.toFixed(2)}
        </p>
        <p className={product.stock === 0 ? 'text-red-500' : ''}>
          Stock: {product.stock}
        </p>
      </div>
    </article>
  );
}
