import React from 'react'

const ProductItem = ({ name, imageUrl, price }) => {
  return (
    <div className="w-full border border-slate-400">
      <div className="flex items-center justify-center">
        <img
          src={imageUrl}
          objectfit="cover"
          alt=""
          srcset=""
          className='md:h-[350px] md:w-[270px] h-[270px] w-[230px] object-contain'
        />
      </div>
      <p className='mt-2 pl-[50px] text-lg font-semibold text-left'>{name}</p>
      <p className='mt-2 pl-[50px] pb-5 text-lg font-semibold text-left'>{price}</p>
    </div>
  )
}

export default ProductItem