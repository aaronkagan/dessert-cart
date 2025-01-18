import AddToCartButton from '../components/add-to-cart-button';

export default function DesertCard() {
  return (
    <article>
      <AddToCartButton qty={Math.floor(Math.random() * 5)} />
      <h3>Short Name</h3>
      <h2>Long Name</h2>
      <p>Price</p>
    </article>
  );
}
