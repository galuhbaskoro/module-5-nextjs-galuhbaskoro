import ProductCard from './ProductCard';
import useSWR from 'swr';
import { fetcher } from '@/utils/fetcher';

function NewProduct() {

  const { data, error, isLoading } = useSWR("https://fakestoreapi.com/products?limit=4",fetcher);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
   
  return (
    <div>
      <div className='flex flex-wrap gap-6 justify-center'>
        {data?.map((product: ProductModel, idx: number) => (
          <ProductCard
            key={idx}
            id={product.id}
            title={product.title} 
            category={product.category}
            price={product.price}
            image={product.image}
          /> 
        ))}
      </div>
    </div>
  );
};

export default NewProduct;