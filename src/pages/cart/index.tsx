import React, { useEffect, useState } from 'react';

function CartPage() {

  useEffect(() => {
    const auth = localStorage.getItem('auth');
    if(!auth) window.location.replace('/login');
  },[]);

  const [cartStorage, setCartStorage] = useState<ProductModel[]>([]);
  const [cart, setCart] = useState<ProductModel[]>([]);

  useEffect(() => {
    setCartStorage(JSON.parse(localStorage.getItem('cart') || '[]'));
    setCart(cartStorage);
  },[]);

  let number = 1;

  return (
    <React.Fragment>
      <div className='mx-auto w-full p-10 bg-white border border-gray-200 rounded-lg shadow-md'>

        <table className='table-auto w-full'>
          <thead>
            <tr>
              <th>No.</th>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {cart.map((item, idx) => (
              <tr key={idx}>
                <td>
                  <span className='text-lg'>{number++}</span>
                </td>
                <td>
                  <img src={item.image} alt={item.title} width={80} height={80} />
                </td>
                <td>
                  <span className='text-lg'>{item.title}</span>
                </td>
                <td>
                  <span className='text-lg'>{item.category}</span>
                </td>
                <td>
                  <span className='text-lg'>$ {item.price}</span>
                </td>
                <td>
                  <button className='rounded-xl px-3 py-2 font-semibold text-white text-md bg-orange-600 hover:bg-orange-700'>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
 

};

export default CartPage;