"use client";

import React, { useEffect, useState } from "react";
import { EXPORT_ALL_APIS } from "../../../../../../../utils/apis/apis";

const api = EXPORT_ALL_APIS();

const HeaderLogoPage = () => {
    const [logo, setLogo] = useState(null);
    const [newLogo, setNewLogo] = useState(null);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        const fetchLogo = async () => {
            try {
                const response = await api.loadHeaderImage();
                if (response && response.image_path) {
                    setLogo(response.image_path);
                }
            } catch (error) {
                setError("Error fetching the header image.");
            }
        };

        fetchLogo();
    }, []);

    const handleLogoUpload = async (e) => {
        e.preventDefault();
        if (newLogo) {
            try {
                const response = await api.uploadHeaderImage(newLogo);
                if (response && response.logo) {
                    setLogo(response.logo);
                    setSuccess("Header logo uploaded successfully!");
                    alert("Header logo uploaded successfully!");
                }
            } catch (err) {
                setError("Failed to upload header logo.");
            }
        }
    };

    const handleLogoUpdate = async (e) => {
        e.preventDefault();
        if (newLogo) {
            try {
                const response = await api.updateHeaderImage(newLogo);
                if (response && response.logo) {
                    setLogo(response.logo);
                    setSuccess("Header logo updated successfully!");
                }
            } catch (err) {
                setError("Failed to update header logo.");
            }
        } else {
            setError("Please select a logo to update.");
        }
    };

    const handleLogoDelete = async () => {
        try {
            const response = await api.deleteHeaderImage();
            if (response) {
                setLogo(null);
                setSuccess("Header logo deleted successfully!");
            }
        } catch (err) {
            setError("Failed to delete header logo.");
        }
    };

    return (
        <div className="container">
            <h2>Manage Header Logo</h2>

            {error && <div className="error">{error}</div>}
            {success && <div className="success">{success}</div>}

            <div>
                <div>
                    <h3>Current Header Logo:</h3>
                    {logo ? (
                        <img
                            src={logo}
                            alt="Header Logo"
                            style={{ width: "200px", height: "auto" }}
                        />
                    ) : (
                        <p>No header logo uploaded.</p>
                    )}
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
                   
                        <button onClick={handleLogoDelete}>Delete Logo</button>
      
                )}
            </div>
        </div>
    );
};

export default HeaderLogoPage;
