// 'use client'
// import React from 'react';

// const DashboardMain = ({ getCatDash }) => {
//   // Convert the promise to a data variable by awaiting it directly
//   const [data, setData] = React.useState([]);
//   const [count, setCount] = React.useState(0);

//   React.useEffect(() => {
//     getCatDash.then(result => {
//       setData(result);
//       setCount(result.length);
//     }).catch(error => {
//       console.error('Error fetching data:', error);
//     });
//   }, [getCatDash]);

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <div className='card-wrapper'>
//         <div className='card'>
//           <h5>Categorys: {count}</h5>
//         </div>
//           <div className='card'>
//           <h5>Products: {0}</h5>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardMain;


import React from 'react'

const DashboardMain = () => {
  return (
    <div>dashboard</div>
  )
}

export default DashboardMain