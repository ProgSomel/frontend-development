import React from 'react'

export default function App() {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-100'>
     <div className='max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md space-y-2
     sm:flex sm:items-center sm:py-4 sm:space-y-0 sm:space-x-12
     '>
      <img className='h-24 mx-auto rounded-full ring-4 
      ring-green-400 sm:mx-0 sm:shrink-0
      transform hover:scale-105 duration-500
      ' src="../images/logo.png" alt="" />
      <div className='text-center space-y-2'>
        <div className='space-y-0.5'>
          <p className='text-lg text-black font-semibold'>Learn with Sumit</p>
          <p className='text-gray-500 font-medium'>Youtube Channel</p>
        </div>
        <button className='px-4 py-1 border border-purple-200 
        rounded-full text-sm text-purple-600 
        font-semibold hover:bg-purple-600 hover:text-white
        hover:border-transparent focus:outline-none focus:ring-2
        focus:ring-purple-600 focus:ring-offset-2 cursor-pointer
        '
        >Visit Now</button>
      </div>
     </div>
    </div>
  )
}
