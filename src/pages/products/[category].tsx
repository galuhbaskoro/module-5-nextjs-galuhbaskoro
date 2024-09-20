import ProductCard from '@/components/fragments/ProductCard';
import capitalizeLetter from '@/utils/capitalizer';
import { fetcher } from '@/utils/fetcher';
import { useRouter } from 'next/router';
import React from 'react'
import useSWR from 'swr';

function ProductByCategoryPage() {

  const {query} = useRouter();
  const { data, error, isLoading } = useSWR(`https://fakestoreapi.com/products/category/${query.category}`,fetcher);

  let letter = query.category?.toString();
  const capitalizedLetter = letter!.charAt(0).toUpperCase() + letter!.slice(1);

  return (
    <React.Fragment>
      <h1 className='text-center text-2xl font-bold mb-5 text-slate-600'>{capitalizedLetter} Products</h1>
      <div className='flex flex-wrap gap-6 justify-center'>
        {isLoading && <p className='text-gray-600 text-xl'>Loading...</p>}
        {error && <p className='text-gray-600 text-xl'>Failed to load</p>}
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