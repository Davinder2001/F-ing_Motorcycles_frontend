import React from 'react'

const DashboardMain = ({ categories }) => {
  const categoryCount = categories.length;

  return (
    <div className='dashboard_main'>
      <h2>Dashboard</h2>
      <div className='cards'>
    <div className='card'>
      <div className='card-inner'>
      <p>Total Products: {0}</p>
      </div>
    </div>

    <div className='card'>
      <div className='card-inner'>
      <p>Total Categories: {categoryCount}</p>
      </div>
    </div>
    
    <div className='card'>
      <div className='card-inner'>
      <p>Total Pages: {8}</p>
      </div>
    </div>
    
    <div className='card'>
      <div className='card-inner'>
      <p>Total categories: {categoryCount}</p>
      </div>
    </div>
</div>

      



    </div>
  );
}

export default DashboardMain;
