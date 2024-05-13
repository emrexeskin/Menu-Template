import Image from 'next/image'
import Link from 'next/link'
import NavigationBar from './navigation'
import React from 'react';
export default function Header() {

  return (
    <header className='flex flex-col items-center justify-center fixed w-full bg-white/[0.4]  z-10 shadow-sm'>
      <div className='flex items-center justify-center w-full p-3 bg-[#4F6C6A]'>
      <Link className='scroll-mt-[100rem] scroll-smooth px-2' href="/">
            <Image
            className='bg-white rounded p-2'
            src={"/images/larche-logo.png"}
            width={80}
            height={40}
            
            ></Image>
            </Link>
      </div>
      
            <NavigationBar></NavigationBar>
    </header>
  )
}
