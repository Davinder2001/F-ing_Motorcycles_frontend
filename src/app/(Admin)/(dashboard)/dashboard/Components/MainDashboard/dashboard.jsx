import React from 'react'

const DashboardMain = ({ categories }) => {
  const categoryCount = categories.length;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total categories: {categoryCount}</p>
    </div>
  );
}

export default DashboardMain;
