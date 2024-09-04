import React from 'react';

const DashboardMain = ({ getCatDash }) => {
  // Convert the promise to a data variable by awaiting it directly
  const [data, setData] = React.useState([]);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    getCatDash.then(result => {
      setData(result);
      setCount(result.length);
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
  }, [getCatDash]);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Number of items: {count}</p>
    </div>
  );
};

export default DashboardMain;
