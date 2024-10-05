'use client';

import React, { useState, useEffect } from 'react';
import { EXPORT_ALL_APIS } from '../../../../../../../../utils/apis/apis';

const FetchDataPage = () => {
  let api = EXPORT_ALL_APIS();

  const [energies, setEnergies] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    short_description: '',
    long_description: '',
    image: null,
  });
  const [editId, setEditId] = useState(null); // Track the energy item being edited
  const [showCreateForm, setShowCreateForm] = useState(false); // Toggle the create form
  const [showEditForm, setShowEditForm] = useState(false); // Toggle the edit form

  // Fetch energy items on component load
  useEffect(() => {
    fetchEnergies();
  }, []);

  const fetchEnergies = async () => {
    try {
      const response = await api.fetchGreenEnergy(); // Replace with the actual API call
      setEnergies(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error('Error fetching energies:', error);
    }
  };

  // Handle create form submission
  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      await api.createGreenEnergy(token, formData); // Use your create function
      fetchEnergies(); // Refresh data after creation
      resetForm();
    } catch (error) {
      console.error('Error creating energy:', error);
    }
  };

  // Handle edit form submission
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      await api.updateGreenEnergy(token, editId, formData); // Use your update function
      fetchEnergies(); // Refresh data after update
      resetForm();
    } catch (error) {
      console.error('Error updating energy:', error);
    }
  };

  // Handle delete action
  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');

    try {
      await api.deleteGreenEnergy(token, id); // Use your delete function
      fetchEnergies(); // Refresh data after deletion
    } catch (error) {
      console.error('Error deleting energy:', error);
    }
  };

  // Handle edit action
  const handleEdit = (energy) => {
    setEditId(energy.id);
    setFormData({
      name: energy.name,
      short_description: energy.short_description,
      long_description: energy.long_description,
      image: null, // Keep the current image unless a new one is uploaded
    });
    setShowEditForm(true);
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevContent) => ({
      ...prevContent,
      [name]: files ? files[0] : value,
    }));
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      name: '',
      short_description: '',
      long_description: '',
      image: null,
    });
    setEditId(null);
    setShowCreateForm(false);
    setShowEditForm(false);
  };

  return (
    <div className='admin-content-homepage'>
      <div className='inner-homepage-addon'>
        <h5>Green Energy Manager</h5>

        {/* Show "Add New Energy Item" button only if no data exists */}
        {!showCreateForm && !showEditForm && energies.length === 0 && (
          <button onClick={() => setShowCreateForm(true)}>Add New Energy Item</button>
        )}
      </div>

      {/* Create form */}
      {showCreateForm && (
        <form onSubmit={handleCreateSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Energy Name"
              required
            />
          </div>
          <div>
            <label>Short Description:</label>
            <input
              type="text"
              name="short_description"
              value={formData.short_description}
              onChange={handleChange}
              placeholder="Short Description"
              required
            />
          </div>
          <div>
            <label>Long Description:</label>
            <textarea
              name="long_description"
              value={formData.long_description}
              onChange={handleChange}
              placeholder="Long Description"
              required
            />
          </div>
          <div>
            <label>Image:</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              accept="image/*"
            />
          </div>
          <button type="submit">Create</button>
          <button type="button" onClick={resetForm}>Cancel</button>
        </form>
      )}

      {/* Edit form */}
      {showEditForm && (
        <form onSubmit={handleEditSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Energy Name"
              required
            />
          </div>
          <div>
            <label>Short Description:</label>
            <input
              type="text"
              name="short_description"
              value={formData.short_description}
              onChange={handleChange}
              placeholder="Short Description"
              required
            />
          </div>
          <div>
            <label>Long Description:</label>
            <textarea
              name="long_description"
              value={formData.long_description}
              onChange={handleChange}
              placeholder="Long Description"
              required
            />
          </div>
          <div>
            <label>Image:</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              accept="image/*"
            />
          </div>
          <button type="submit">Update</button>
          <button type="button" onClick={resetForm}>Cancel</button>
        </form>
      )}

      {/* Display existing energy items */}
      <div className='existing-energy-admin'>
        <h2>Existing Green Energy Items</h2>
        <ul>
          {energies.length > 0 ? (
            energies.map((energy) => (
              <li key={energy.id}>
                <p>{energy.name}</p>
                <p>{energy.short_description}</p>
                {energy.image && (
                  <img
                    src={energy.image}
                    alt={energy.name}
                    width="100"
                  />
                )}
                <div className="edit-delet-btn">
                  <button onClick={() => handleEdit(energy)}>Edit</button>
                  <button onClick={() => handleDelete(energy.id)}>Delete</button>
                </div>
              </li>
            ))
          ) : (
            <p>No energy items available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default FetchDataPage;
