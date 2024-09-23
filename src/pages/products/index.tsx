import ProductCard from '@/components/fragments/ProductCard';
import React from 'react';

export async function getServerSideProps() {
  const response = await fetch("https://fakestoreapi.com/products");
  const result = await response.json();
  return {
    props: { 
      products: result
    }
  }; 
};

function ProductPage(props: {products: ProductModel[]}) {
  const {products} = props;
  return (
   <React.Fragment>
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

export default ProductPage;