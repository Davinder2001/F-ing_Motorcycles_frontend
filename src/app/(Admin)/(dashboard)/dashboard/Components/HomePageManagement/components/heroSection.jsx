'use client'
import React, { useState, useEffect } from 'react';

import { EXPORT_ALL_APIS } from '../../../../../../../../utils/apis/apis';

const HeroSection = () => {
  let api = EXPORT_ALL_APIS()
  const [heroSections, setHeroSections] = useState([]);
  const [createContent, setCreateContent] = useState({
    text: '',
    image: null,
  });
  const [editContent, setEditContent] = useState({
    text: '',
    image: null,
  });
  const [editId, setEditId] = useState(null); // For tracking updates
  const [showCreateForm, setShowCreateForm] = useState(false); // To toggle create form visibility
  const [showEditForm, setShowEditForm] = useState(false); // To toggle edit form visibility

  // Fetch the hero sections when the component loads
  useEffect(() => {
    fetchHeroSections();
  }, []);

  const fetchHeroSections = async () => {
    try {
      const response = await api.fetchHeroSections();
      setHeroSections(response);
    } catch (error) {
      console.error('Error fetching hero sections:', error);
    }
  };

  // Handle create form submission
 // Handle create form submission
const handleCreateSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('text', createContent.text);
  
  if (createContent.image) {
    formData.append('image', createContent.image);
  }

  try {
  
    const token = localStorage.getItem('token');

    await api.createHeroSection(token, formData);

    fetchHeroSections(); // Refresh data after creation
    resetCreateForm();
  } catch (error) {
    console.error('Error creating the hero section:', error);
  }
};


  // Handle edit form submission
  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('text', editContent.text);
    if (editContent.image) {
      formData.append('image', editContent.image);
    }
    const token = localStorage.getItem('token');
   
    try {
      await api.updateeHeroSection(token, editId, editContent);

      fetchHeroSections(); // Refresh data after update
      resetEditForm();
    } catch (error) {
      console.error('Error updating the hero section:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.deleteHeroSection(id);
      fetchHeroSections(); // Refresh the data
    } catch (error) {
      console.error('Error deleting the hero section:', error);
    }
  };

  // Handle edit action
  const handleEdit = (heroSection) => {
    setEditId(heroSection.id);
    setEditContent({
      text: heroSection.text,
      image: heroSection.image, // Keep the previous image unless a new one is uploaded
    });
    setShowEditForm(true); // Show the edit form when editing
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
      text: '',
      image: null,
    });
    setShowCreateForm(false); // Hide the create form
  };

  // Reset edit form after submission or cancel
  const resetEditForm = () => {
    setEditContent({
      text: '',
      image: null,
    });
    setEditId(null);
    setShowEditForm(false); // Hide the edit form
  };

  return (
    <div>
      <h5>Hero Section Manager</h5>

      {/* Button to toggle create form */}
      {!showCreateForm && !showEditForm && (
        <button onClick={() => setShowCreateForm(true)}>Add New Hero Section</button>
      )}

      {/* Create form */}
      {showCreateForm && (
        <form onSubmit={handleCreateSubmit}>
          <div>
            <label>Text:</label>
            <input
              type="text"
              name="text"
              value={createContent.text}
              onChange={handleCreateChange}
              placeholder="Text"
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
            <label>Text:</label>
            <input
              type="text"
              name="text"
              value={editContent.text}
              onChange={handleEditChange}
              placeholder="Text"
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

      <div>
        <h2>Existing Hero Sections</h2>
        <ul>
          {heroSections?.map((heroSection) => (
            <li key={heroSection.id}>
              <p>{heroSection.text}</p>
              {heroSection.image && (
                <img
                  src={heroSection.image}
                  alt={heroSection.text}
                  width="100"
                />
              )}
              <button onClick={() => handleEdit(heroSection)}>Edit</button>
              <button onClick={() => handleDelete(heroSection.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeroSection;
