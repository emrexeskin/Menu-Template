import React from 'react';

export default function Product({ photo, name, description, price }) {
  return (
    <div className='flex p-2 gap-4 shadow-sm bg-gray-100 rounded-lg'>
      <div className='w-1/3'>
        <div className='rounded-md overflow-hidden'>
          <img src={`/images/${photo}`} alt={name} className='w-full h-auto object-cover' />
        </div>
      </div>
  
      <div className='flex justify-between w-2/3 gap-2'>
        <div>
          <h3 className="font-semibold text-sm text-gray-900 mb-1">{name}</h3>
          <p className="text-xs text-gray-600">{description}</p>
        </div>

        <div className='flex items-end justify-center h-full'>
          <p className='font-semibold text-base text-gray-700 mb-2 text-nowrap'>{price} ₺</p>
        </div>
      </div>
    </div>
  );
}