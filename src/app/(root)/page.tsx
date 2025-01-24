import { Metadata } from 'next';
import Cart from '@/components/cart/cart';
import CardsSection from '@/components/cards-section';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <div className="md:max-w-[70%]  max-w-[90%] mx-auto py-10">
      <h1 className="font-extrabold text-4xl text-[#2e1a11]">Desserts</h1>
      <div className="grid md:grid-cols-3 gap-10 mt-5">
        <CardsSection />
        <Cart />
      </div>
    </div>
  );
}
