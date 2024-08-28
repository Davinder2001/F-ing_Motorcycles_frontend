import React from 'react';
import Link from 'next/link'
import HeaderLogoPage from '@/app/components/header/headerLogo'
import Navigation from '@/app/components/NavigationComponents/navigation'

function Header() {
  return (
    <>
      <header>
      <div className='container'>
        <div className='header-inner'>
        <HeaderLogoPage/>
        <Navigation/>
      </div>
      </div>
      </header>
    </>
  );
}

export default Header;
