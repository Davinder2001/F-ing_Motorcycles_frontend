"use client"
import React, { useEffect, useState } from 'react';
import Layout from './_common/layout/layout';
import { fetchCategories } from '@/Api/CategoryApi/api'; // Adjust the import path as needed

const Page = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Layout>
      <div className='container'>
     
        {categories.length > 0 ? (
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                <h4>{category.name}</h4>
                <p>{category.short_description}</p>
                {/* Display other category details as needed */}
              </li>
            ))}
          </ul>
        ) : (
          <p>No categories available.</p>
        )}
      </div>
    </Layout>
  );
};

export default Page;
