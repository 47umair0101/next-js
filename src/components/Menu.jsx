'use client'


import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const Menu = () => {
  let currentPath = usePathname();
  return (
    <div>
      <h1>{currentPath}</h1>
      <Link className={currentPath === '/' ? 'active-link' : 'pending-link'} href={'/'}>Home</Link><br/>
     
      <Link href={ {pathname: '/about', query: {name: 'computer', price: '200'}} } className={currentPath === '/about' ? 'active-link' : 'pending-link'}>About</Link><br/>
     
      <Link className={currentPath === '/admin' ? 'active-link' : 'pending-link'} href={'/admin'}>Admin</Link><br/>
     
      <Link prefetch={false} className={currentPath === '/contact' ? 'active-link' : 'pending-link'} href={'/contact'} replace>Contact</Link><br/>
    </div>
  );
}; 

export default Menu; 