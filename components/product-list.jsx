import React from 'react';
import { productData, categories } from '/public/data/data.js';
import Product from '@/components/Product';

export default function ProductList () {
  return (
    <section className='w-full px-4 mt-32'>
      {categories.map((category, index) => (
        <div key={index} className='flex flex-col gap-2 mt-5 scroll-mt-36 my-8' id={category.hash.substring(1)}>
          <h2 className='font-semibold text-sm text-[#E39F26]'>{category.name}</h2>
          <div className='flex flex-col items-center justify-center gap-2 w-full'>
            {productData
              .filter((item) => item.category === category.name)
              .map((item, index) => (
                <Product
                  key={index}
                  photo={item.photo}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                />
              ))}
          </div>
        </div>
      ))}
    </section>
  );
};