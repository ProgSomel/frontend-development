import React from 'react'

export default function App() {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900'>
     <div className='max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md space-y-2
     sm:flex sm:items-center sm:py-4 sm:space-y-0 sm:space-x-12
     dark:bg-gray-800 sm:dark:hover:bg-gray-700
     '>
      <img className='h-24 mx-auto rounded-full ring-4 
      ring-green-400 sm:mx-0 sm:shrink-0
      transform hover:scale-105 duration-500
      ' src="../images/logo.png" alt="" />
      <div className='text-center space-y-2'>
        <div className='space-y-0.5'>
          <h1 className='
          text-black font-semibold
          dark:text-gray-300
          '>Learn with Sumit</h1>
          <p 
          className='
          text-gray-500 font-medium
          dark:text-gray-400 text-body
          '>Youtube Channel</p>
        </div>
        <button className='btn btn-purple rounded-sm'>Visit Now</button>
        <button className='btn btn-green'>Website</button>
      </div>
     </div>
    </div>
  )
}
