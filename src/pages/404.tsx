import React from 'react'

function error404() {
  return (
    <div className='flex flex-col flex-wrap justify-center items-center w-full px-0 py-48 rounded-lg shadow-md bg-white'>
      <h1 className='text-3xl font-medium text-gray-600 mb-1'>ERROR 404</h1>
      <p className='text-lg font-light text-gray-400'>We are sorry the page requested is not found</p>
    </div>
  )
}

export default error404