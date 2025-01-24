import { Metadata } from 'next';
import Cart from '@/components/cart/cart';
import CardsSection from '@/components/cards-section';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <div className="max-w-[90%] mx-auto ">
      <h1 className="font-bold text-2xl">Desserts</h1>
      <div className="grid grid-cols-3 gap-10 mt-5">
        <CardsSection />
        <Cart />
      </div>
    </div>
  );
}
