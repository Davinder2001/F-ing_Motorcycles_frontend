import React from 'react';

function HomeCategory({ category }) {

    return (
    <>
        <div>
        {category && category.data.map((cat) => (
            <div key={cat.id} style={{ marginBottom: '20px' }}>
            <h2>{cat.name}</h2>
            <p>{cat.short_description}</p>
            </div>
        ))}
        </div>
    </>
  );
}

export default HomeCategory;
