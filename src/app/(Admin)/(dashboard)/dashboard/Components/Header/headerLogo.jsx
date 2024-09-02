"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const HeaderLogoPage = () => {
  const [logo, setLogo] = useState(null);
  const [newLogo, setNewLogo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await axios.get(`${API_URL}api/headerlogo`);
        const logoPath = response.data.image_path; // Adjust based on actual response structure
        if (logoPath) {
          setLogo(logoPath);
        } else {
          setLogo(null);
        }
      } catch (err) {
        setError("Failed to fetch header logo.");
      } finally {
        setLoading(false);
      }
    };

    fetchLogo();
  }, []);

  const handleLogoUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (newLogo) {
      formData.append("image", newLogo); // Ensure this matches your backend expectation
    }

    try {
      const response = await axios.post(`${API_URL}api/headerlogo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const uploadedLogoPath = response.data.logo; // Adjust based on actual response structure
      if (uploadedLogoPath) {
        setLogo(uploadedLogoPath);
      }
      setSuccess("Header logo uploaded successfully!");
    } catch (err) {
      setError("Failed to upload header logo.");
    }
  };

  const handleLogoUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (newLogo) {
      formData.append("logo", newLogo);
    }

    if (logo) {
      try {
        const response = await axios.put(`${API_URL}api/headerlogo`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        const updatedLogoPath = response.data.logo; // Adjust based on actual response structure
        if (updatedLogoPath) {
          setLogo(updatedLogoPath);
        }
        setSuccess("Header logo updated successfully!");
      } catch (err) {
        setError("Failed to update header logo.");
      }
    } else {
      setError("No logo to update.");
    }
  };

  const handleLogoDelete = async () => {
    if (logo) {
      try {
        await axios.delete(`${API_URL}api/headerlogo`);
        setLogo(null);
        setSuccess("Header logo deleted successfully!");
      } catch (err) {
        setError("Failed to delete header logo.");
      }
    } else {
      setError("No logo to delete.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>Manage Header Logo</h2>

      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}

      <div>

          <div>
            <h3>Current Header Logo:</h3>
            <img
              src={`${API_URL}/storage/${logo}`}
              alt="Header Logo"
              style={{ width: "200px", height: "auto" }}
            />
          </div>
       

        <form onSubmit={handleLogoUpload}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setNewLogo(e.target.files[0])}
          />
          <button type="submit">Upload Logo</button>
        </form>

        {logo && (
          <form onSubmit={handleLogoUpdate}>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setNewLogo(e.target.files[0])}
            />
            <button type="submit">Update Logo</button>
          </form>
        )}

        {logo && <button onClick={handleLogoDelete}>Delete Logo</button>}
      </div>
    </div>
  );
};

export default HeaderLogoPage;
