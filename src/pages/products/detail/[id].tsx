import ProductDetail from '@/components/fragments/ProductDetail';
import ProductDetailProps from '@/interfaces/ProductDetailProps';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const result = await response.json();
  return {
    props: { 
      products: result
    }
  }; 
};

function ProductByIdPage(props: {products: ProductDetailProps}) {

  const {products} = props;
  
  const cartStorage = JSON.parse(localStorage.getItem('cart') || '[]');
  const [cart, setCart] = useState<ProductModel[]>(cartStorage);
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  },[cart])

  const addCart = (products: ProductModel) => {
    setCart([...cart, {...products}]);
    Swal.fire({
      icon: 'success',
      title: 'Product added to cart',
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 1500
    }).then(() => {
      window.location.replace('/products');
    })
  }
  
  return (
    <React.Fragment>
      <ProductDetail
        id={products.id}
        title={products.title}
        category={products.category}
        price={products.price}
        description={products.description}
        image={products.image} 
        addCart={() => addCart(products)}
      />
    </React.Fragment>
  );
};

export default ProductByIdPage
