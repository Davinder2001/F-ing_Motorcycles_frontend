'use client';

import React, { useState, useEffect } from 'react';
import { EXPORT_ALL_APIS } from '../../../../../../../../utils/apis/apis';

const GreenGallery = () => {
  const api = EXPORT_ALL_APIS();

  const [galleries, setGalleries] = useState([]);
  const [createContent, setCreateContent] = useState({ imgHeading: '', image: null });
  const [editContent, setEditContent] = useState({ imgHeading: '', image: null });
  const [editId, setEditId] = useState(null); // Track the gallery being edited
  const [showCreateForm, setShowCreateForm] = useState(false); // Toggle the create form
  const [showEditForm, setShowEditForm] = useState(false); // Toggle the edit form
  const [error, setError] = useState(null); // Handle any errors

  useEffect(() => {
    fetchGalleries();
  }, []);

  // Fetch gallery items
  const fetchGalleries = async () => {
    try {
      const response = await api.fetchGreenEnergyGalry(); // Actual API call
      setGalleries(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error('Error fetching galleries:', error);
      setError('Failed to load galleries.');
    }
  };

  // Handle form submissions (for both create and edit)
  const handleSubmit = async (e, isEdit = false) => {
    e.preventDefault();

    const formData = new FormData();
    const content = isEdit ? editContent : createContent;
    formData.append('imgHeading', content.imgHeading);

    if (content.image) {
      formData.append('image', content.image);
    }

    try {
      const token = localStorage.getItem('token');
      if (isEdit) {
      
        await api.updateGreenEnergyGallery(token, editId, content); // Update gallery
        resetEditForm();
      } else {
        await api.createGreenEnergyGallery(token, content); // Create new gallery
        resetCreateForm();
      }
      fetchGalleries(); // Refresh the gallery list
    } catch (error) {
      console.error(`Error ${isEdit ? 'updating' : 'creating'} gallery:`, error);
      setError(`Failed to ${isEdit ? 'update' : 'create'} gallery.`);
    }
  };

  // Handle delete action
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await api.deleteGreenEnergyGallery(token, id); // Actual API call
      fetchGalleries(); // Refresh data after deletion
    } catch (error) {
      console.error('Error deleting gallery:', error);
      setError('Failed to delete gallery.');
    }
  };

  // Handle edit action
  const handleEdit = (gallery) => {
    setEditId(gallery.id);
    setEditContent({
      imgHeading: gallery.heading,
      image: gallery.image, // No need to populate the current image in the form
    });
    setShowEditForm(true);
  };

  // Handle input change for forms
  const handleInputChange = (e, setContent) => {
    const { name, value, files } = e.target;
    setContent((prevContent) => ({
      ...prevContent,
      [name]: files ? files[0] : value,
    }));
  };

  // Reset forms
  const resetCreateForm = () => {
    setCreateContent({ imgHeading: '', image: null });
    setShowCreateForm(false);
  };

  const resetEditForm = () => {
    setEditContent({ imgHeading: '', image: null });
    setEditId(null);
    setShowEditForm(false);
  };

  return (
    <div className='admin-content-homepage'>
      <div className='inner-homepage-addon'>
        <h5>Slider Images</h5>

        {/* Toggle the create form */}
        {!showCreateForm && !showEditForm && (
          <button onClick={() => setShowCreateForm(true)}>Add New Item</button>
        )}
      </div>

      {/* Error message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Create form */}
      {showCreateForm && (
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>Image Heading:</label>
            <input
              type="text"
              name="imgHeading"
              value={createContent.imgHeading}
              onChange={(e) => handleInputChange(e, setCreateContent)}
              placeholder="Image Heading"
              required
            />
          </div>
          <div>
            <label>Image:</label>
            <input
              type="file"
              name="image"
              onChange={(e) => handleInputChange(e, setCreateContent)}
              accept="image/*"
            />
          </div>
          <button type="submit">Create</button>
          <button type="button" onClick={resetCreateForm}>Cancel</button>
        </form>
      )}

      {/* Edit form */}
      {showEditForm && (
        <form onSubmit={(e) => handleSubmit(e, true)}>
          <div>
            <label>Image Heading:</label>
            <input
              type="text"
              name="imgHeading"
              value={editContent.imgHeading}
              onChange={(e) => handleInputChange(e, setEditContent)}
              placeholder="Image Heading"
              required
            />
          </div>
          <div>
            <label>Image:</label>
            <input
              type="file"
              name="image"
              onChange={(e) => handleInputChange(e, setEditContent)}
              accept="image/*"
            />
          </div>
          <button type="submit">Update</button>
          <button type="button" onClick={resetEditForm}>Cancel</button>
        </form>
      )}

      {/* Display existing gallery items */}
      <div className='existing-gallery-admin'>
        <h2>Existing Green Energy Gallery Items</h2>
        <ul>
          {galleries.length > 0 ? (
            galleries.map((gallery) => (
              <li key={gallery.id}>
                <p>{gallery.heading}</p>
                {gallery.image && (
                  <img
                    src={gallery.image}
                    alt={gallery.imgHeading}
                    width="100"
                  />
                )}
                <div className="edit-delet-btn">
                  <button onClick={() => handleEdit(gallery)}>Edit</button>
                  <button onClick={() => handleDelete(gallery.id)}>Delete</button>
                </div>
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

export default GreenGallery;
