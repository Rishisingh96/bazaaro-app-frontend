import React from 'react'

const ShopByCategoryCard = () => {
  return (
    <div className='flex gap-3 flex-col justify-center items-center groutp cursor-pointer'>
        <div className='w-[150px] h-[150px] rounded-full bg-primary-color'>
            <img className='group-hover:scale-100 transition-transform duration-700 object-cover object-top h-full w-full' src="https://rukminim2.flixcart.com/image/612/612/xif0q/gas-stove/7/u/j/3-lpg-4-4-ebony-greenchef-10-5-manual-original-imahg9ffzhqef6yw.jpeg?q=70" alt="" />
        </div>
        <h1>Kitchen and Table</h1>
    </div>
  )
}

export default ShopByCategoryCard
