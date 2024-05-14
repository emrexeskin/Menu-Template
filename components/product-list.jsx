import React from 'react';
import { productData, categories } from '/public/data/data.js';
import Product from '@/components/product';

export default function ProductList () {
  return (
    <section className='w-full px-4 mt-8'>
      {categories.map((category, index) => (
        <div key={index} className='mb-8 scroll-mt-36' id={category.hash.substring(1)}>
          <h2 className='font-semibold text-lg text-gray-900 mt-6 mb-4'>{category.name}</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
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