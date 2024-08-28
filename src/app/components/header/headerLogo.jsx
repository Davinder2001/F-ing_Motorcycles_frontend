"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000/';

const HeaderLogoPage = () => {
  const [logo, setLogo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the current header logo from the backend when the component mounts
  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await axios.get(`${API_URL}api/headerlogo`);
        // console.log(response)
        // return
        setLogo(response.data.image_path); // Assuming response data contains the logo path
      } catch (err) {
        setError('Failed to fetch header logo.');
      } finally {
        setLoading(false);
      }
    };

    fetchLogo();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="header-logo-main">


      {error && <div className="error">{error}</div>}

      <div>
     
            <img src={logo} alt="Header Logo" style={{ width: '200px', height: 'auto' }} />
  
      </div>
    </div>
  );
};

export default HeaderLogoPage;
