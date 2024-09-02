import React from 'react';
import Navigation from '@/app/_common/header/components/navigation'
import { EXPORT_ALL_APIS } from '../../../../utils/apis/apis';

async function Header() {
  let api=EXPORT_ALL_APIS()
  let result= api.loadHeaderImage()
  return (
    <>
      <header>
      <div className='container'>
        <div className='header-inner'>
      
        <Navigation result={result}/>
      </div>
      </div>
      </header>
    </>
  );
}

export default Header;
