import ProductCard from '@/components/fragments/ProductCard';
import { fetcher } from '@/utils/fetcher';
import { useRouter } from 'next/router';
import React from 'react'
import useSWR from 'swr';

function ProductByCategoryPage() {

  const {query} = useRouter();
  const { data, error, isLoading } = useSWR(`https://fakestoreapi.com/products/category/${query.category}`,fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <React.Fragment>
      <h1 className='text-center text-2xl font-bold mb-5 text-slate-600'>{query.category} Products</h1>
      <div className='flex flex-wrap gap-6 justify-center'>
        {data?.map((product: ProductModel, idx: number) => (
          <ProductCard
            key={idx}
            id={product.id}
            title={product.title}
            category={product.category}
            price={product.price}
            image={product.image}
            viewDetail={() => {}}
          />
        ))}
      </div>
    </React.Fragment>
  )
}

export default ProductByCategoryPage;