import {
  getLatestProducts,
  getFeaturedProducts,
} from '@/lib/actions/product.actions';
import { ProductList } from '@/components/ui/shared/product';
import { ProductCarousel } from '@/components/ui/shared/product/product-carousel';

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  const featuredProducts = await getFeaturedProducts();

  return (
    <>
      {featuredProducts.length > 0 && (
        <ProductCarousel data={featuredProducts} />
      )}
      <ProductList title="Newest Arrivals" data={latestProducts} />
    </>
  );
};

export default Homepage;
