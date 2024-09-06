import React from 'react'
import Image from 'next/image'

const AdminHeader = ({ getHeaderLogo }) => {
  console.log(getHeaderLogo)
  return (
    <div className='admin_header'>
      <div className='header-inner'>
        <div className='header-left'>
          {/* Use the Image component from next/image */}
          <Image 
            src={getHeaderLogo.image_path} 
            height={20} 
            width={180} 
            alt='logo' 
          />
        </div>
        <div className='header-right'></div>
      </div>
    </div>
  )
}

export default AdminHeader
