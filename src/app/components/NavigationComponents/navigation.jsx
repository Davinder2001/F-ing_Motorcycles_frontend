import React from 'react';
import Link from 'next/link'

function Navigation() {
  return (

        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Our Products</Link>
            </li>
            <li>
              <Link href="/investor-corner">Investor’s Corner</Link>
            </li> 
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>
 

  );
}

export default Navigation;
