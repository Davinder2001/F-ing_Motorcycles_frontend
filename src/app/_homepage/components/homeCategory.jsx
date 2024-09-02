import React from 'react';

const CategoryList = ({ category }) => {
    // Log the category object to debug
    console.log('Category object:', category);

    // Check if category and category.data are defined
    const isValidCategory = category && Array.isArray(category.data);

    return (
        <div>
            {isValidCategory ? (
                category.data.length > 0 ? (
                    category.data.map((cat) => (
                        <div key={cat.id} style={{ marginBottom: '20px' }}>
                            <h2>{cat.name}</h2>
                            <p>{cat.short_description}</p>
                        </div>
                    ))
                ) : (
                    <p>No categories available.</p>
                )
            ) : (
                <p>Invalid data format or no data available.</p>
            )}
        </div>
    );
};

export default CategoryList;
