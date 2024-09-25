'use client';

import React, { useState, useEffect } from 'react';
import { EXPORT_ALL_APIS } from '../../../../../../../../utils/apis/apis'; // Update with your actual API path

const ImageGallery = () => {
  let api = EXPORT_ALL_APIS();

  const [galleries, setGalleries] = useState([]);
  const [createContent, setCreateContent] = useState({
    imgHeading: '',
    image: null,
  });
  const [editContent, setEditContent] = useState({
    imgHeading: '',
    image: null,
  });
  const [editId, setEditId] = useState(null); // Track the item being edited
  const [showCreateForm, setShowCreateForm] = useState(false); // Toggle the create form
  const [showEditForm, setShowEditForm] = useState(false); // Toggle the edit form

  // Fetch the gallery items on component load
  useEffect(() => {
    fetchGalleries();
  }, []);

  const fetchGalleries = async () => {
    try {
      const response = await api.fetchGalleries(); // Replace with the actual API call
      // Check if response.data is an array
      setGalleries(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error('Error fetching galleries:', error);
    }
  };
  

  // Handle create form submission
  const handleCreateSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('imgHeading', createContent.imgHeading);
    if (createContent.image) {
      formData.append('image', createContent.image);
    }

    try {
      const token = localStorage.getItem('token');
      await api.createGallery(token, formData); // Replace with your actual API call

      fetchGalleries(); // Refresh data after creation
      resetCreateForm();
    } catch (error) {
      console.error('Error creating gallery:', error);
    }
  };

  // Handle edit form submission
  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('imgHeading', editContent.imgHeading);
    if (editContent.image) {
      formData.append('image', editContent.image);
    }

    try {
      const token = localStorage.getItem('token');
      await api.updateGallery(token, editId, editContent); // Replace with your actual API call

      fetchGalleries(); // Refresh data after update
      resetEditForm();
    } catch (error) {
      console.error('Error updating gallery:', error);
    }
  };

  // Handle delete action
  const handleDelete = async (gallery) => {
      const id = gallery.id
      const token = localStorage.getItem('token');
      try {
      await api.deleteGallery(token, id); // Replace with your actual API call
      fetchGalleries(); // Refresh data after deletion
    } catch (error) {
      console.error('Error deleting gallery:', error);
    }
  };

  // Handle edit action
  const handleEdit = (gallery) => {
    setEditId(gallery.id);
    setEditContent({
      imgHeading: gallery.imgHeading,
      image: gallery.image, // Keep the current image unless a new one is uploaded
    });
    setShowEditForm(true);
  };

  // Handle input change for create form
  const handleCreateChange = (e) => {
    const { name, value, files } = e.target;
    setCreateContent((prevContent) => ({
      ...prevContent,
      [name]: files ? files[0] : value,
    }));
  };

  // Handle input change for edit form
  const handleEditChange = (e) => {
    const { name, value, files } = e.target;
    setEditContent((prevContent) => ({
      ...prevContent,
      [name]: files ? files[0] : value,
    }));
  };

  // Reset create form after submission or cancel
  const resetCreateForm = () => {
    setCreateContent({
      imgHeading: '',
      image: null,
    });
    setShowCreateForm(false);
  };

  // Reset edit form after submission or cancel
  const resetEditForm = () => {
    setEditContent({
      imgHeading: '',
      image: null,
    });
    setEditId(null);
    setShowEditForm(false);
  };

  return (
    <div>
      <h5>Image Gallery Manager</h5>

      {/* Button to toggle create form */}
      {!showCreateForm && !showEditForm && (
        <button onClick={() => setShowCreateForm(true)}>Add New Gallery Item</button>
      )}

      {/* Create form */}
      {showCreateForm && (
        <form onSubmit={handleCreateSubmit}>
          <div>
            <label>Image Heading:</label>
            <input
              type="text"
              name="imgHeading"
              value={createContent.imgHeading}
              onChange={handleCreateChange}
              placeholder="Image Heading"
              required
            />
          </div>
          <div>
            <label>Image:</label>
            <input
              type="file"
              name="image"
              onChange={handleCreateChange}
              accept="image/*"
            />
          </div>
          <button type="submit">Create</button>
          <button type="button" onClick={resetCreateForm}>Cancel</button>
        </form>
      )}

      {/* Edit form */}
      {showEditForm && (
        <form onSubmit={handleEditSubmit}>
          <div>
            <label>Image Heading:</label>
            <input
              type="text"
              name="imgHeading"
              value={editContent.imgHeading}
              onChange={handleEditChange}
              placeholder="Image Heading"
              required
            />
          </div>
          <div>
            <label>Image:</label>
            <input
              type="file"
              name="image"
              onChange={handleEditChange}
              accept="image/*"
            />
          </div>
          <button type="submit">Update</button>
          <button type="button" onClick={resetEditForm}>Cancel</button>
        </form>
      )}

      {/* Display existing gallery items */}
      <div>
  <h2>Existing Gallery Items</h2>
  <ul>
    {galleries.length > 0 ? (
      galleries.map((gallery) => (
        <li key={gallery.id}>
          <p>{gallery.imgHeading}</p>
          {gallery.image && (
            <img
              src={gallery.image}
              alt={gallery.imgHeading}
              width="100"
            />
          )}
          <button onClick={() => handleEdit(gallery)}>Edit</button>
          <button onClick={() => handleDelete(gallery)}>Delete</button>
        </li>
      ))
    ) : (
      <p>No gallery items available.</p>
    )}
  </ul>
</div>

    </div>
  );
};

export default ImageGallery;
