import React from 'react'

const DealCard = () => {
  return (
    <div className='w-[13rem] cursor-pointer'>
      <img className='border-x-[7px] border-t-[7px] border-pink-600 w-full h-[12rem] object-cover object-top' src="https://rukminim2.flixcart.com/fk-p-flap/760/1020/image/cd8018864fc94168.png?q=60" alt="" />
      <div className='border-4 border-black bg-black p-2 text-white text-center'>
        <p className='text-lg font-semibold '>Head Phone</p>
        <p className='text-2xl font-bold'>20% OFF</p>
        <p className='text-balance text-lg'>shop now</p>
      </div>

    </div>
  )
}

export default DealCard
