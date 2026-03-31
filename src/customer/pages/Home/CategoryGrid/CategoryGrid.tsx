import React from 'react'

const CategoryGrid = () => {
  return (
    <div className='grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20'>
      <div className='col-span-6 row-span-12 text-white p-4 bg-secondary-color flex flex-col justify-end gap-4'>
        <img className='w-full h-full object-cover object-top rounded-md'
        src="https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-sari/q/k/5/free-new-swiroski-daimond-hotfix-saree-diamond-saree-lichi-soft-original-imahfh3cavexahch.jpeg?q=70" alt="" />
      </div>

      <div className='col-span-2 row-span-6 text-white'>
        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-sandal/c/z/b/7-jmd-1150-brn-7-7-visiter-brown-original-imah2gsz9hph52cn.jpeg?q=70" alt="" />
      </div>

    </div>

  )
}

export default CategoryGrid
