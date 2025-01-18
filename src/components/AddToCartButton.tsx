export default function AddToCartButton({ qty }: { qty: number }) {
  return (
    <div className="border w-[10rem] rounded-full px-4 flex justify-center">
      {qty > 0 ? (
        <button>
          <span>-</span>
          {qty} <span>+</span>
        </button>
      ) : (
        <button>+ Add To Cart</button>
      )}
    </div>
  );
}
