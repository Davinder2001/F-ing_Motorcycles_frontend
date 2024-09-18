import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const HeadetLogo = ({result}) => {
  return (
    <div className='header_logo'>
  <Link href="/">
    {/* <Image 
      src={result.image_path} 
      height={20} 
      width={180} 
      alt='logo' 
    /> */}
    <img src={result?.image_path} alt="Vehicle control unit (VCU)" />
    </Link>
  </div>
  )
}

export default HeadetLogo