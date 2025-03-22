'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Cart, CartItem } from '@/types';
import { addItemToCart, removeItemFromCart } from '@/lib/actions/cart.actions';
import { toast } from 'sonner';
import { Plus, Minus } from 'lucide-react';

const AddToCart = ({ cart, item }: { cart?: Cart; item: CartItem }) => {
  const router = useRouter();

  const handleAddToCart = async () => {
    const res = await addItemToCart(item);

    if (!res.success) {
      toast.error(res.message);

      return;
    }

    toast.success(res.message, {
      action: (
        <Button
          className="bg-primary text-white hover:bg-gray-800"
          onClick={() => router.push('/cart')}
        >
          Go to cart
        </Button>
      ),
    });
  };

  // Remove item from cart
  const handleRemoveFromCart = async () => {
    const res = await removeItemFromCart(item.productId);

    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }

    return;
  };

  const existItem =
    cart && cart.items.find((x) => x.productId === item.productId);

  return existItem ? (
    <div>
      <Button type="button" variant="outline" onClick={handleRemoveFromCart}>
        <Minus className="w-4 h-4" />
      </Button>
      <span className="px-2">{existItem.qty}</span>
      <Button type="button" variant="outline" onClick={handleAddToCart}>
        <Plus className="w-4 h-4" />
      </Button>
    </div>
  ) : (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      <Plus className="w-4 h-4" />
      Add to cart
    </Button>
  );
};

export default AddToCart;
