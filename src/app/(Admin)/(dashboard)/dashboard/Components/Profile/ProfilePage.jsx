import React from 'react';

const ProfilePage = ({ getProfile }) => {
 
  const { data, success } = getProfile || {};

  console.log(data)
 
  return (
    <div>
      <h1>Profile Page</h1>
      {
        <ul>
          {data===undefined?("no result found"):(data.map((item, index) => (
            <li key={index}>
            
              <p>ID: {item.id}</p>
              <p>Name: {item.name}</p>
               
            </li>
          )))}
        </ul>
   
      }
    </div>
  );
};

export default ProfilePage;
