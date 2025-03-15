import sampleData from '@/db/sample-data';
import { ProductList } from '@/components/ui/shared/product';

const Homepage = () => {
  console.log(sampleData);
  return (
    <>
      <ProductList
        data={sampleData.products}
        title="Newest Arrivals"
        limit={4}
      />
    </>
  );
};

export default Homepage;
