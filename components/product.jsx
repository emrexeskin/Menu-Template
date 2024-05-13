import Image from 'next/image';
import React from 'react';

export default function Product({ photo, name, description, price }) {
  return (
    <div className='flex items-start w-full justify-between p-2 gap-4 shadow-3drops bg-white/[0.4] h-full rounded'>
        
        <div className='w-3/12'>
        <Image src={`/images/${photo}`} alt={name} height={56} width={96} className='rounded-md'/>
        </div>
      
        <div className='flex items-center justify-between gap-4 w-8/12 w-full h-full'>

        <div className='flex flex-col items-start justify-between h-full'>
        <h3 className="font-bold text-xs mb-1 text-[#4F6C6A]" >{name}</h3>
        <p className="text-gray-500 text-xs " >{description}</p> 
        </div>
        
      </div>

      <div className='flex items-center justify-center'> 
       <p className='font-semibold text-sm text-gray-600 text-nowrap'>{price}₺</p>
       </div>

    </div>
  );
}