import React from 'react';
import Link from 'next/link'
import Navigation from '@/app/components/NavigationComponents/navigation'

function Header() {
  return (
    <>
      <header>
      <div className='container'>

        <Navigation/>
      </div>
      </header>
    </>
  );
}

export default Header;
