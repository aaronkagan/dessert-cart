import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { CartItem } from '@/types';
import { getCartTotal } from '@/utils';
import Image from 'next/image';

export default function OrderConfirmationModal({ cart }: { cart: CartItem[] }) {
  return (
    <Dialog>
      <DialogTrigger asChild className="w-full">
        <button className="text-white text-sm px-4 py-2 border rounded-full w-full justify-center bg-[#c43d10] hover:bg-[#932d0b] mt-2">
          Confirm Order
        </button>
      </DialogTrigger>
      <DialogContent className="[&>button]:hidden">
        <DialogHeader>
          <Image
            src="/images/icon-order-confirmed.svg"
            width={30}
            height={30}
            alt="order confirmed"
          />
          <DialogTitle className="font-extrabold text-lg">
            Order Confirmed
          </DialogTitle>
          <DialogDescription className="mb-4">
            We hope you enjoy your food!
          </DialogDescription>
          <div className="bg-[#fcf8f6] rounded-lg p-5">
            {cart.map((item) => (
              <div
                key={item.name}
                className="flex justify-between border-b-[1px] pb-4"
              >
                <div className="flex gap-5">
                  <Image
                    src="/images/image-macaron-thumbnail.jpg"
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-lg"
                  />
                  <div>
                    <p>{item.name}</p>
                    <p className="flex gap-5">
                      <span>{item.qty}x</span>
                      <span className="opacity-50">
                        <span className="text-xs">@</span> $
                        {item.price.toFixed(2)}
                      </span>
                    </p>
                  </div>
                </div>
                <p>${(item.price * item.qty).toFixed(2)}</p>
              </div>
            ))}
            <div className="flex justify-between pt-6">
              <p className="font-semibold">Order Total</p>
              <p className="font-extrabold text-2xl">${getCartTotal(cart)}</p>
            </div>
          </div>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <button className="text-white text-sm px-4 py-2 border rounded-full w-full justify-center bg-[#c43d10] hover:bg-[#932d0b] mt-2">
              Start New Order
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
