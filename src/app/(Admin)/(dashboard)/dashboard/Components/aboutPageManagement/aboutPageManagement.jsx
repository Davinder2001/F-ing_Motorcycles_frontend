import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles for the editor
import { EXPORT_ALL_APIS } from '../../../../../../../utils/apis/apis';

const AboutPageManagement = ({ AboutUs }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [title, setTitle] = useState(''); // For managing the title
    const [description, setDescription] = useState(''); // For managing the description
    const [seoTitle, setSeoTitle] = useState(''); // For managing SEO Title
    const [seoDescription, setSeoDescription] = useState(''); // For managing SEO Description
    const [seoHostUrl, setSeoHostUrl] = useState(''); // For managing SEO Host URL
    const [aboutUsId, setAboutUsId] = useState(null); // Store the About Us ID

    useEffect(() => {
        // Initialize title, description, and SEO fields from props if available
        if (AboutUs?.data && AboutUs.data.length > 0) {
            const about = AboutUs.data[0];
            setTitle(about.title);
            setDescription(about.description);
            setSeoTitle(about.seoTitle); // Assuming the SEO fields are included in the API response
            setSeoDescription(about.seoDescription);
            setSeoHostUrl(about.seoHostUrl);
            setAboutUsId(about.id); // Set the ID when data is available
        }
    }, [AboutUs]);

    // Handle Edit Button Click
    const handleEdit = (id) => {
        setIsEditing(true);
        setIsCreating(false); // Ensure creating mode is off
        setAboutUsId(id); // Set the ID of the About Us being edited
    };

    // Handle Create Button Click
    const handleCreate = () => {
        setIsCreating(true);
        setIsEditing(false); // Ensure editing mode is off
        setTitle(''); // Clear title for new entry
        setDescription(''); // Clear description for new entry
        setSeoTitle(''); // Clear SEO Title for new entry
        setSeoDescription(''); // Clear SEO Description for new entry
        setSeoHostUrl(''); // Clear SEO Host URL for new entry
        setAboutUsId(null); // Clear the ID for new entry
    };

    // Handle Delete Button Click
    const handleDelete = async () => {
        const api = EXPORT_ALL_APIS();
        const token = localStorage.getItem('token');
        
        try {
            await api.deleteAboutUs(token, aboutUsId); // Pass the ID of the About Us
            alert('About Us content deleted');
            // Reset state after deletion
            setTitle('');
            setDescription('');
            setSeoTitle('');
            setSeoDescription('');
            setSeoHostUrl('');
            setAboutUsId(null);
        } catch (error) {
            console.error('Failed to delete About Us content:', error);
        }
    };

    // Handle Submit (Create or Update)
    const handleSubmit = async () => {
        const api = EXPORT_ALL_APIS();
        const token = localStorage.getItem('token');
        const data = {
            title,
            description,
            seoTitle,
            seoDescription,
            seoHostUrl
        };

        try {
            if (isEditing && aboutUsId) {
               
                await api.updateAboutUs(token, data, aboutUsId); // Use aboutUsId for update
            } else if (isCreating) {
                await api.createAboutUs(token, data);
            }
            // Reset form after submission
            setIsEditing(false);
            setIsCreating(false);
        } catch (error) {
            console.error('Failed to create/update About Us content:', error);
        }
    };

    return (
        <div className='admin-about-managment'>
            <h2>About Us Management</h2>
            {title ? (
                  <div>
                  <p><strong>SEO Title :</strong> {seoTitle}</p>
                  <p><strong>SEO Discription :</strong>{seoDescription},</p>
                  <p><strong>SEO Host URL :</strong>{seoHostUrl}</p>
                    <h3>{title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: description }} />
                    <div className='edit-delet-btn'> 
                        <button onClick={() => handleEdit(aboutUsId)}>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                </div>

            ) : (
                <p>No About Us content available. <button onClick={handleCreate}>Add New Content</button></p>
            )}

            {(isEditing || isCreating) && (
                <div>
                    <h3>{isEditing ? 'Edit About Us Content' : 'Create New About Us Content'}</h3>
                    
                    {/* SEO Section */}
                    <h4>SEO</h4>
                    <input
                        type="text"
                        placeholder="SEO Title"
                        value={seoTitle}
                        onChange={(e) => setSeoTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="SEO Description"
                        value={seoDescription}
                        onChange={(e) => setSeoDescription(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="SEO Host URL"
                        value={seoHostUrl}
                        onChange={(e) => setSeoHostUrl(e.target.value)}
                    />

                    {/* Content Section */}
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <ReactQuill
                        theme="snow"
                        value={description}
                        onChange={setDescription}
                    />
                    <button onClick={handleSubmit}>{isEditing ? 'Update' : 'Create'}</button>
                </div>
            )}
        </div>
    );
};

export default AboutPageManagement;
