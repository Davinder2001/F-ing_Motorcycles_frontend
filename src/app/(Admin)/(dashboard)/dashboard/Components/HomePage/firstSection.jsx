"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000/';

const HomeContentPage = () => {
  const [image, setImage] = useState(null);
  const [newImage, setNewImage] = useState(null);
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}api/homedata`);
        setImage(response.data.image); // Assuming response data contains image path and id
        setHeading(response.data.heading || ''); // Assuming response data contains heading
        setDescription(response.data.description || ''); // Assuming response data contains description
      } catch (err) {
        setError('Failed to fetch home content.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (newImage) {
      formData.append('image', newImage);
    }
    formData.append('heading', heading);
    formData.append('description', description);

    try {
      const response = await axios.post(`${API_URL}api/homedata`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setImage(response.data.image); // Assuming response data contains updated image path and id
      setHeading(response.data.heading); // Assuming response data contains updated heading
      setDescription(response.data.description); // Assuming response data contains updated description
      setSuccess('Home content updated successfully!');
    } catch (err) {
      setError('Failed to update home content.');
    }
  };

  const handleImageDelete = async () => {
    if (image && image.id) {
      try {
        await axios.delete(`${API_URL}api/delete-image/${image.id}`);
        setImage(null);
        setSuccess('Image deleted successfully!');
      } catch (err) {
        setError('Failed to delete image.');
      }
    } else {
      setError('No image to delete.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>Manage Home Content</h2>

      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}

      <div>
        {image ? (
          <div>
            <h3>Current Image:</h3>
            <img src={image} alt="Current" style={{ width: '200px', height: 'auto' }} />
          </div>
        ) : (
          <p>No image found.</p>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setNewImage(e.target.files[0])}
          />
          <input
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            placeholder="Heading"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
          <button type="submit">Upload/Update Content</button>
        </form>

        {image && (
          <button onClick={handleImageDelete}>Delete Image</button>
        )}
      </div>
    </div>
  );
};

export default HomeContentPage;
