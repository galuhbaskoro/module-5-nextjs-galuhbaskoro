import Register from '@/interfaces/Register';
import { fetcher } from '@/utils/fetcher';
import { get } from 'http';
import Link from 'next/link';
import React, { use, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useSWR from 'swr';

function Navbar() {

  const { data, error, isLoading } = useSWR("https://fakestoreapi.com/products/categories",fetcher);

  const [auth, setAuth] = useState<string>('');

  useEffect(() => { 
    setAuth(localStorage.getItem('auth') || '');    
  },[]);


  const logout = () => {
    Swal.fire({
      title: "Are you sure want to Logout ??",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ok",
      confirmButtonColor: "#057A55",
      cancelButtonColor: "#F05252 "
    }).then((result) => {
      if(result.isConfirmed){
        localStorage.removeItem("auth");
        Swal.fire({
          icon: 'success',
          title: 'Logout Successfuly',
          text: 'Thanks for Shopping at BassStore',
          position: 'center',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true
        }).then(()=>{
          window.location.replace("/");
        })}    
    });
  }

  return (
    <div className='flex flex-col md:flex-row w-full h-auto md:h-16 bg-slate-700 text-gray-300 px-10 md:py-0 py-5 shadow-lg fixed top-0'>
      
      {/* Brand */}
      <ul className='flex md:flex-row items-center justify-start w-full md:w-2/6'>
        <li className='text-xl font-bold text-white'>
          <Link href={'/'}>BassStore</Link>
        </li>
      </ul>

      {/* Categories */}
      <ul className='flex md:flex-row items-center justify-center w-full md:w-2/6 gap-4'>
        {error && <p className='text-gray-600 text-xl'>Failed to load</p>}
        {isLoading && <p className='text-gray-600 text-xl'>Loading...</p>}
        {data?.map((category: string, idx: number) => (
          <li key={idx} className='text-md cursor-pointer hover:text-white'>
            <Link href={`/products/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
      
      {/* Navigation */}
      <ul className='flex md:flex-row items-center md:justify-end justify-start gap-4 w-full md:w-2/6'>
        <li className='text-md cursor-pointer hover:text-white'>
          <Link href={'/'}>Home</Link>
        </li>
        <li className='text-md cursor-pointer hover:text-white'>
          <Link href={'/products'}>Products</Link>
        </li>

        <li className='text-md cursor-pointer hover:text-white'>
          <Link href={'/cart'}>Cart</Link>
        </li>

        {auth ? (
          <li className='text-md cursor-pointer hover:text-white'>
            <button onClick={logout}>Logout</button>
          </li>  
        ) : (
          <li className='text-md cursor-pointer hover:text-white'>
            <Link href={'/login'}>Login</Link>
          </li>
        )}

      </ul>
    </div>
  )
}

export default Navbar;

function getAuth() {
  throw new Error('Function not implemented.');
}
