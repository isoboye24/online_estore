'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { CartItem } from '@/types';
import { addItemToCart } from '@/lib/actions/cart.actions';
import { toast } from 'sonner';
import { Plus } from 'lucide-react';

const AddToCart = ({ item }: { item: CartItem }) => {
  const router = useRouter();

  const handleAddToCart = async () => {
    const res = await addItemToCart(item);

    if (!res.success) {
      toast.error(res.message);

      return;
    }

    toast.success(`${item.name} added to cart`, {
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

  return (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      <Plus />
      Add To Cart
    </Button>
  );
};

export default AddToCart;
