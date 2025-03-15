import { getLatestProducts } from '@/lib/actions/product.actions';
import { ProductList } from '@/components/ui/shared/product';

const Homepage = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrivals" />
    </>
  );
};

export default Homepage;
