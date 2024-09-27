import React from 'react'
// import Image from 'next/image'

const AdminHeader = ({ getHeaderLogo }) => {
  // console.log(getHeaderLogo)
  return (
    <div className='admin_header'>
      <div className='header-inner'>
        <div className='header-left'>
          <img src={getHeaderLogo?.image_path} alt="Header Logo" />
        </div>
        <div className='header-right'></div>
      </div>
    </div>
  )
}

export default AdminHeader
