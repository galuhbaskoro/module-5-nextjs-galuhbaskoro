import { fetcher } from '@/utils/fetcher';
import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';

function Navbar() {

  const { data, error, isLoading } = useSWR("https://fakestoreapi.com/products/categories",fetcher);

  return (
    <div className='flex flex-col md:flex-row w-full h-auto md:h-16 bg-slate-700 text-gray-300 px-10 md:py-0 py-5 shadow-lg fixed top-0'>

      <ul className='flex md:flex-row items-center justify-start w-full md:w-2/6'>
        <li className='text-xl font-bold text-white'>BassStore</li>
      </ul>

      <ul className='flex md:flex-row items-center justify-center w-full md:w-2/6 gap-4'>
        {error && <p className='text-gray-600 text-xl'>Failed to load</p>}
        {isLoading && <p className='text-gray-600 text-xl'>Loading...</p>}
        {data?.map((category: string, idx: number) => (
          <li key={idx} className='text-md cursor-pointer hover:text-white'>
            <Link href={`/products/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>

      <ul className='flex md:flex-row items-center md:justify-end justify-start gap-4 w-full md:w-2/6'>
        <li className='text-md cursor-pointer hover:text-white'>
          <Link href={'/'}>Home</Link>
        </li>
        <li className='text-md cursor-pointer hover:text-white'>
          <Link href={'/products'}>Products</Link>
        </li>
        <li className='text-md cursor-pointer hover:text-white'>Cart</li>
        <li className='text-md cursor-pointer hover:text-white'>Login</li>
      </ul>
    </div>
  )
}

export default Navbar;