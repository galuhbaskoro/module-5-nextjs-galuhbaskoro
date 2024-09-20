import React from 'react'

function Hero() {
  return (
    <div className='w-full h-auto mb-10'>
      <div className='flex flex-col items-center justify-center w-full min-h-screen px-40 bg-white rounded-lg shadow-md'>
        <h1 className='text-3xl font-bold mb-4'>Welcome to BassStore</h1>
        <p className='text-xl text-center'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ipsam alias reprehenderit eaque officiis illo laboriosam quam similique, veniam sequi.
        </p>
        <button className='inline-block px-3 py-2 mt-8 text-white bg-orange-600 rounded-xl font-bold'>
          Start Shopping
        </button>
      </div>  
    </div>
  )
}

export default Hero