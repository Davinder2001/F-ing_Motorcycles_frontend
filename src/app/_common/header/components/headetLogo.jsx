import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const HeadetLogo = ({result}) => {
  return (
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
  )
}

export default HeadetLogo