import Image from 'next/image';
import React from 'react';

export default function Product({ photo, name, description, price }) {
  return (
    <div className='flex flex-col p-2 gap-2 shadow-sm bg-gray-100 rounded-sm'>
    <div className='w-full h-48'>
      <img src={`/images/${photo}`} alt={name} className='w-full h-full object-cover rounded-t-sm' />
    </div>

    <div className='flex gap-4 justify-between p-2'>
      <div className='flex flex-col items-start justify-center gap-2'>
        <h3 className='font-semibold text-sm text-gray-900'>{name}</h3>
        <p className='text-xs text-gray-600'>{description}</p>
      </div>

      <div className='flex justify-end'>
        <p className='font-semibold text-sm text-gray-700'>{price}₺</p>
      </div>
    </div>
  </div>
  );
}