import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

 

function Navigation({result}) {
// console.log(result)
 
  
  return (

 <>
    <div className='header_logo'>
  <Link href="/">
    <Image 
      src={result.image_path} 
      height={20} 
      width={180} 
      alt='logo' 
    />
    </Link>
  </div>
        <nav className='navbar'>
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
    </>

  );
}

export default Navigation;
