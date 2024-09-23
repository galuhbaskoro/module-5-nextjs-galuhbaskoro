import ProductCard from '@/components/fragments/ProductCard';
import React from 'react'

export async function getServerSideProps(context: any) {
  const { category } = context.query;
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  const result = await response.json();
  return {
    props: { 
      products: result
    }
  }; 
};

function ProductByCategoryPage(props: {products: ProductModel[]}) {
  const {products} = props;
  return (
    <React.Fragment>
      <h1 className='text-center text-2xl font-bold mb-5 text-slate-600'>Products by category</h1>
      <div className='flex flex-wrap gap-6 justify-center'>
        {products.map((product: ProductModel, idx: number) => (
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
    </React.Fragment>
  );
};

export default ProductByCategoryPage;