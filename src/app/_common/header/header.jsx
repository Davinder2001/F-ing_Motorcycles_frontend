import React from 'react';
import Navigation from '@/app/_common/header/components/navigation'
import HeadetLogo from '@/app/_common/header/components/headetLogo'
import DarkMode from '@/app/_common/header/components/darkMode'
import { EXPORT_ALL_APIS } from '../../../../utils/apis/apis';

async function Header() {
  let api=EXPORT_ALL_APIS()
  let result=await api.loadHeaderImage()
  return (
    <>
      <header>
      <div className='container'>
        <div className='header-inner'>
        <HeadetLogo result={result}/>
        <Navigation />
        <DarkMode/>
      </div>
      </div>
      </header>
    </>
  );
}

export default Header;
