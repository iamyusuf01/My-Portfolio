import React from 'react'

const Footer = () => {
  return (
    <div className=' text-white w-full h-[140px] justify-between bg-black overflow-hidden scroll-smooth'>
        <div>
            <h1 className='font-serif text-center text-[22px] text-gray-400 p-7'> Let's get started on something great</h1>
        </div>
        <div className='flex gap-4 justify-center'>
        <button className='  hover:bg-gray-600 border  w-24 h-8 rounded-md shadow-lg font-serif text-gray-300 bg-black'>Chat us to</button>
        <button className=' hover:bg-gray-600 border  w-28 h-8 rounded-md shadow-lg font-serif text-gray-300 bg-black'>Get's Started</button>
        </div>
    </div>
  )
}

export default Footer