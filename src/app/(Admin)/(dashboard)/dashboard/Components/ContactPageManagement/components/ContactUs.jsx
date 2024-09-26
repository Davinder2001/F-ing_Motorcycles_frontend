'use client';
import React, { useEffect, useState } from 'react';
import { EXPORT_ALL_APIS } from '../../../../../../../../utils/apis/apis';
const api = EXPORT_ALL_APIS();

const ContactUs = () => {

  // State hooks for the fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [data, setData] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  // Function to save or update contact page
  const saveOrUpdateHandler = async () => {
    if (!name.trim() || !email.trim() || !number.trim()) {
      alert('Please fill all fields (name, email, and number).');
      return;
    }

    const userDetails = { name, email, number };

    try {
      if (selectedUserId === null) {
        // Create new user
        await api.createContactPage(userDetails);
      } else {
        // Update existing user
        await api.updateContactPage(userDetails, selectedUserId);
      }

      // Clear input fields and reset selected userId after successful save/update
      setName('');
      setEmail('');
      setNumber('');
      setSelectedUserId(null);

      // Fetch updated data
      loadPage();
    } catch (error) {
      console.error('Error saving/updating contact page:', error);
      alert('Error saving/updating contact page');
    }
  };

  // Function to delete a user
  const deleteHandler = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) {
      return;
    }

    try {
      await api.deleteContactPage(id); // Call the API to delete the user
      loadPage(); // Reload the data after deletion
    } catch (error) {
      console.error('Error deleting contact page:', error);
      alert('Error deleting contact page');
    }
  };

  // Handler to select user and prefill the form for update
  const selectUserForUpdate = (id, name, email, number) => {
    setSelectedUserId(id);
    setName(name);
    setEmail(email);
    setNumber(number);
  };

  // Function to load data from the API
  const loadPage = async () => {
    try {
      const resp = await api.fetchContactPage(); // Fetch data from API
      setData(resp.data);
    } catch (error) {
      console.error('Error fetching contact page data:', error);
    }
  };

  // Effect to load data when component mounts
  useEffect(() => {
    loadPage();
  }, [api]);

  return (
    <>
    <h3>Contact us</h3>
      {/* Input fields for name, email, and number */}
      <input 
        type='text' 
        placeholder='Enter name' 
        onChange={(e) => setName(e.target.value)} 
        value={name}
      />
      <input 
        type='email' 
        placeholder='Enter email' 
        onChange={(e) => setEmail(e.target.value)} 
        value={email}
      />
      <input 
        type='text' 
        placeholder='Enter number' 
        onChange={(e) => setNumber(e.target.value)} 
        value={number}
      />
      <button onClick={saveOrUpdateHandler}>
        {selectedUserId ? 'Update' : 'Save'}
      </button>

      {data.map((ele) => (
        <div key={ele.id}>
          <h1>{ele.name}</h1>
          <p>{ele.email}</p>
          <p>{ele.number}</p>
          <button onClick={() => selectUserForUpdate(ele.id, ele.name, ele.email, ele.number)}>Edit</button>
          <button onClick={() => deleteHandler(ele.id)}>Delete</button> {/* Delete button */}
        </div>
      ))}
    </>
  );
};

export default ContactUs;
