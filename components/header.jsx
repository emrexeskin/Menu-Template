import Image from 'next/image'
import Link from 'next/link'
import NavigationBar from './navigation'
import React from 'react';
export default function Header() {

  return (
    <header className='flex flex-col items-center justify-center fixed w-full bg-gray-100 shadow'>
    <div className='flex items-center justify-center w-full p-3 bg-gray-800'>
      <Link href="/">
          <Image
            className='rounded-lg'
            src="/images/larche-logo.png"
            alt='logo'
            width={80}
            height={40}
          />
      </Link>
    </div>
    <NavigationBar />
  </header>
  )
}
