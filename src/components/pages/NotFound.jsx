import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center px-4'>
      <h1 className='text-8xl md:text-9xl font-bold font-cookie'>404</h1>
      <p className='text-2xl md:text-3xl mt-4 text-gray-600 font-light'>Page not found</p>
      <Link 
        to="/" 
        className='mt-8 px-8 py-4 bg-black text-white uppercase font-semibold hover:bg-gray-800 transition-colors rounded-lg'
      >
        Go Home
      </Link>
    </div>
  )
}

export default NotFound