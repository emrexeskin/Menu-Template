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
    <div className='flex items-start justify-center w-full overflow-x-auto pb-6 px-1'>
    <nav className='flex h-12 py-2 text-decoration-none h-8 w-full'>
      <ul className='flex items-start gap-2' style={{ whiteSpace: 'nowrap'}}>
        {categories.map((category) => (
          <li
            className='h-3/4 flex items-center justify-center py-5 px-3 rounded bg-[#f2f2f2]'
            key={category.hash}
          >
            <Link
              className='flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition text-nowrap'
              href={category.hash}
              onClick={() => scrollToCategory(category.hash.substring(1))}
            >
              {category.emoji}
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
  );
}