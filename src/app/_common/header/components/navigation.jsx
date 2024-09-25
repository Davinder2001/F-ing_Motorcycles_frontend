import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Use this in the app directory

function Navigation() {
  const pathname = usePathname(); // Get the current path

  // Normalize the pathname to avoid issues with trailing slashes, etc.
  const isActive = (path) => pathname === path || pathname === `${path}/`;

  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link href="/" className={isActive('/') ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <Link href="/products" className={isActive('/products') ? 'active' : ''}>Our Products</Link>
        </li>
        <li>
          <Link href="/investor-corner" className={isActive('/investor-corner') ? 'active' : ''}>Investor’s Corner</Link>
        </li>
        <li>
          <Link href="/about" className={isActive('/about') ? 'active' : ''}>About</Link>
        </li>
        <li>
          <Link href="/contact-us" className={isActive('/contact-us') ? 'active' : ''}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
