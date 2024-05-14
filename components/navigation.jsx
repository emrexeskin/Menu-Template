"use client"
import React from 'react'
import { categories } from '/public/data/data.js'
import Link from 'next/link'
import '/public/styles/styles.css'
export default function NavigationBar() {

  const scrollToCategory = (hash) => {
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div className='flex items-start justify-center w-full overflow-x-auto pb-4 px-1'>
  <nav className='flex h-12 py-2 text-decoration-none w-full'>
    <ul className='flex items-start gap-2' style={{ whiteSpace: 'nowrap'}}>
      {categories.map((category) => (
        <li
          className='flex items-center justify-center py-3 px-4 rounded bg-gray-100 hover:bg-gray-200 transition'
          key={category.hash}
        >
          <Link
            className='flex items-center justify-center hover:text-gray-900 transition'
            href={category.hash}
            onClick={() => scrollToCategory(category.hash.substring(1))}
          >
            {category.emoji} {category.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
</div>
  );
}