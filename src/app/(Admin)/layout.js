import React from 'react'


export default function AdminRootLayout({children}) {
  return (
     <div className='main'>
     <h1>this is admin header </h1>
  <div className='admin-inner'>
    
      
      <div className='main-content'>
          {children}

      </div>

  </div>

     <h1>this is admin footer</h1>
     </div>
  )
}
