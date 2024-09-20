import ProductCard from './ProductCard';
import useSWR from 'swr';
import { fetcher } from '@/utils/fetcher';

function NewProduct() {

  const { data, error, isLoading } = useSWR("https://fakestoreapi.com/products?limit=4",fetcher);
   
  return (
    <div>
      <div className='flex flex-wrap gap-6 justify-center'>
        {error && <p className='text-gray-600 text-xl'>Failed to load</p>}
        {isLoading && <p className='text-gray-600 text-xl'>Loading...</p>}
        {data?.map((product: ProductModel, idx: number) => (
          <ProductCard
            key={idx}
            id={product.id}
            title={product.title} 
            category={product.category}
            price={product.price}
            image={product.image}
            viewDetail={() => {alert('test product button')}}
          /> 
        ))}
      </div>
    </div>
  );
};

export default NewProduct;