"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000/';

const HomeContentPage = () => {
  const [image, setImage] = useState(null);
  const [newImage, setNewImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`${API_URL}api/homedata`);
        setImage(response.data.image); // Assuming response data contains image path and id
      } catch (err) {
        setError('Failed to fetch image.');
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, []);

  const handleImageUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (newImage) {
      formData.append('image', newImage);
    }

    try {
      const response = await axios.post(`${API_URL}api/homedata`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setImage(response.data.image); // Assuming response data contains image path and id
      setSuccess('Image uploaded successfully!');
    } catch (err) {
      setError('Failed to upload image.');
    }
  };

  const handleImageUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (newImage) {
      formData.append('image', newImage);
    }

    if (image && image.id) {
      try {
        const response = await axios.put(`${API_URL}api/update-image/${image.id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setImage(response.data.image); // Assuming response data contains updated image path and id
        setSuccess('Image updated successfully!');
      } catch (err) {
        setError('Failed to update image.');
      }
    } else {
      setError('No image to update.');
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

        <form onSubmit={handleImageUpload}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setNewImage(e.target.files[0])}
          />
          <button type="submit">Upload Image</button>
        </form>

        {image && (
          <form onSubmit={handleImageUpdate}>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setNewImage(e.target.files[0])}
            />
            <button type="submit">Update Image</button>
          </form>
        )}

        {image && (
          <button onClick={handleImageDelete}>Delete Image</button>
        )}
      </div>
    </div>
  );
};

export default HomeContentPage;
