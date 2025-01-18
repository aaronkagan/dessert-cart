import DesertCard from '@/components/desert-card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};
export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-2xl">Desserts</h1>
      <section></section>
      <aside></aside>
    </div>
  );
}
